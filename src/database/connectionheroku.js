  const { Client } = require('pg');
  const connectionStr = process.env.DATABASE_URL;
  
/*-- ************************************************************* -->
<---                  DATABASE CONNECTION SETUP                    -->
<--- ************************************************************* -*/

  const client = new Client({
    connectionString: connectionStr,
    ssl: {
      rejectUnauthorized: false
    }
  });

  module.exports = client;