
export default async function getAllUsers (req, res) {
    const { Client } = require('pg');
    const connectionStr = 'postgres://lmpygmtcnrxhwp:e0f895935848855cc88559a6c460c7a75745765ed1324fb85c641c8e2f3d8414@ec2-54-172-175-251.compute-1.amazonaws.com:5432/d18u3tuf7i2vof';
    const client = new Client({
        connectionString: connectionStr,
        ssl: {
        rejectUnauthorized: false
        }
    });

    if(req.method !== 'GET') {
        res.status(500).json({message: `Sorry, this function only accepts GET requests. req.method is: ${req.method}`});
        return;
    }

    client
        .connect()
        .then(() => console.log("connected to database"))
        .catch(err => console.error("connection error", err.stack));

    client
        .query(`SELECT * FROM test_table`)
        .then((result) => {
            console.log(result.rows[0]);
            res.json(result.rows[0]);
        })
        .catch(err => console.error("error selecting from table",err.stack))
        .then(() => client.end());
}