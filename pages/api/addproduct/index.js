const pool = require('@/src/database/connection_pool_heroku');
const fs = require('fs');
import formidable from 'formidable';
import { default_results } from '@/src/defaults_and_form_inputs/default_result';
import { authenticated } from '../authentication_verification';
export const config = {
    api: {
        bodyParser: false,
    },
};

/*-- ****************************************************** -->
<---               HANDLE ADD PRODUCT REQUESTS              -->
<--- ****************************************************** -*/

export default authenticated(async function handleAddProductRequests (req, res) {
    const method = req.method;
    let result = {...default_results}, 
        timestamp, oldpath, newpath, newpaths = [], filekeys;
    const form = new formidable.IncomingForm({ 
        keepExtensions: true, 
        multiples: true,
        maxFileSize: 5 * 1024 * 1024,
        uploadDir: `public/` });    

/*-- ****************************************************** -->
<---                 ADD PRODUCT IN DATABASE                -->
<--- ****************************************************** -*/

    if(method==='POST') {
        try {
            form.parse(req, (err, fields, files) => {
                if(!err){
                    req.body = fields;
                    if(files) {
                        req.files = files[""];
                        filekeys= Object.keys(files);
                    }
                    for(let i=0; i<4; i++) { // Max number of files = 4
                        if(files && i<filekeys.length) { // If there is a file for index i
                            timestamp = new Date().toISOString().replace(/[^a-zA-Z0-9]/g, '');
                            oldpath = files[filekeys[i]].filepath;
                            newpath = '/' + timestamp + files[filekeys[i]].originalFilename.replace(/[^a-z_A-Z0-9.]/g, ''); // public folder
                            newpaths.push(`${newpath}`); // Push newpath to add path to database
                            newpath = form.uploadDir + newpath;
                            fs.rename(oldpath, newpath, function (err) {
                                if (err) throw err;
                                console.log('File uploaded and moved!');
                            })
                        } else { // If there are less than 4 files, push empty string
                            newpaths.push('');
                        }
                    }
                } else {
                    console.log('Something went wrong!');
                    throw err;
                }
            });
            const client = await pool.connect();
            const response = await client.query(`INSERT INTO product_table (product_name, product_description, product_category, product_price, quantity, for_sale, image0, alt_description0, image1, alt_description1, image2, alt_description2, image3, alt_description3) VALUES ('${req.body.product_name}', '${req.body.product_description}', '${req.body.product_category}', ${req.body.product_price}, ${req.body.quantity}, ${req.body.for_sale}, '${newpaths[0]}', '${req.body.alt_description0}', '${newpaths[1]}', '${req.body.alt_description1}', '${newpaths[2]}', '${req.body.alt_description2}', '${newpaths[3]}', '${req.body.alt_description3}') RETURNING *;`);
            client.release();
            result = { 
                "response": (response) ? response.rows : null,
                "reslength": (response) ? response.rows.length : 0,
                "message": [`${response.rows.length>0 ? 'Successfully added ' + req.body.product_name.replace(/\'\'/g,"\'") + ' with product id ' + response.rows[0].product_id : 'Could not add new product'}.`]
            };
            res.status(200).json(result);
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
});