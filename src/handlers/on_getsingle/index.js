import handleOnActionData from "@/src/handlers/on_action_data";

/*-- ************************************************************* -->
<---                   handleOnGetSingle HANDLER                   -->
<--- ************************************************************* -*/

export default async function handleOnGetSingle({ res, product, setProduct, defaultProductValues, selected_product, setSelected_product, message, setMessage }) {
    await fetch(`/api/products/[${product.product_id}]`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        handleOnActionData(res, product, setProduct, defaultProductValues, selected_product, setSelected_product, message, setMessage);
        return data;
    })
    .catch((err) => console.log(err));
}