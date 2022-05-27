import handleOnActionData from "@/src/handlers/on_action_data";

/*-- ************************************************************* -->
<---                       handleOnPut HANDLER                     -->
<--- ************************************************************* -*/

export default async function handleOnPut({ res, product, setProduct, defaultProductValues, selected_product, setSelected_product, message, setMessage }) {
    const values = [product.product_id, product.product_name, product.product_description, product.product_category, product.product_price, product.quantity, product.for_sale];
    const requiredFieldsFilled = values.every((field) => {
        return `${field}`.trim() !== '';
    })

    if(requiredFieldsFilled){
        await fetch(`/api/products/[${product.product_id}]`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...product})
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            handleOnActionData(res, product, setProduct, defaultProductValues, selected_product, setSelected_product, message, setMessage);
            return data;
        })
        .catch((err) => console.log(err));
    }
    else{
        return {
            "response": [],
            "reslength": 0,
            "message": ["Error: Fill out all required form fields. When ADDING a new product: Do NOT enter a product id. A unique product id will automatically be generated. When UPDATING existing products: DO enter the product id you wish to update, along with the required product fields."] 
        };
    }
}