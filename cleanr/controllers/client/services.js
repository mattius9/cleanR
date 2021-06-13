const ServiceModel = require('../models/service');
module.exports= {
    showAllServices,
}
//shows user all the selected agent's services
async function showAllServices(req, res){
try{
    let services= await ServiceModel.find();
    res.status(200).json(services);
} catch(err){
    res.status(400).json(err);
}
}