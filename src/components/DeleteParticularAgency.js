// DeleteParticularAgency.js
import React, { useState } from 'react';
import axios from 'axios';

const DeleteParticularAgency = () => {
  const [agencyId, setAgencyId] = useState('');

  const handleDeleteAgency = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/agencies/${agencyId}`);
      console.log('Agency deleted successfully:', response.data);
      // Add any additional logic or redirects as needed
    } catch (error) {
      console.error('Error deleting agency:', error);
      // Handle error appropriately
    }
  };

  return (
    <div>
      <h2>Delete Particular Agency</h2>
      <form>
        <label>
          Agency ID:
          <input type="text" value={agencyId} onChange={(e) => setAgencyId(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleDeleteAgency}>
          Delete Agency
        </button>
      </form>
    </div>
  );
};

export default DeleteParticularAgency;
