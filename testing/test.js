
export default function Test (req, res) {
    console.log(req.body);

    if (!req.body) {
        res.statusCode = 404;
        res.end("Error");
        return;
    }
    console.log(req.body);
    const { 
        product_name, 
        product_description, 
        product_category, 
        product_price,
        quantity,
        for_sale,
        images,
        alt_description 
    } = req.body;

    res.json({ 
        product_name, 
        product_description, 
        product_category,
        product_price,
        quantity, 
        for_sale, 
        images,
        alt_description 
    });
}