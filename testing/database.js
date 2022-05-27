export default function DataBase () {
  const { Client } = require('pg');
  const connectionStr = 'postgres://lmpygmtcnrxhwp:e0f895935848855cc88559a6c460c7a75745765ed1324fb85c641c8e2f3d8414@ec2-54-172-175-251.compute-1.amazonaws.com:5432/d18u3tuf7i2vof';
  
  const client = new Client({
    connectionString: connectionStr,
    ssl: {
      rejectUnauthorized: false
    }
  });

  client.connect();

  client.query(`SELECT * FROM test_table`, (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  });
}