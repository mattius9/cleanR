const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//service data is recreated in case the original agent decides to delete the service, so appointment saves an instance of the service
const appointmentSchema = new Schema({
  serviceName: {type: String, required: true, unique: true},
  servicePrice:{type: Number, required: true, unique: true},
  startTime:{type:Date, required: true},
  endTime: {type: Date, required: true},
  status: {type: String, enum:['pending', 'confirmed', 'cancelled']},
  clientName:{type: String, required: true},
  clientId:{type: String, required: true},
  agentName:{type: String, required: true},
  agentId:{type: String, required: true},
}, {
  timestamps: true
});

module.exports = mongoose.model('Appointment', appointmentSchema);