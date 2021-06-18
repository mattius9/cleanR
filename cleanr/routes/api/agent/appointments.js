// NO ROUTES USED HERE YET, CONSIDER MERGE WTIH CLIENT APPOINTMENTS


const express = require('express');
const agentAppointmentsCtrl = require('../../../controllers/agent/appointments');
const router = express.Router();

// POST /api/agent/appointments (retrieves the agent's appointment info) for calendar/list view
router.get('/agent/appointments', agentAppointmentsCtrl.index);
// POST /api/agent/accepts (allows the agent to accept given appointment, and updates status) 
router.post('/agent/appointments/respond/:id', agentAppointmentsCtrl.respond);

module.exports=router;