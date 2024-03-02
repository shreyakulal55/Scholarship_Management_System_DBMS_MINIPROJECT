// models/updatesModel.js
const db = require('./db');

// Get all updates
const getAllUpdates = (callback) => {
  db.query('SELECT * FROM updates', (error, results) => {
    if (error) throw error;
    callback(results);
  });
};

// Get a specific update by ID
const getUpdateById = (updateId, callback) => {
  db.query('SELECT * FROM updates WHERE update_id = ?', [updateId], (error, results) => {
    if (error) throw error;
    callback(results[0]); // Assuming update_id is unique
  });
};

// Add a new update
const addUpdate = (newUpdate, callback) => {
  db.query('INSERT INTO updates SET ?', [newUpdate], (error, results) => {
    if (error) throw error;
    callback(results.insertId); // Return the ID of the newly inserted update
  });
};

// Update an existing update
const updateUpdate = (updateId, updatedUpdate, callback) => {
  db.query('UPDATE updates SET ? WHERE update_id = ?', [updatedUpdate, updateId], (error, results) => {
    if (error) throw error;
    callback(results.affectedRows); // Return the number of affected rows
  });
};

// Delete an update by ID
const deleteUpdate = (updateId, callback) => {
  db.query('DELETE FROM updates WHERE update_id = ?', [updateId], (error, results) => {
    if (error) throw error;
    callback(results.affectedRows); // Return the number of affected rows
  });
};

module.exports = {
  getAllUpdates,
  getUpdateById,
  addUpdate,
  updateUpdate,
  deleteUpdate,
};
