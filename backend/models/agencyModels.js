const db = require("./db");

const Agency = {
  addAgency: async (agencyData) => {
    const { AID, ScholarshipName, Type } = agencyData;
    const sql =
      "INSERT INTO Agency (AID, ScholarshipName, Type) VALUES (?, ?, ?)";
    const params = [AID, ScholarshipName, Type];

    try {
      const result = await db.query(sql, params);
      console.log("Agency added successfully:", result);
      return { success: true, message: "Agency added successfully" };
    } catch (error) {
      console.error("Error adding agency to database:", error);
      throw error;
    }
  },

  getAllAgencies: async () => {
    // Implement a method to get all agencies from the database
    const sql = 'SELECT * FROM Agency';

    try {
        const result = await db.query(sql);

        // Log the actual result format
        console.log('Result from the database:', result);

        // Check if result is an array
        if (!Array.isArray(result)) {
            throw new Error('Unexpected result format from the database');
        }

        // Extract rows from the result to avoid circular structure
        const agencies = result.map(row => ({ ...row }));

        console.log('All agencies retrieved successfully:', agencies);
        return agencies;
    } catch (error) {
        console.error('Error getting all agencies from database:', error);
        throw error;
    }
},



  getAgencyById: async (agencyId) => {
    // Implement a method to get an agency by ID from the database
    const sql = "SELECT * FROM Agency WHERE AID = ?";
    const params = [agencyId];

    try {
      const result = await db.query(sql, params);
      console.log("Agency retrieved by ID successfully:", result);
      return result;
    } catch (error) {
      console.error("Error getting agency by ID from database:", error);
      throw error;
    }
  },

  updateAgency: async (agencyData) => {
    const { id, Type, ScholarshipName } = agencyData;
    const sql = "UPDATE Agency SET Type = ?, ScholarshipName = ? WHERE AID = ?";
    const params = [Type, ScholarshipName, id];

    try {
      const result = await db.query(sql, params);
      console.log("Agency updated successfully:", result);
      return { success: true, message: "Agency updated successfully" };
    } catch (error) {
      console.error("Error updating agency in the database:", error);
      throw error;
    }
  },

  deleteAgency: async (agencyId) => {
    // Implement a method to delete an agency from the database
    const sql = "DELETE FROM Agency WHERE AID = ?";
    const params = [agencyId];

    try {
      const result = await db.query(sql, params);
      console.log("Agency deleted successfully:", result);
      return { success: true, message: "Agency deleted successfully" };
    } catch (error) {
      console.error("Error deleting agency from database:", error);
      throw error;
    }
  },

  checkAgencyByAID: async (aid) => {
    const sql = "SELECT * FROM Agency WHERE AID = ?";
    const params = [aid];

    try {
      const result = await db.query(sql, params);
      return { exists: result.length > 0 };
    } catch (error) {
      console.error("Error checking agency by AID:", error);
      throw error;
    }
  },
};

module.exports = Agency;
