// routes/applicationRoutes.js
const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

// Get all applications
router.get('/applications', applicationController.getAllApplications);

// Get a specific application by ID
router.get('/applications/:id', applicationController.getApplicationById);

// Add a new application
router.post('/applications', applicationController.addApplication);

// Update an existing application
router.put('/applications/:id', applicationController.updateApplication);

// Delete an application by ID
router.delete('/applications/:id', applicationController.deleteApplication);

module.exports = router;
