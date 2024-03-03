import React, { useState } from 'react';
import axios from 'axios';

const UpdateStatusForm = () => {
  const [status, setStatus] = useState('');

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add logic to update scholarship status
      console.log('Updating scholarship status to:', status);

      // Add API call to update status on the server
      const response = await axios.put('/api/updateScholarshipStatus', { status });
      console.log('API Response:', response.data);
      
      // Add any additional logic based on the response
    } catch (error) {
      console.error('Error updating scholarship status:', error);
      // Handle error appropriately
    }
  };

  return (
    <div>
      <h2>Update Scholarship Status</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Status:
          <input type="text" value={status} onChange={handleStatusChange} />
        </label>
        <button type="submit">Update Status</button>
      </form>
    </div>
  );
};

export default UpdateStatusForm;
