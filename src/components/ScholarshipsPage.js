// ScholarshipPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const ScholarshipPage = () => {
  return (
    <div>
      <h1>Scholarships Page</h1>
      
      {/* Add New Scholarship Card */}
      <Link to="/scholarships/add">
        <div className="card">
          <h3>Add New Scholarship</h3>
        </div>
      </Link>

      {/* Update Existing Scholarship Card */}
      <Link to="/scholarships/update">
        <div className="card">
          <h3>Update Existing Scholarship</h3>
        </div>
      </Link>

      {/* Read All Scholarships Card */}
      <Link to="/scholarships/read">
        <div className="card">
          <h3>Read All Scholarships</h3>
        </div>
      </Link>

      {/* Delete Particular Scholarship Card */}
      <Link to="/scholarships/delete">
        <div className="card">
          <h3>Delete Particular Scholarship</h3>
        </div>
      </Link>

      {/* Add New Agency Card */}
      <Link to="/agency/add">
        <div className="card">
          <h3>Add New Agency</h3>
        </div>
      </Link>

      {/* Update Existing Agency Card */}
      <Link to="/agency/update">
        <div className="card">
          <h3>Update Existing Agency</h3>
        </div>
      </Link>

      {/* Read All Agencies Card */}
      <Link to="/agency/read">
        <div className="card">
          <h3>Read All Agencies</h3>
        </div>
      </Link>

      {/* Delete Particular Agency Card */}
      <Link to="/agency/delete">
        <div className="card">
          <h3>Delete Particular Agency</h3>
        </div>
      </Link>
    </div>
  );
};

export default ScholarshipPage;
