// AddNewScholarship.js
import React, { useState } from 'react';
import axios from 'axios';

const AddNewScholarship = () => {
  const [scholarshipData, setScholarshipData] = useState({
    // Define your scholarship fields here
  });

  const handleAddScholarship = async () => {
    try {
      // Make a POST request to your backend API to add a new scholarship
      const response = await axios.post('/api/scholarships', scholarshipData);
      console.log('Scholarship added successfully:', response.data);
      // You may redirect or show a success message
    } catch (error) {
      console.error('Error adding scholarship:', error);
      // Handle error appropriately
    }
  };

  return (
    <div>
      <h2>Add New Scholarship</h2>
      {/* Create form fields and handle input changes */}
      <button onClick={handleAddScholarship}>Add Scholarship</button>
    </div>
  );
};

export default AddNewScholarship;
