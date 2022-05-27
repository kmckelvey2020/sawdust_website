const client = require('@/src/database/connectionheroku');

/*-- ************************************************************* -->
<---                   HANDLE PRODUCT REQUESTS                     -->
<--- ************************************************************* -*/
export default async function handleProductRequests (req, res) {
    const method = req.method;
    let result;

/*-- ************************************************************* -->
<---             GET ALL PRODUCT RECORDS IN DATABASE               -->
<--- ************************************************************* -*/
    if(method==='GET') {
        try {
            client
                .connect()
                .then(() => console.log("Connected to database"))
                .catch(err => console.error("Connection error", err.stack));          
            await client
                .query(`SELECT * FROM product_table;`)
                .then((response) => result = {
                    "response": response.rows,
                    "reslength": response.rows.length,
                    "message": [`We found ${response.rows.length} products that match!`]
                })
                .catch((err) => console.error(err))
                .then(() => client.end());
        } catch (err) {
            console.error(err);
        } 
    }

/*-- ************************************************************* -->
<---                ADD NEW PRODUCT TO DATABASE                    -->
<--- ************************************************************* -*/
    else if(method==='POST') {
        try {
            client
                .connect()
                .then(() => console.log("Connected to database"))
                .catch(err => console.error("Connection error", err.stack));          
            await client
                .query(`INSERT INTO product_table (product_name, product_description, product_category, product_price, quantity, for_sale) VALUES ('${req.body.product_name}', '${req.body.product_description}', '${req.body.product_category}', ${req.body.product_price}, ${req.body.quantity}, ${req.body.for_sale}) RETURNING *;`
                )
                .then((response) => result = {
                    "response": response.rows,
                    "reslength": response.rowCount,
                    "message": [`Successfully added ${response.rowCount} row for ${req.body.product_name}. The product id for this product is ${response.rows[0].product_id}.`]
                })
                .catch((err) => console.error(err))
                .then(() => client.end());
        } catch (err) {
            console.error(err);
        } 
    }

/*-- ************************************************************* -->
<---              ONLY GET AND POST SUPPORTED HERE                 -->
<--- ************************************************************* -*/
    else {
        const error_message = `Error: request not allowed, req.method is: ${req.method}`;
        result = {
            "response": [error_message],
            "reslength": 0,
            "message": [error_message]
        }
        console.error(error_message,err.stack);
        res.status(400).json(result);
    }
/*-- ************************************************************* -->
<---                 RETURN SUCCESSFUL RESULTS                     -->
<--- ************************************************************* -*/
    console.log(result);
    res.status(200).json(result);
}