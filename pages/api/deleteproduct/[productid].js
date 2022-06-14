const pool = require('@/src/database/connection_pool_heroku');
import { default_results } from '@/src/defaults_and_form_inputs/default_result';
import { authenticated } from '../authentication_verification';

/*-- ****************************************************** -->
<---         HANDLE DELETE PRODUCTS BY ID REQUESTS          -->
<--- ****************************************************** -*/

export default authenticated(async function handleProductByIdRequests (req, res) {
    const product_id = `${req.query.productid}`.replace(/[^\d]/g, '');
    const method = req.method;
    let result = {...default_results};

/*-- ****************************************************** -->
<---       DELETE SINGLE PRODUCT BY ID FROM DATABASE        -->
<--- ****************************************************** -*/

    try {

        if(method==='DELETE' && product_id) {
            // Todo: GET image paths from database matching product_id and delete them from public folder before deleting database record.
            const client = await pool.connect();
            const response = await client.query(`DELETE FROM product_table WHERE product_id=${product_id};`);
            client.release();
             result = { 
                "response": (response) ? response.rows : null,
                "reslength": 0,
                "message": [`${response.rowCount>0 ? 'Successfully deleted' : 'Did not find'} product id ${product_id}.`]
            };
            res.status(200).json(result);
        }

/*-- ****************************************************** -->
<---      INVALID REQUEST AND/OR NO PRODUCT ID HANDLED      -->
<--- ****************************************************** -*/

        else {
            const error_message = `Error: Req.method is: ${req.method} and product_id is: ${product_id}`;
            result = {
                "response": [error_message],
                "reslength": 0,
                "message": [error_message]
            }
            console.error(error_message, err.stack);
            res.status(405).json(result);
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
});