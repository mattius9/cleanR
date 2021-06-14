const express = require('express');
const agentServicesCtrl = require('../../../controllers/agent/services');
const router = express.Router();

// GET /api/agents/services retrieves agent's services data, on page with option to create
router.get('/agent/services', agentServicesCtrl.index);
// POST /api/agent/create allows agent to create a service and add  it to list of services
router.post('/agent/services/create', agentServicesCtrl.accept);

module.exports = router;