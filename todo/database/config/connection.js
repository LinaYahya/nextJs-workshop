require('dotenv').config();
const { Pool } = require('pg');

const dbUrl = process.env.DB_URL;

const options = {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
};

module.exports = new Pool(options);
