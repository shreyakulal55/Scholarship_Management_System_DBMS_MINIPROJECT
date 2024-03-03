import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you are using React Router

const ScholarshipDetails = () => {
  const { scholarshipId } = useParams();
  const [scholarship, setScholarship] = useState(null);

  useEffect(() => {
    // Fetch scholarship details based on scholarshipId
    // You need to replace this with your actual API endpoint
    fetch(`/api/scholarships/${scholarshipId}`)
      .then(response => response.json())
      .then(data => setScholarship(data))
      .catch(error => console.error('Error fetching scholarship details:', error));
  }, [scholarshipId]);

  return (
    <div>
      <h2>Scholarship Details</h2>
      {scholarship ? (
        <div>
          <h3>{scholarship.name}</h3>
          <p>Amount: {scholarship.amount}</p>
          <p>Income Requirement: {scholarship.income_requirement || 'Not specified'}</p>
          <p>Caste Requirement: {scholarship.caste_requirement || 'Not specified'}</p>
          <p>Gender Requirement: {scholarship.gender_requirement || 'Not specified'}</p>
          {/* Add more scholarship details here */}
        </div>
      ) : (
        <p>Loading scholarship details...</p>
      )}
    </div>
  );
};

export default ScholarshipDetails;
