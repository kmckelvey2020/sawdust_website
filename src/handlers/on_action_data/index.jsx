import { useState } from "react";

import Logo from "@/src/ui/logo";
import ProductListing from "@/src/features/product_listing";

/*-- ************************************************************* -->
<---                handleOnActionData HANDLER                  -->
<--- ************************************************************* -*/

export default function handleOnActionData({ res, product, setProduct, defaultProductValues, selected_product, setSelected_product, message, setMessage }) {
    if(res.reslength>0) { // Success
        setProduct((prevState) => ({ // Fill in form fields with requested data
            ...prevState, 
            product_id: res.response[0].product_id,
            product_name: res.response[0].product_name,
            product_description: res.response[0].product_description,
            product_category: res.response[0].product_category,
            product_price: res.response[0].product_price,
            quantity: res.response[0].quantity,
            for_sale: res.response[0].for_sale, 
            image: [],
            alt_description: []
        }));
        setSelected_product(<ProductListing product={ res.response[0] } />);
    }
    else {
        setSelected_product(<Logo />);
    }
    setMessage(`${res.message[0]}`);
}