// UpdateExistingAgency.js
import React, { useState } from 'react';
import axios from 'axios';

const UpdateExistingAgency = () => {
  const [agencyId, setAgencyId] = useState('');
  const [newType, setNewType] = useState('');
  const [newScholarshipName, setNewScholarshipName] = useState('');

  const handleUpdateAgency = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/agencies/${agencyId}`, {
        Type: newType,
        ScholarshipName: newScholarshipName,
      });
      console.log('Agency updated successfully:', response.data);
      // Add any additional logic or redirects as needed
    } catch (error) {
      console.error('Error updating agency:', error);
      // Handle error appropriately
    }
  };

  return (
    <div>
      <h2>Update Existing Agency</h2>
      <form>
        <label>
          Agency ID:
          <input type="text" value={agencyId} onChange={(e) => setAgencyId(e.target.value)} />
        </label>
        <br />
        <label>
          New Type:
          <input type="text" value={newType} onChange={(e) => setNewType(e.target.value)} />
        </label>
        <br />
        <label>
          New Scholarship Name:
          <input
            type="text"
            value={newScholarshipName}
            onChange={(e) => setNewScholarshipName(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleUpdateAgency}>
          Update Agency
        </button>
      </form>
    </div>
  );
};

export default UpdateExistingAgency;
