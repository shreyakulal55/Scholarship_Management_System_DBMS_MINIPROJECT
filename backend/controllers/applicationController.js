// controllers/applicationController.js
const applicationModel = require('../models/applicationModel');

// Get all applications
const getAllApplications = (req, res) => {
  applicationModel.getAllApplications((applications) => {
    res.json(applications);
  });
};

// Get a specific application by ID
const getApplicationById = (req, res) => {
  const applicationId = req.params.id;
  applicationModel.getApplicationById(applicationId, (application) => {
    if (!application) {
      res.status(404).json({ message: 'Application not found' });
    } else {
      res.json(application);
    }
  });
};

// Add a new application
const addApplication = (req, res) => {
  const newApplication = req.body;
  applicationModel.addApplication(newApplication, (insertedId) => {
    res.json({ message: 'Application added successfully', applicationId: insertedId });
  });
};

// Update an existing application
const updateApplication = (req, res) => {
  const applicationId = req.params.id;
  const updatedApplication = req.body;
  applicationModel.updateApplication(applicationId, updatedApplication, (affectedRows) => {
    if (affectedRows > 0) {
      res.json({ message: 'Application updated successfully' });
    } else {
      res.status(404).json({ message: 'Application not found' });
    }
  });
};

// Delete an application by ID
const deleteApplication = (req, res) => {
  const applicationId = req.params.id;
  applicationModel.deleteApplication(applicationId, (affectedRows) => {
    if (affectedRows > 0) {
      res.json({ message: 'Application deleted successfully' });
    } else {
      res.status(404).json({ message: 'Application not found' });
    }
  });
};

module.exports = {
  getAllApplications,
  getApplicationById,
  addApplication,
  updateApplication,
  deleteApplication,
};
