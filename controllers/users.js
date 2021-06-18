const User = require('../models/user');
const jwt = require('jsonwebtoken'); // import the jwt library
const bcrypt = require('bcrypt'); // import bcrypt

const SALT_ROUNDS = 6; // tell bcrypt how many times to randomize the generation of salt. usually 6 is enough.

module.exports = {
  create,
  login,
  getAgents,
};

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ name: req.body.username });
    // check password. if it's bad throw an error.
    if (!(await bcrypt.compare(req.body.password, user.password))) throw new Error();
    // // if we got to this line, password is ok. give user a new token.
    const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
    res.json(token);
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

// MAP RELATED FUNCTIONS

async function getAgents(req,res){
  try{
    const agents = await User.find({
      roles:{
        $elemMatch: {role: "agent"}
      }
    })
    res.status(200).json(agents);
  } catch(err){
    res.status(400).json(err);
  }
  
}
function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}