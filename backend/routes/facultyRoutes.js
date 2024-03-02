// routes/facultyRoutes.js
const express = require('express');
const router = express.Router();
const facultyController = require('../controllers/facultyController');

// Get all faculties
router.get('/faculties', facultyController.getAllFaculties);

// Get a specific faculty by ID
router.get('/faculties/:id', facultyController.getFacultyById);

// Add a new faculty
router.post('/faculties', facultyController.addFaculty);

// Update an existing faculty
router.put('/faculties/:id', facultyController.updateFaculty);

// Delete a faculty by ID
router.delete('/faculties/:id', facultyController.deleteFaculty);

module.exports = router;
