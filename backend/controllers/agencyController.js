// agencyController.js
const Agency = require('../models/agencyModels');

const addAgency = async (req, res) => {
  try {
    const { AID, ScholarshipName, Type } = req.body;
    const result = await Agency.addAgency({ AID, ScholarshipName, Type });
    res.json(result);
  } catch (error) {
    console.error('Error adding agency:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllAgencies = async (req, res) => {
  try {
    const result = await Agency.getAllAgencies();
    res.json(result);
  } catch (error) {
    console.error('Error fetching agencies:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAgencyById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Agency.getAgencyById(id);
    res.json(result);
  } catch (error) {
    console.error('Error fetching agency:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateAgency = async (req, res) => {
  try {
    const { id } = req.params;
    const { Type, ScholarshipName } = req.body;

    // Call the updateAgency method of the Agency model
    const result = await Agency.updateAgency({ id, Type, ScholarshipName });

    // Handle the result and send a response
    res.json(result);
  } catch (error) {
    console.error('Error updating agency:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteAgency = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Agency.deleteAgency(id);
    res.json(result);
  } catch (error) {
    console.error('Error deleting agency:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const checkAgencyByAID = async (req, res) => {
  try {
    const { aid } = req.params;
    const result = await Agency.checkAgencyByAID(aid);
    res.json(result);
  } catch (error) {
    console.error('Error checking agency by AID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  addAgency,
  getAllAgencies,
  getAgencyById,
  updateAgency,
  deleteAgency,
  checkAgencyByAID,
  // Add other controller methods here
};
