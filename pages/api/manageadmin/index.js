const pool = require('@/src/database/connection_pool_heroku');
import { hash, compare } from 'bcrypt';
import { default_results } from '@/src/defaults_and_form_inputs/default_result';

/*-- ****************************************************** -->
<---             HANDLE MANAGE ADMIN REQUESTS               -->
<--- ****************************************************** -*/
// To do: Fix "API resolved without sending a response for /api/signup, this may result in stalled requests"
// BUT!!! The client is receiving a response
export default async function handleManageRequests (req, res) {
    const method = req.method;
    let result = {...default_results};

/*-- ****************************************************** -->
<---                   SIGNUP NEW ADMIN                     -->
<--- ****************************************************** -*/
    try {
        if(method==='POST') {
            hash(req.body.signup_password, 10, async function(err, hash) {
                // Store hash in password DB
                if(err) throw err;
                const client = await pool.connect();
                const response = await client.query(`INSERT INTO admin (admin_username, admin_password, admin_fname, admin_lname) VALUES ('${req.body.signup_username}', '${hash}', '${req.body.signup_fname}', '${req.body.signup_lname}') RETURNING admin_username;`);
                client.release();
                result = { 
                    "response": (response) ? response.rows : null,
                    "reslength": (response) ? response.rows.length : 0,
                    "message": [`${response.rows.length>0 ? 'Successfully added ' + req.body.signup_username.replace(/\'\'/g,"\'") + '. Welcome!' : 'Could not add new user. Make sure the username is unique.'}`]
                };
                res.status(200).json(result); // Success
            });
        }

/*-- ****************************************************** -->
<---                 UPDATE EXISTING ADMIN                  -->
<--- ****************************************************** -*/

        else if(method==='PUT') {
            // Check current hash against current user input
            const client = await pool.connect();
            const resp = await client.query(`SELECT * FROM admin WHERE admin_username='${req.body.manage_username}';`);
            client.release();
            if(!resp.rows || resp.rows.length<1) {
                res.status(401).json({"message": "Invalid login credentials."});
            } else {
                compare(req.body.current_password, resp.rows[0].admin_password , async function(err, compare_result) {
                    if(err) throw err;
                    if(compare_result) {
                        hash(req.body.manage_password, 10, async function(err, hash) {
                            // Store new hash and admin info in password DB
                            if(err) throw err;
                            const client = await pool.connect();
                            const response = await client.query(`UPDATE admin SET admin_username='${req.body.manage_username}', admin_password='${hash}', admin_fname='${req.body.manage_fname}', admin_lname='${req.body.manage_lname}' WHERE admin_id=${resp.rows[0].admin_id} RETURNING admin_id, admin_username, admin_fname, admin_lname;`);
                            client.release();
                            result = { 
                                "response": (response) ? response.rows : null,
                                "reslength": (response) ? response.rows.length : 0,
                                "message": [`${response.rows.length>0 ? 'Successfully updated' : 'Did not find'} ${req.body.manage_username.replace(/\'\'/g,"\'")} with admin id ${response.rows[0].admin_id}.`]
                            };
                            res.status(200).json(result); // Success
                        });
                    } else {
                        res.status(401).json({"message": "Invalid login credentials."});
                    }
                });
            }
        }

/*-- ****************************************************** -->
<---      INVALID REQUEST AND/OR NO PRODUCT ID HANDLED      -->
<--- ****************************************************** -*/

        else {
            const error_message = `Error: Req.method is: ${ method }.`;
            result = {
                "response": [error_message],
                "reslength": 0,
                "message": [error_message]
            }
            console.error(error_message);
            res.status(405).json(result);
        }
    } catch(err) {
        result = {
            "response": [err],
            "reslength": 0,
            "message": [err]
        }
        console.error(err, err.stack);
        res.status(500).json(result);
    }
}