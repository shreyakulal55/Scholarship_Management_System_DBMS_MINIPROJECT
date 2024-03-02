// controllers/facultyController.js
const facultyModel = require('../models/facultyModel');

// Get all faculties
const getAllFaculties = (req, res) => {
  facultyModel.getAllFaculties((faculties) => {
    res.json(faculties);
  });
};

// Get a specific faculty by ID
const getFacultyById = (req, res) => {
  const facultyId = req.params.id; // Using 'id' as the parameter name
  facultyModel.getFacultyById(facultyId, (faculty) => {
    if (!faculty) {
      res.status(404).json({ message: 'Faculty not found' });
    } else {
      res.json(faculty);
    }
  });
};

// Add a new faculty
const addFaculty = (req, res) => {
  const newFaculty = req.body;
  facultyModel.addFaculty(newFaculty, (insertedId) => {
    res.json({ message: 'Faculty added successfully', facultyId: insertedId });
  });
};

// Update an existing faculty
const updateFaculty = (req, res) => {
  const facultyId = req.params.id; // Using 'id' as the parameter name
  const updatedFaculty = req.body;
  facultyModel.updateFaculty(facultyId, updatedFaculty, (affectedRows) => {
    if (affectedRows > 0) {
      res.json({ message: 'Faculty updated successfully' });
    } else {
      res.status(404).json({ message: 'Faculty not found' });
    }
  });
};

// Delete a faculty by ID
const deleteFaculty = (req, res) => {
  const facultyId = req.params.id; // Using 'id' as the parameter name
  facultyModel.deleteFaculty(facultyId, (affectedRows) => {
    if (affectedRows > 0) {
      res.json({ message: 'Faculty deleted successfully' });
    } else {
      res.status(404).json({ message: 'Faculty not found' });
    }
  });
};

module.exports = {
  getAllFaculties,
  getFacultyById,
  addFaculty,
  updateFaculty,
  deleteFaculty,
};
