// Preparing database connection
const client = require('@/src/database/connectionheroku');

// Get all product records
const getProducts = async () => {
    try {
        client
        .connect()
        .then(() => console.log("Connected to database"))
        .catch(err => console.error("Connection error", err.stack));
        
        const result = await client.query(
            `SELECT * FROM product_table;`
        );
        return result.rows;
    } catch (err) {
        console.error(err);
    }
}

// Get product by product_id
const getProductById = async (product_id) => {
    try {
        client
        .connect()
        .then(() => console.log("Connected to database"))
        .catch(err => console.error("Connection error", err.stack));
        
        const result = await client.query(
            `SELECT * FROM product_table WHERE product_id=${product_id};`
        );
        return result.rows;
    } catch (err) {
        console.error(err);
    }
}

// Create product
const createProduct = async (product) => {
    const { product_name, product_description, product_category, product_price, quantity, for_sale, images, alt_description 
    } = product;
    
    try {
        client
        .connect()
        .then(() => console.log("Connected to database"))
        .catch(err => console.error("Connection error", err.stack));
        const result = await client.query(
            `INSERT INTO product_table (product_name, product_description, product_category, product_price, quantity, for_sale) VALUES ('${product_name}', '${product_description}', '${product_category}', ${product_price}, ${quantity}, ${for_sale});`
        );
        return result.rows;
    } catch (err) {
        console.error(err);
    }
}

// Update product
const updateProduct = async (product) => {
    const { product_id, product_name, product_description, product_category, product_price, quantity, for_sale, images, alt_description 
    } = product;
    
    try {
        client
        .connect()
        .then(() => console.log("Connected to database"))
        .catch(err => console.error("Connection error", err.stack));
        const result = await client.query(
            `UPDATE product_table SET product_name='${product_name}', product_description='${product_description}', product_category='${product_category}', product_price=${product_price}, quantity=${quantity}, for_sale=${for_sale}) WHERE product_id=${product_id};`
        );
        return result;
    } catch (err) {
        console.error(err);
    }
}

// Delete product
const deleteProduct = async (product_id) => {
    try {
        client
        .connect()
        .then(() => console.log("Connected to database"))
        .catch(err => console.error("Connection error", err.stack));
        const result = await client.query(
            `DELETE FROM product_table WHERE product_id=${product_id};`
        );
        return result.rows;
    } catch (err) {
        console.error(err);
    }
}

const product_actions = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}

module.exports = product_actions;