// ReadAllAgencies.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReadAllAgencies = () => {
  const [agencies, setAgencies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAgencies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/agencies');
        setAgencies(response.data);
      } catch (error) {
        console.error('Error fetching agencies:', error);
        setError('An error occurred while fetching agencies');
      }
    };

    fetchAgencies();
  }, []);

  return (
    <div>
      <h2>Read All Agencies</h2>
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Agency ID</th>
            <th>Scholarship Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {agencies.map((agency) => (
            <tr key={agency.AID}>
              <td>{agency.AID}</td>
              <td>{agency.ScholarshipName}</td>
              <td>{agency.Type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadAllAgencies;
