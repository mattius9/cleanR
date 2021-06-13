const ServiceModel = require('../models/service');
module.exports= {
    index,
    create,
}
//Shows all Services
async function index(req, res){
try{
    let services= await ServiceModel.find();
    res.status(200).json(services);
} catch(err){
    res.status(400).json(err);
}
}

//Allows agent to create a service
async function create(req, res){
try{
    let services= await ServiceModel.find();
    console.log('create')
    res.status(200).json(services);
} catch(err){
    res.status(400).json(err);
}
}