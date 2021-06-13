const express = require('express');
const agentAppointmentsCtrl = require('../../../controllers/agent/appointments');
const router = express.Router();

// POST /api/agent/appointments (retrieves the agent's appointment info) for calendar/list view
router.get('/agent/appointments', agentAppointmentsCtrl.index);
// POST /api/agent/accepts (allows the agent to accept given appointment, and updates status) 
router.post('/agent/appointments/accept', agentAppointmentsCtrl.accept);

module.exports=router;