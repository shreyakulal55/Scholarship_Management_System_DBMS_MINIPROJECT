const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mysql = require('mysql');  // Import the MySQL module
const studentRoutes = require('./routes/studentRoutes');  // Import studentRoutes
const facultyRoutes = require('./routes/facultyRoutes');  // Import facultyRoutes
const updatesRoutes = require('./routes/updatesRoutes');  // Import updatesRoutes
const scholarshipRoutes = require('./routes/scholarshipRoutes'); // Include scholarshipRoutes
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Set up MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Use routes
app.use('/api/students', studentRoutes);
app.use('/api/faculties', facultyRoutes);
app.use('/api/updates', updatesRoutes);
app.use('/api/scholarships', scholarshipRoutes); // Use the correct route
// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user is a student
  const studentSql = 'SELECT * FROM Student WHERE S_Name = ? AND USN = ?';
  db.query(studentSql, [username, password], (studentErr, studentResult) => {
    if (studentErr) throw studentErr;

    // If the user is a student, return the role as 'student'
    if (studentResult.length > 0) {
      console.log('Login successful for student');
      res.json({ role: 'student' });  // Return role as JSON
    } else {
      // If the user is not a student, check if the user is a faculty
      const facultySql = 'SELECT * FROM Faculty WHERE F_Name = ? AND F_id = ?';
      db.query(facultySql, [username, password], (facultyErr, facultyResult) => {
        if (facultyErr) throw facultyErr;

        // If the user is a faculty, return the role as 'faculty'
        if (facultyResult.length > 0) {
          console.log('Login successful for faculty');
          res.json({ role: 'faculty' });  // Return role as JSON
        } else {
          // If the user is not found in either table, return an error
          console.log('Invalid credentials');
          res.status(401).json({ error: 'Invalid credentials' });  // Return error as JSON
        }
      });
    }
  });
});

// Endpoint to insert values into the Agency table
app.post('/api/agency', (req, res) => {
  const { AID, ScholarshipName, Type } = req.body;

  const sql = 'INSERT INTO Agency (AID, ScholarshipName, Type) VALUES (?, ?, ?)';
  db.query(sql, [AID, ScholarshipName, Type], (err, result) => {
    if (err) {
      console.error('Error inserting data into Agency table:', err);
      res.status(500).json({ error: 'Error adding scholarship data to Agency table' });
    } else {
      console.log('Data added to Agency table successfully');
      res.status(200).json({ message: 'Scholarship data added successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
