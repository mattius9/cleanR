const User = require('../../models/user');
const Appointment = require('../../models/appointment');
module.exports= {
    index,
    create,
}

//Shows all of client/users appointments
async function index(req, res){
try{
    // let user= await User.findById(req.headers.user).populate('appointments').exec();
    // console.log(user);
    // let appointments = user.appointments;
    console.log(req.headers.user);
    let appointments = await Appointment.find({$or: [{client : ObjectId(req.headers.user)},{agent : ObjectId(req.headers.user)}]}).populate('agent').populate('client').exec();
    console.log(appointments);
    res.status(200).json(appointments);
} catch(err){
    res.status(400).json(err);
}
}

//The function for when the user creates an appointment
async function create(req, res){
try{
    let appointments= await Appointment.find();
    console.log('accept')
    res.status(200).json(appointments);
} catch(err){
    res.status(400).json(err);
}
}