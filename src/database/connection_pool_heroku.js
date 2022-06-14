const { Pool } = require('pg');
const connectionStr = process.env.DATABASE_URL;

/*-- ****************************************************** -->
<---               DATABASE CONNECTION SETUP                -->
<--- ****************************************************** -*/

const pool = new Pool({
  connectionString: connectionStr,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;