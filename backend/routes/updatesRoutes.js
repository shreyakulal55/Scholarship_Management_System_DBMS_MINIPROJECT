// routes/updatesRoutes.js
const express = require('express');
const router = express.Router();
const updatesController = require('../controllers/updatesController');

// Get all updates
router.get('/updates', updatesController.getAllUpdates);

// Get a specific update by ID
router.get('/updates/:id', updatesController.getUpdateById);

// Add a new update
router.post('/updates', updatesController.addUpdate);

// Update an existing update
router.put('/updates/:id', updatesController.updateUpdate);

// Delete an update by ID
router.delete('/updates/:id', updatesController.deleteUpdate);

module.exports = router;
