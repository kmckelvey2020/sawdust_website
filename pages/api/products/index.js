const pool = require('@/src/database/connection_pool_heroku');
import { default_results } from '@/src/defaults_and_form_inputs/default_result';

/*-- ****************************************************** -->
<---               HANDLE PRODUCT REQUESTS                  -->
<--- ****************************************************** -*/

export default async function handleGetAllProductRequests (req, res) {
    const method = req.method;
    let result = {...default_results};

/*-- ****************************************************** -->
<---          GET ALL PRODUCT RECORDS IN DATABASE           -->
<--- ****************************************************** -*/

    try {
        if(method==='GET') {
            const client = await pool.connect();
            const response = await client.query(`SELECT * FROM product_table;`);
            client.release();
            result = { 
                "response": (response) ? response.rows : null,
                "reslength": (response) ? response.rows.length : 0,
                "message": [`We found ${(response) ? response.rows.length : 0} products that match!`]
            };
            res.status(200).json(result);
        }

/*-- ****************************************************** -->
<---                 ONLY GET * SUPPORTED HERE              -->
<--- ****************************************************** -*/

        else {
            const error_message = `Error: request not allowed, req.method is: ${req.method}`;
            result = {
                "response": [error_message],
                "reslength": 0,
                "message": [error_message]
            }
            console.error(error_message, err.stack);
            res.status(400).json(result);
        }
    } catch(err) {
        result = {
            "response": [err],
            "reslength": 0,
            "message": [err]
        }
        console.error(err);
        res.status(500).json(result);
    }
}