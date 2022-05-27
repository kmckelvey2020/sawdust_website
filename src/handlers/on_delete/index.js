import handleOnDeleteData from "@/src/handlers/on_delete_data";

/*-- ************************************************************* -->
<---                    handleOnDelete HANDLER                     -->
<--- ************************************************************* -*/

export default async function handleOnDelete({ res, product, setProduct, defaultProductValues, selected_product, setSelected_product, message, setMessage }) {
    await fetch(`/api/products/[${product.product_id}]`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        handleOnDeleteData(res, product, setProduct, defaultProductValues, selected_product, setSelected_product, message, setMessage);
        return data;
    })
    .catch((err) => console.log(err));
}