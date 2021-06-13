const AppointmentModel = require('../models/appointment');
module.exports= {
    index,
    create,
}

//Shows all of client's appointments
async function index(req, res){
try{
    let appointments= await AppointmentModel.find();
    res.status(200).json(appointments);
} catch(err){
    res.status(400).json(err);
}
}

//The function for when the user creates an appointment
async function create(req, res){
try{
    let appointments= await AppointmentModel.find();
    console.log('accept')
    res.status(200).json(appointments);
} catch(err){
    res.status(400).json(err);
}
}