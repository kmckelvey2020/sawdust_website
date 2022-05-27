import { useState } from "react";

import Logo from "@/src/ui/logo";

/*-- ************************************************************* -->
<---                handleOnDeleteData HANDLER                  -->
<--- ************************************************************* -*/

export default function handleOnDeleteData({ res, product, setProduct, defaultProductValues, selected_product, setSelected_product, message, setMessage }) {
    if(res.reslength>0) { // Success
        setProduct((prevState) => ({ // Fill in form fields with defaults
            ...prevState, 
            ...defaultProductValues,
        }));
    }
    setSelected_product(<Logo />);
    setMessage(`${res.message[0]}`);
}