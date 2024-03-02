// controllers/studentController.js
const studentModel = require('../models/studentModel');

// Get all students
const getAllStudents = (req, res) => {
  studentModel.getAllStudents((students) => {
    res.json(students);
  });
};

// Get a specific student by ID
const getStudentById = (req, res) => {
  const studentId = req.params.id;
  studentModel.getStudentById(studentId, (student) => {
    if (!student) {
      res.status(404).json({ message: 'Student not found' });
    } else {
      res.json(student);
    }
  });
};

// Add a new student
const addStudent = (req, res) => {
  const newStudent = req.body;
  studentModel.addStudent(newStudent, (insertedId) => {
    res.json({ message: 'Student added successfully', studentId: insertedId });
  });
};

// Update an existing student
const updateStudent = (req, res) => {
  const studentId = req.params.id;
  const updatedStudent = req.body;
  studentModel.updateStudent(studentId, updatedStudent, (affectedRows) => {
    if (affectedRows > 0) {
      res.json({ message: 'Student updated successfully' });
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  });
};

// Delete a student by ID
const deleteStudent = (req, res) => {
  const studentId = req.params.id;
  studentModel.deleteStudent(studentId, (affectedRows) => {
    if (affectedRows > 0) {
      res.json({ message: 'Student deleted successfully' });
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  });
};

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
};
