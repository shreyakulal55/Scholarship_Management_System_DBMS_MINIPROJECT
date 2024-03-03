import React from 'react';
import { Link } from 'react-router-dom';

const FacultyDashboard = () => {
  return (
    <div>
      <h1>Faculty Dashboard</h1>
      <Link to="/scholarships">
        <button>Scholarships</button>
      </Link>
      <Link to="/student-details">
        <button>Student Details</button>
      </Link>
    </div>
  );
};

export default FacultyDashboard;
