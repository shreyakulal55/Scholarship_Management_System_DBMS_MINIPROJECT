// models/facultyModel.js
const db = require('./db');

// Get all faculties
const getAllFaculties = (callback) => {
  db.query('SELECT * FROM Faculty', (error, results) => {
    if (error) throw error;
    callback(results);
  });
};

// Get a specific faculty by ID
const getFacultyById = (facultyId, callback) => {
  db.query('SELECT * FROM Faculty WHERE F_id = ?', [facultyId], (error, results) => {
    if (error) throw error;
    callback(results[0]); // Assuming F_id is unique
  });
};

// Add a new faculty
const addFaculty = (newFaculty, callback) => {
  db.query('INSERT INTO Faculty SET ?', [newFaculty], (error, results) => {
    if (error) throw error;
    callback(results.insertId); // Return the ID of the newly inserted faculty
  });
};

// Update an existing faculty
const updateFaculty = (facultyId, updatedFaculty, callback) => {
  db.query('UPDATE Faculty SET ? WHERE F_id = ?', [updatedFaculty, facultyId], (error, results) => {
    if (error) throw error;
    callback(results.affectedRows); // Return the number of affected rows
  });
};

// Delete a faculty by ID
const deleteFaculty = (facultyId, callback) => {
  db.query('DELETE FROM Faculty WHERE F_id = ?', [facultyId], (error, results) => {
    if (error) throw error;
    callback(results.affectedRows); // Return the number of affected rows
  });
};

module.exports = {
  getAllFaculties,
  getFacultyById,
  addFaculty,
  updateFaculty,
  deleteFaculty,
};
