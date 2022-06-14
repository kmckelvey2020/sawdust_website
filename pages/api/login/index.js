const pool = require('@/src/database/connection_pool_heroku');
const secret = process.env.JWT_SECRET;
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import cookie from 'cookie';

import { default_results } from '@/src/defaults_and_form_inputs/default_result';

/*-- ****************************************************** -->
<---                HANDLE LOGIN REQUESTS                   -->
<--- ****************************************************** -*/
// To do: Fix "API resolved without sending a response for /api/signup, this may result in stalled requests"
// BUT!!! The client is receiving a response
export default async function handleLoginRequests (req, res) {
    const method = req.method;
    let result = {...default_results};

    try {
        if(method==='POST') {
            // Check hash against user input
            const client = await pool.connect();
            const response = await client.query(`SELECT * FROM admin WHERE admin_username='${req.body.admin_username}';`);
            client.release();
            if(!response.rows || response.rows.length<1) {
                res.status(401).json({"message": "Invalid login credentials."});
            } else {
                compare(req.body.admin_password, response.rows[0].admin_password , async function(err, compare_result) {
                    if(err) throw err;
                    if(compare_result) {
                        const auth_payload = { user: response.rows[0].admin_username, fname: response.rows[0].admin_fname };
                        const jwt = sign(auth_payload, `${secret}`, { expiresIn: '2hr' });
                        res.setHeader('Set-Cookie', cookie.serialize('auth', jwt, {
                            httpOnly: true,
                            secure: process.env.NODE_ENV !== 'development',
                            sameSite: 'strict',
                            maxAge: 7200,
                            path: '/'
                        }));
                        result = { 
                            "response": (response) ? response.rows : null,
                            "reslength": (response) ? response.rows.length : 0,
                            "message": [`${response.rows.length>0 ? 'Hello ' + response.rows[0].admin_username + '. Welcome back!' : 'Invalid login credentials.'}`],
                            "authToken": jwt ? 'Authorized' : null
                        };
                        res.status(200).json(result); // Success
                    } else {
                        res.status(401).json({"message": "Invalid login credentials."});
                    }
                });
            }
        } else { // Invalid request
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