const { Client } = require('pg');

/*-- ************************************************************* -->
<---                    LOCAL CLIENT CONNECTION                    -->
<--- ************************************************************* -*/
// NEED TO PUT IN ENV.LOCAL AND GITIGNORE

const local_client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "Karchives1!",
  database: "postgres"
});

module.exports = local_client;