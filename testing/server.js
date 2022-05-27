
export default function Server () {
    const client = require('../src/database/connectionheroku.js');
    const express = require('express');
    const app = express();

    app.listen(5432, ()=> {
        console.log("Server is now listening at port 5432")
    });
    client.connect();

    app.get('/test_table', (req, res) => {
        client.query(`SELECT * FROM test_table`, (err, result) => {
            if(!err){
                res.send(result.rows);
            }
            else{
                console.log(err);
            }
        });
        client.end;
    });
}