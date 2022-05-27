import Head from "next/head";
import { useState } from "react";

import styles from "./product_management_form.module.css";
import isValidFormData from "testing/hooks/isValidFormData";
import Button from "@/src/ui/button";
import FileInput from "testing/fileinput";
import NumberInput from "testing/numberinput";
import Radio from "@/src/ui/radio";
import Select from "@/src/ui/select";
import TextField from "testing/textfield";
import TextArea from "@/src/ui/textarea";

/*-- ************************************************************* -->
<---                   PRODUCT_MANAGEMENT_FORM                     -->
<--- ************************************************************* -*/
export default function ProductManagementForm(props){

    //Product object state, setState
    const [product, setProduct] = useState({
        product_id: props.product ? props.product.product_id : '',
        product_name: props.product ? props.product.product_name : '',
        product_description: props.product ? props.product.product_description : '',
        product_category: props.product ? props.product.product_category : 'furniture',
        product_price: props.product ? props.product.product_price : 599.99,
        quantity: props.product ? props.product.quantity : 1,
        for_sale: props.product ? props.product.for_sale : false,
        images: props.product ? props.product.images : [],
        alt_description: props.product ? props.product.alt_description : []
    });
    const { product_id, product_name, product_description, product_category, product_price, quantity, for_sale, images, alt_description 
    } = product;

    //Error_Success message
    const [message, setMessage] = useState('');

/*-- ************************************************************* -->
<---                   LOOK UP EXISTING PRODUCT                    -->
<--- ************************************************************* -*/
async function handleOnLookUp() {
    const res = await fetch(`/api/products/[${product_id}]`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then((response) => response.json())
    .catch((err) => console.log(err));
    //To do: Handle if requested record does not exist
    if(res.length>0) {                    
        setMessage(`Server response:\n ${JSON.stringify(res)}`);
        setProduct((prevState) => ({
            ...prevState, 
            product_name: `${res.product_name}`,
            product_description: `${res.product_description}`,
            product_category: `${res.product_category}`,
            product_price: res.product_price,
            quantity: res.quantity,
            for_sale: res.for_sale
        }));
    }
    else {
        setMessage(`Product Id ${product_id} was not found.`);
    }
}

/*-- ************************************************************* -->
<---                          ADD NEW PRODUCT                      -->
<--- ************************************************************* -*/
async function handleOnAdd() {
    const values = [product.product_name, product.product_description, product.product_category, product.product_price, product.quantity, product.for_sale];
    const requiredFieldsFilled = values.every((field) => {
        return `${field}`.trim() !== '';
    })

    if (requiredFieldsFilled) {
        const res = await fetch('/api/products', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...product})
        }).then((response) => response.json());

        if(res.length>0) {
            setMessage(`Server response:\n ${JSON.stringify(res)}`);
        }
    }
    else{
        setMessage("Error: Fill out all required form fields.")
    }  
}

/*-- ************************************************************* -->
<---                   UPDATE EXISTING PRODUCT                     -->
<--- ************************************************************* -*/
async function handleOnUpdate() {
    //To do: Add update functionality
    const values = [product.product_name, product.product_description, product.product_category, product.product_price, product.quantity, product.for_sale];
    const requiredFieldsFilled = values.every((field) => {
        return `${field}`.trim() !== '';
    })

    if (requiredFieldsFilled) {
        const res = await fetch(`/api/products/[${product_id}]`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...product})
        }).then((response) => response.json());

        if(res) {
            setMessage(`Server response:\n ${JSON.stringify(res)}`);
        }
    }
    else{
        setMessage("Error: Fill out all required form fields.")
    }
}

/*-- ************************************************************* -->
<---                   DELETE EXISTING PRODUCT                     -->
<--- ************************************************************* -*/
async function handleOnDelete() {
    //To do: Add delete functionality
    const res = await fetch(`/api/products/[${product_id}]`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })
    .then((response) => response.json());
    //To do: Handle if requested record does not exist
    //To do: Add "Are you sure?" alert
    if(res.length>0) {
        setMessage(`Server response:\n ${JSON.stringify(res)}`);
    }
}

/*-- ************************************************************* -->
<---                  HANDLE FORM FIELD CHANGE                     -->
<--- ************************************************************* -*/
    function handleOnChange (event) {
        const { name, value } = event.target;
        if(isValidFormData(name, value)){
            setProduct((prevState) => ({
                ...prevState, 
                [name]: value
            }));
        }
        else{
            setMessage("Error: Product price must be a numerical entry to 2 decimal places and product quantity must be an integer.");
        }
    }

/*-- ************************************************************* -->
<---                   PRODUCT_MANAGEMENT_FORM                     -->
<--- ************************************************************* -*/
    return(
        <div className={styles.form_container}>
            <Head>
                <title>Sawdust Product Management Form</title>
                <meta name="description" content="Product Management Form" />
            </Head>
            <p className={ styles.message }>{ message }</p>
            <form>
                <fieldset className={ styles.field_set }>
                    <h5>Product Management</h5>
                    <NumberInput 
                        type="number"
                        label="Product Id" 
                        value={ product_id }
                        min={ 0 }
                        max={ 100000 }
                        step="1"
                        onChange={e => handleOnChange(e)}
                    />
                    <Button
                        type="button"
                        label="Look Up Product"
                        onClick={ handleOnLookUp }
                    />
                    <TextField 
                        type="text" 
                        label="Product Name"
                        placeholder="Enter name of product"
                        value={ product_name }
                        onChange={e => handleOnChange(e)}
                    />
                    <TextArea
                        label="Product Description"
                        placeholder="Enter description of product"
                        rows="4"
                        value={ product_description }
                        onChange={e => handleOnChange(e)}
                    />
                    <Select
                        label="Product Category"
                        options={["Furniture", "Art", "Woodburning", "Misc"]}
                        defaultValue={ product_category }
                        onChange={e => handleOnChange(e)}
                    />
                    <NumberInput 
                        type="number"
                        label="Product Price" 
                        value={ product_price }
                        min={ 0 }
                        max={ 9999.99 }
                        step=".01"
                        onChange={e => handleOnChange(e)}
                    />
                    <NumberInput 
                        type="number"
                        label="Quantity" 
                        value={ quantity }
                        min={ 0 }
                        max={ 1000 }
                        step="1"
                        onChange={e => handleOnChange(e)}
                    />
                    <p>Is this item for sale?</p>
                    <Radio
                        type="radio" 
                        labels={["Yes", "No"]}
                        values={[true, false]}
                        value={ for_sale }
                        groupname="For Sale"
                        onChange={e => handleOnChange(e)}
                    />
                </fieldset>
                <fieldset className={ styles.field_set }>
                    <FileInput 
                        type="file" 
                        label="Select an image to upload" 
                        name="images"
                        value={ images[0] }
                        onChange={e => handleOnChange(e)}
                    />
                    <TextField 
                        type="text" 
                        label="Alt Description"
                        placeholder="Enter Alt Description for Image 1"
                        value={ alt_description[0] }
                        onChange={e => handleOnChange(e)}
                    />
                    <FileInput 
                        type='file' 
                        label="Select an image to upload" 
                        name="images"
                        value={ images[1] }
                        onChange={e => handleOnChange(e)}
                    />
                    <TextField 
                        type="text" 
                        label="Alt Description"
                        placeholder="Enter Alt Description for Image 2"
                        value={ alt_description[1] }
                        onChange={e => handleOnChange(e)}
                    />
                    <FileInput 
                        type='file' 
                        label="Select an image to upload" 
                        name="images"
                        value={ images[2] }
                        onChange={e => handleOnChange(e)}
                    />
                    <TextField 
                        type="text" 
                        label="Alt Description"
                        placeholder="Enter Alt Description for Image 3"
                        value={ alt_description[2] }
                        onChange={e => handleOnChange(e)}
                    />
                    <FileInput 
                        type='file' 
                        label="Select an image to upload" 
                        name="images"
                        value={ images[3] }
                        onChange={e => handleOnChange(e)}
                    />
                    <TextField 
                        type="text" 
                        label="Alt Description"
                        placeholder="Enter Alt Description for Image 4"
                        value={ alt_description[3] }
                        onChange={e => handleOnChange(e)}
                    />
                    <p className="tiny-text">*(Alt Description) - Image alt text is a description of the image. This is the text that will be read by screen-readers where applicable for accessibility and this text will also be displayed if there is a problem with the image.*</p>      
                </fieldset>  
                <fieldset className={ styles.submission_buttons }>
                    <Button
                        type="button"
                        label="Add Product"
                        onClick={ handleOnAdd }
                    />
                    <Button
                        type="button"
                        label="Update Product"
                        onClick={ handleOnUpdate }
                    />
                    <Button
                        type="button"
                        label="Delete Product"
                        onClick={ handleOnDelete }
                    />
                </fieldset>
            </form>
        </div>
    )
}