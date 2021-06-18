const AppointmentModel = require('../../models/appointment');
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
        console.log('has been updated 1')
        let appointments = await AppointmentModel.find({$or: [{client : req.headers.user},{agent : req.headers.user}]}).populate('agent').populate('client').exec();
        console.log('has been updated 2')
        console.log(appointments);
        res.status(200).json(appointments);
    } catch(err){
        console.log(err.message)
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