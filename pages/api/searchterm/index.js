const client = require('@/src/database/connectionheroku');

/*-- ************************************************************* -->
<---                    HANDLE SEARCH REQUESTS                     -->
<--- ************************************************************* -*/
export default async function handleSearch (req, res) {
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
<---                   ONLY GET SUPPORTED HERE                     -->
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