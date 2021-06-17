const express = require('express');
const clientAppointmentsCtrl = require('../../../controllers/client/appointments');
const router = express.Router();

// POST /api/client/appointments (retrieves the client's appointment info) for calendar/list view
router.get('/client/index', clientAppointmentsCtrl.index);
// POST /api/client/create (allows the client to create an appointment, awaiting status) 
router.post('/client/create', clientAppointmentsCtrl.create);

module.exports = router;