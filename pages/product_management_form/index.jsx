import Head from "next/head";
import { useState } from "react";

import styles from "./product_management_form.module.css";
import Button from "@/src/ui/button";
import FileInput from "@/src/ui/fileinput";
import NumberInput from "@/src/ui/numberinput";
import Radio from "@/src/ui/radio";
import Select from "@/src/ui/select";
import TextField from "@/src/ui/textfield";
import TextArea from "@/src/ui/textarea";

export default function ProductManagementForm(){

    const [product_name, setProduct_name] = useState('');
    const [product_description, setProduct_description] = useState('');
    const [product_category, setProduct_category] = useState('furniture');
    const [product_price, setProduct_price] = useState(599.99);
    const [quantity, setQuantity] = useState(1);
    const [for_sale, setFor_sale] = useState(false);
    const [imageurl, setImageurl] = useState('');
    const [alt_description, setAlt_description] = useState('Image for product');
    const [message, setMessage] = useState('');
    
    async function submitForm() {
        const res = await fetch('/api/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                product_name, 
                product_description, 
                product_category,
                product_price, 
                quantity,
                for_sale,
                imageurl,
                alt_description
            })
        }).then((response) => response.json());

        if(res) {
            setMessage(`
            Here is the res:\n
            ${res.product_name}\n
            ${res.product_description}\n
            ${res.product_category}\n
            ${res.product_price}\n
            ${res.quantity}\n
            ${res.for_sale}\n
            ${res.imageurl}\n
            ${res.alt_description}`);
        }
        else{
            setMessage("Something went wrong.")
        }
    }

    return(
        <div className={styles.form_container}>
            <Head>
                <title>Sawdust Product Management Form</title>
                <meta name="description" content="Product Management form" />
            </Head>
            <p>{ message }</p>
            <form target="_blank">
                <fieldset  className={ styles.field_set }>
                    <h5>Product Management</h5>
                    <TextField 
                        type="text" 
                        label="Product Name"
                        value={ product_name }
                        onChange={e => setProduct_name(e.target.value)}
                    />
                    <TextArea
                        label="Product Description"
                        rows="4"
                        value={ product_description }
                        onChange={e => setProduct_description(e.target.value)}
                    />
                    <Select
                        label="Product Category"
                        options={["Furniture", "Art", "Woodburning", "Misc"]}
                        onChange={e => setProduct_category(e.target.value)}
                    />
                    <NumberInput 
                        type="number"
                        label="Product Price ($)" 
                        value={ product_price }
                        min={ 0 }
                        max={ 9999.99 }
                        onChange={(e) => {
                            (e.target.value>=0 && e.target.value<10000) ?
                            setProduct_price(e.target.value) : setProduct_price(9999.99)
                        }}
                    />
                    <NumberInput 
                        type="number"
                        label="Quantity" 
                        value={ quantity }
                        min={ 0 }
                        max={ 1000 }
                        onChange={(e) => {
                            (e.target.value>=0 && e.target.value<1001) ?
                            setQuantity(e.target.value) : setQuantity(1)
                        }}
                    />
                    <p>Is this item for sale?</p>
                    <Radio
                        type="radio" 
                        labels={["Yes", "No"]}
                        values={[true, false]}
                        groupname="For Sale"
                        onChange={e => setFor_sale(e.target.value)}
                    />
                </fieldset>
                <fieldset className={ styles.field_set }>
                    <FileInput 
                        type='file' 
                        label="Select an image to upload" 
                        value={ imageurl }
                        onChange={e => setImageurl(e.target.value)}
                    />
                    <TextField 
                        type="text" 
                        label="Alt Description"
                        value={ alt_description }
                        onChange={e => setAlt_description(e.target.value)}
                    />
                    <p className="tiny-text">*(Alt Description) - Image alt text is a description of the image. This is the text that will be read by screen-readers where applicable for accessibility and this text will also be displayed if there is a problem with the image.*</p>      
                    <Button
                        type="button"
                        label="Submit"
                        onClick={ submitForm }
                    />
                </fieldset>  
            </form>
        </div>
    )
}