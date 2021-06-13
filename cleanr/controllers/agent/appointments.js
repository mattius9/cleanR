const AppointmentModel = require('../models/appointment');
module.exports= {
    index,
    accept,
}
//also add delete to controller and route
async function index(req, res){
try{
    let appointments= await AppointmentModel.find();
    res.status(200).json(appointments);
} catch(err){
    res.status(400).json(err);
}
}

// For when the agent accepts the appointment
async function accept(req, res){
try{
    let appointments= await AppointmentModel.find();
    console.log('accept')
    res.status(200).json(appointments);
} catch(err){
    res.status(400).json(err);
}
}