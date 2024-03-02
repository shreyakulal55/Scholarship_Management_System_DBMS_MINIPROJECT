// controllers/updatesController.js
const updatesModel = require('../models/updatesModel');

// Get all updates
const getAllUpdates = (req, res) => {
  updatesModel.getAllUpdates((updates) => {
    res.json(updates);
  });
};

// Get a specific update by ID
const getUpdateById = (req, res) => {
  const updateId = req.params.id;
  updatesModel.getUpdateById(updateId, (update) => {
    if (!update) {
      res.status(404).json({ message: 'Update not found' });
    } else {
      res.json(update);
    }
  });
};

// Add a new update
const addUpdate = (req, res) => {
  const newUpdate = req.body;
  updatesModel.addUpdate(newUpdate, (insertedId) => {
    res.json({ message: 'Update added successfully', updateId: insertedId });
  });
};

// Update an existing update
const updateUpdate = (req, res) => {
  const updateId = req.params.id;
  const updatedUpdate = req.body;
  updatesModel.updateUpdate(updateId, updatedUpdate, (affectedRows) => {
    if (affectedRows > 0) {
      res.json({ message: 'Update updated successfully' });
    } else {
      res.status(404).json({ message: 'Update not found' });
    }
  });
};

// Delete an update by ID
const deleteUpdate = (req, res) => {
  const updateId = req.params.id;
  updatesModel.deleteUpdate(updateId, (affectedRows) => {
    if (affectedRows > 0) {
      res.json({ message: 'Update deleted successfully' });
    } else {
      res.status(404).json({ message: 'Update not found' });
    }
  });
};

module.exports = {
  getAllUpdates,
  getUpdateById,
  addUpdate,
  updateUpdate,
  deleteUpdate,
};
