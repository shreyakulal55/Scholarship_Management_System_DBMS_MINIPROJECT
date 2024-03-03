import React, { useState } from 'react';
import axios from 'axios';

const AddNewAgency = () => {
  const [agencyDetails, setAgencyDetails] = useState({
    AID: '', // Include AID field
    ScholarshipName: '',
    Type: '',
  });

  const handleInputChange = (e) => {
    setAgencyDetails({ ...agencyDetails, [e.target.name]: e.target.value });
  };

  const handleAddAgency = async () => {
    try {
      // Check if AID already exists in the database
      const checkAIDResponse = await axios.get(`http://localhost:5000/api/agencies/checkAID/${agencyDetails.AID}`);
      
      if (checkAIDResponse.data.exists) {
        console.error('Agency with AID already exists:', agencyDetails.AID);
        // Handle the case where AID already exists
        return;
      }

      // AID doesn't exist, proceed with adding the agency
      const response = await axios.post('http://localhost:5000/api/agencies', agencyDetails);

      if (response.data.success) {
        console.log('Agency added successfully with AID:', agencyDetails.AID);
        // Add any additional logic or redirects as needed
      } else {
        console.error('Error adding agency:', response.data.message);
        // Handle error message appropriately
      }
    } catch (error) {
      console.error('Error adding agency:', error.message);
      // Handle error appropriately
    }
  };

  return (
    <div>
      <h2>Add New Agency</h2>
      <form>
        <label>
          AID:
          <input type="text" name="AID" value={agencyDetails.AID} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Scholarship Name:
          <input type="text" name="ScholarshipName" value={agencyDetails.ScholarshipName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Type:
          <input type="text" name="Type" value={agencyDetails.Type} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleAddAgency}>
          Add Agency
        </button>
      </form>
    </div>
  );
};

export default AddNewAgency;
