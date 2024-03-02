// routes/scholarshipRoutes.js
const express = require('express');
const router = express.Router();
const scholarshipController = require('../controllers/scholarshipController');

// Get all scholarships
router.get('/scholarships', scholarshipController.getAllScholarships);

// Get a specific scholarship by ID
router.get('/scholarships/:id', scholarshipController.getScholarshipById);

// Add a new scholarship
router.post('/scholarships', scholarshipController.addScholarship);

// Update an existing scholarship
router.put('/scholarships/:id', scholarshipController.updateScholarship);

// Delete a scholarship by ID
router.delete('/scholarships/:id', scholarshipController.deleteScholarship);

module.exports = router;
