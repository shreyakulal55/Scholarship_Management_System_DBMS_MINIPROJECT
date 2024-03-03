//scholarshipRoutes
const express = require('express');
const router = express.Router();
const scholarshipController = require('../controllers/scholarshipController');

// Get all scholarships
router.get('/', scholarshipController.getAllScholarships);

// Get a specific scholarship by ID
router.get('/:id', scholarshipController.getScholarshipById);

// Add a new scholarship
router.post('/', scholarshipController.addScholarship);

// Update an existing scholarship
router.put('/:id', scholarshipController.updateScholarship);

// Delete a scholarship by ID
router.delete('/:id', scholarshipController.deleteScholarship);

module.exports = router;
