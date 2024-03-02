// models/scholarshipModel.js
const db = require('./db');

// Get all scholarships
const getAllScholarships = (callback) => {
  db.query('SELECT * FROM scholarships', (error, results) => {
    if (error) throw error;
    callback(results);
  });
};

// Get a specific scholarship by ID
const getScholarshipById = (scholarshipId, callback) => {
  db.query('SELECT * FROM scholarships WHERE scholarship_id = ?', [scholarshipId], (error, results) => {
    if (error) throw error;
    callback(results[0]); // Assuming scholarship_id is unique
  });
};

// Add a new scholarship
const addScholarship = (newScholarship, callback) => {
  db.query('INSERT INTO scholarships SET ?', [newScholarship], (error, results) => {
    if (error) throw error;
    callback(results.insertId); // Return the ID of the newly inserted scholarship
  });
};

// Update an existing scholarship
const updateScholarship = (scholarshipId, updatedScholarship, callback) => {
  db.query('UPDATE scholarships SET ? WHERE scholarship_id = ?', [updatedScholarship, scholarshipId], (error, results) => {
    if (error) throw error;
    callback(results.affectedRows); // Return the number of affected rows
  });
};

// Delete a scholarship by ID
const deleteScholarship = (scholarshipId, callback) => {
  db.query('DELETE FROM scholarships WHERE scholarship_id = ?', [scholarshipId], (error, results) => {
    if (error) throw error;
    callback(results.affectedRows); // Return the number of affected rows
  });
};

module.exports = {
  getAllScholarships,
  getScholarshipById,
  addScholarship,
  updateScholarship,
  deleteScholarship,
};
