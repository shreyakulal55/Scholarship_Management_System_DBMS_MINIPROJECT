// models/applicationModel.js
const db = require('./db');

// Get all applications
const getAllApplications = (callback) => {
  db.query('SELECT * FROM applications', (error, results) => {
    if (error) throw error;
    callback(results);
  });
};

// Get a specific application by ID
const getApplicationById = (applicationId, callback) => {
  db.query('SELECT * FROM applications WHERE application_id = ?', [applicationId], (error, results) => {
    if (error) throw error;
    callback(results[0]); // Assuming application_id is unique
  });
};

// Add a new application
const addApplication = (newApplication, callback) => {
  db.query('INSERT INTO applications SET ?', [newApplication], (error, results) => {
    if (error) throw error;
    callback(results.insertId); // Return the ID of the newly inserted application
  });
};

// Update an existing application
const updateApplication = (applicationId, updatedApplication, callback) => {
  db.query('UPDATE applications SET ? WHERE application_id = ?', [updatedApplication, applicationId], (error, results) => {
    if (error) throw error;
    callback(results.affectedRows); // Return the number of affected rows
  });
};

// Delete an application by ID
const deleteApplication = (applicationId, callback) => {
  db.query('DELETE FROM applications WHERE application_id = ?', [applicationId], (error, results) => {
    if (error) throw error;
    callback(results.affectedRows); // Return the number of affected rows
  });
};

module.exports = {
  getAllApplications,
  getApplicationById,
  addApplication,
  updateApplication,
  deleteApplication,
};
