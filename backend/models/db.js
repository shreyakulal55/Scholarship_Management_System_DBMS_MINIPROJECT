// models/db.js

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'shreya',
  password: 'shreya',
  database: 'scholarship_portal',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const query = async (sql, params) => {
  const [rows] = await pool.query(sql, params);
  return rows;
};

module.exports = {
  query,
};


