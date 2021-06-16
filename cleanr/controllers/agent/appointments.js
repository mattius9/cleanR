const Appointment = require('../models/appointment');
module.exports= {
    getAppointments,
    accept,
}
//also add delete to controller and route
async function getAppointments(req, res){
try{
    const appointments= await Appointment.find({agent: req.header.user});
    res.status(200).json(appointments);
} catch(err){
    res.status(400).json(err);
}
}

// For when the agent accepts the appointment
async function accept(req, res){
try{
    let appointments= await Appointment.find();
    console.log('accept')
    res.status(200).json(appointments);
} catch(err){
    res.status(400).json(err);
}
}