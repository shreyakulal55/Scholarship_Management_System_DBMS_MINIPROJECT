const scholarshipModel = require('../models/scholarshipModel');

// Get all scholarships
const getAllScholarships = (req, res) => {
  scholarshipModel.getAllScholarships((scholarships) => {
    res.json(scholarships);
  });
};

// Get a specific scholarship by ID
const getScholarshipById = (req, res) => {
  const scholarshipId = req.params.id;
  scholarshipModel.getScholarshipById(scholarshipId, (scholarship) => {
    if (!scholarship) {
      res.status(404).json({ message: 'Scholarship not found' });
    } else {
      res.json(scholarship);
    }
  });
};

// Add a new scholarship
const addScholarship = (req, res) => {
  const newScholarship = req.body;
  scholarshipModel.addScholarship(newScholarship, (insertedId) => {
    res.json({ message: 'Scholarship added successfully', scholarshipId: insertedId });
  });
};

// Update an existing scholarship
const updateScholarship = (req, res) => {
  const scholarshipId = req.params.id;
  const updatedScholarship = req.body;
  scholarshipModel.updateScholarship(scholarshipId, updatedScholarship, (affectedRows) => {
    if (affectedRows > 0) {
      res.json({ message: 'Scholarship updated successfully' });
    } else {
      res.status(404).json({ message: 'Scholarship not found' });
    }
  });
};

// Delete a scholarship by ID
const deleteScholarship = (req, res) => {
  const scholarshipId = req.params.id;
  scholarshipModel.deleteScholarship(scholarshipId, (affectedRows) => {
    if (affectedRows > 0) {
      res.json({ message: 'Scholarship deleted successfully' });
    } else {
      res.status(404).json({ message: 'Scholarship not found' });
    }
  });
};

module.exports = {
  getAllScholarships,
  getScholarshipById,
  addScholarship,
  updateScholarship,
  deleteScholarship,
};
