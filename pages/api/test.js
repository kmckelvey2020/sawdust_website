
export default function (req, res) {
    if (!req.body) {
        res.statusCode = 404;
        res.end("Error");
        return;
    }

    const { 
        product_name, 
        product_description, 
        product_category, 
        product_price,
        quantity,
        for_sale,
        imageurl,
        alt_description 
    } = req.body;

    res.json({ 
        product_name, 
        product_description, 
        product_category,
        product_price,
        quantity, 
        for_sale, 
        imageurl,
        alt_description 
    });
}