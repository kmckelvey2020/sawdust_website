const client = require('@/src/database/connectionheroku');

/*-- ************************************************************* -->
<---                HANDLE PRODUCTS BY ID REQUESTS                 -->
<--- ************************************************************* -*/
export default async function handleProductByIdRequests (req, res) {
    const product_id = `${req.query.productid}`.replace(/[^\d]/g, '');
    const method = req.method;
    let result;

/*-- ************************************************************* -->
<---          GET SINGLE PRODUCT BY ID FROM DATABASE               -->
<--- ************************************************************* -*/
    if(method==='GET' && product_id) {
        try {
            client
                .connect()
                .then(() => console.log("Connected to database"))
                .catch(err => console.error("Connection error", err.stack));          
            await client
                .query(`SELECT * FROM product_table WHERE product_id=${product_id};`)
                .then((response) => result = {
                        "response": response.rows,
                        "reslength": response.rows.length,
                        "message": [`${response.rows.length>0 ? 'Found' : 'Did not find'} product id: ${product_id}`]
                })
                .catch((err) => console.error(err))
                .then(() => client.end());
        } catch (err) {
            console.error(err);
        } 
    }

/*-- ************************************************************* -->
<---             UPDATE SINGLE PRODUCT BY ID IN DATABASE           -->
<--- ************************************************************* -*/
    else if(method==='PUT' && product_id) {
        try {
            client
                .connect()
                .then(() => console.log("Connected to database"))
                .catch(err => console.error("Connection error", err.stack));          
            await client
                .query(`UPDATE product_table SET product_name='${req.body.product_name}', product_description='${req.body.product_description}', product_category='${req.body.product_category}', product_price=${req.body.product_price}, quantity=${req.body.quantity}, for_sale=${req.body.for_sale} WHERE product_id=${product_id} RETURNING *;`
                )
                .then((response) => result = {
                    "response": response.rows,
                    "reslength": response.rows.length,
                    "message": [`${response.rows.length>0 ? 'Successfully updated' : 'Did not find'} ${req.body.product_name} with product id ${product_id}.`]
                })
                .catch((err) => console.error(err))
                .then(() => client.end());
        } catch (err) {
            console.error(err);
        } 
    }

/*-- ************************************************************* -->
<---          DELETE SINGLE PRODUCT BY ID FROM DATABASE            -->
<--- ************************************************************* -*/
    else if(method==='DELETE' && product_id) {
        try {
            client
                .connect()
                .then(() => console.log("Connected to database"))
                .catch(err => console.error("Connection error", err.stack));          
            await client
                .query(`DELETE FROM product_table WHERE product_id=${product_id};`)
                .then((response) => result = {
                    "response": response.rows,
                    "reslength": response.rowCount,
                    "message": [`${response.rows.length>0 ? 'Successfully deleted' : 'Did not find'} product id ${product_id}.`]
                })
                .catch((err) => console.error(err))
                .then(() => client.end());
        } catch (err) {
            console.error(err);
        }     
    }

/*-- ************************************************************* -->
<---         INVALID REQUEST AND/OR NO PRODUCT ID HANDLED          -->
<--- ************************************************************* -*/
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

/*-- ************************************************************* -->
<---                 RETURN SUCCESSFUL RESULTS                     -->
<--- ************************************************************* -*/
    console.log(result);
    res.status(200).json(result);
}