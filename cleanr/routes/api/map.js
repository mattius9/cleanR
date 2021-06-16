const express = require('express');
const usersCtrl = require('../../controllers/users');
const router = express.Router();

// GET /api/map/agents
router.post('/agents', usersCtrl.getAgents);

module.exports = router;