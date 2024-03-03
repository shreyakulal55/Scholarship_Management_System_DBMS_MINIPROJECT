import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    // Fetch scholarship data from your API
    axios.get('/api/scholarships')
      .then(response => {
        setScholarships(response.data);
      })
      .catch(error => {
        console.error('Error fetching scholarships:', error);
      });
  }, []);

  return (
    <div>
      <h2>Student Dashboard</h2>
      <div>
        <h3>Your Scholarships</h3>
        <ul>
          {scholarships.map(scholarship => (
            <li key={scholarship.scholarship_id}>
              <strong>{scholarship.name}</strong> - {scholarship.amount}
            </li>
          ))}
        </ul>
      </div>
      {/* Add more dashboard content here */}
    </div>
  );
};

export default StudentDashboard;
