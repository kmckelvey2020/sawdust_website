const pool = require('@/src/database/connection_pool_heroku');
import { default_results } from '@/src/defaults_and_form_inputs/default_result';

/*-- ****************************************************** -->
<---        HANDLE GET AND DELETE ADMIN BY ID REQUESTS      -->
<--- ****************************************************** -*/

export default async function handleManageByIdRequests (req, res) {
    const admin_id = `${req.query.adminid}`.replace(/[^\d]/g, '');
    const method = req.method;
    let result = {...default_results};

/*-- ****************************************************** -->
<---         GET SINGLE ADMIN BY ID FROM DATABASE           -->
<--- ****************************************************** -*/

    try{
        if(method==='GET' && admin_id) {
            const client = await pool.connect();
            const response = await client.query(`SELECT * FROM admin WHERE admin_id=${admin_id};`);
            client.release();
            result = { 
                "response": (response) ? response.rows : null,
                "reslength": (response) ? response.rows.length : 0,
                "message": [`${response.rows.length>0 ? 'Found' : 'Did not find'} admin id: ${admin_id}`]
            };
            res.status(200).json(result);
        } 

/*-- ****************************************************** -->
<---         DELETE SINGLE ADMIN BY ID FROM DATABASE        -->
<--- ****************************************************** -*/

        else if(method==='POST' && admin_id) {
            // Check hash against current user input
        //    const client = await pool.connect();
        //    const response = await client.query(`SELECT * FROM admin WHERE admin_username='${req.body.manage_username}';`);
        //    client.release();
        //    if(!response.rows || response.rows.length<1) {
        //        res.status(401).json({"message": "Invalid login credentials."});
        //    } else {
        //        compare(req.body.current_password, response.rows[0].admin_password , async function(err, compare_result) {
        //            if(err) throw err;
        //            if(compare_result) {
                        const client = await pool.connect();
                        const response = await client.query(`DELETE FROM admin WHERE admin_id=${admin_id};`);
                        client.release();
                        result = { 
                            "response": (response) ? response.rows : null,
                            "reslength": 0,
                            "message": [`${response.rowCount>0 ? 'Successfully deleted' : 'Did not find'} admin id ${admin_id}.`]
                        };
                        res.status(200).json(result);
        //            } else {
        //                res.status(401).json({"message": "Invalid login credentials."});
        //            }
        //        });
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
}