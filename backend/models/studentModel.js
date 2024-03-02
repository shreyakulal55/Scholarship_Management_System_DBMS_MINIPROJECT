// models/studentModel.js
const db = require('./db');

// Get all students
const getAllStudents = (callback) => {
  db.query('SELECT * FROM students', (error, results) => {
    if (error) throw error;
    callback(results);
  });
};

// Get a specific student by ID
const getStudentById = (studentId, callback) => {
  db.query('SELECT * FROM students WHERE student_id = ?', [studentId], (error, results) => {
    if (error) throw error;
    callback(results[0]); // Assuming student_id is unique
  });
};

// Add a new student
const addStudent = (newStudent, callback) => {
  db.query('INSERT INTO students SET ?', [newStudent], (error, results) => {
    if (error) throw error;
    callback(results.insertId); // Return the ID of the newly inserted student
  });
};

// Update an existing student
const updateStudent = (studentId, updatedStudent, callback) => {
  db.query('UPDATE students SET ? WHERE student_id = ?', [updatedStudent, studentId], (error, results) => {
    if (error) throw error;
    callback(results.affectedRows); // Return the number of affected rows
  });
};

// Delete a student by ID
const deleteStudent = (studentId, callback) => {
  db.query('DELETE FROM students WHERE student_id = ?', [studentId], (error, results) => {
    if (error) throw error;
    callback(results.affectedRows); // Return the number of affected rows
  });
};

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
};
