const client = require('@/src/database/connectionheroku');

/*-- ************************************************************* -->
<---          HANDLE PRODUCTS BY SEARCHTERM REQUESTS               -->
<--- ************************************************************* -*/
export default async function handleSearchBySearchTerm (req, res) {
    const { search_term } = req.query.searchterm; //To do: TEST THIS
    const method = req.method;
    let result;

/*-- ************************************************************* -->
<---          GET PRODUCTS BY SEARCHTERM FROM DATABASE             -->
<--- ************************************************************* -*/
    if(method==='GET' && search_term) {
        try {
            client
                .connect()
                .then(() => console.log("Connected to database"))
                .catch(err => console.error("Connection error", err.stack));          
            await client
                .query(`SELECT * FROM product_table WHERE product_id=${search_term} OR product_category='${search_term}';`)
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
<---         INVALID REQUEST AND/OR NO PRODUCT ID HANDLED          -->
<--- ************************************************************* -*/
    else {
        const error_message = `Error: Req.method is: ${req.method} and search term is: ${search_term}`;
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