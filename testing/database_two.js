export default function DataBase (req, res) {
    const { Client } = require('pg');
    const connectionStr = 'postgres://lmpygmtcnrxhwp:e0f895935848855cc88559a6c460c7a75745765ed1324fb85c641c8e2f3d8414@ec2-54-172-175-251.compute-1.amazonaws.com:5432/d18u3tuf7i2vof';
    
    const client = new Client({
      connectionString: connectionStr,
      ssl: {
        rejectUnauthorized: false
      }
    });
  
    client.connect();
  
    client.query(`SELECT * FROM test_table`, (err, response) => {
      if (err) throw err;
      
      for (let row of response.rows) {
        console.log(JSON.stringify(row));
        
      }
      client.end();
    });
  }