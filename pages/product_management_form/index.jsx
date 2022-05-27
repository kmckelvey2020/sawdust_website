import Head from "next/head";
import { useState } from "react";

import styles from "./product_management_form.module.css";
import Card from "@/src/ui/card";
import FieldSet from "@/src/features/fieldset";
import { FieldSet1, FieldSet2_images, FieldSet3_submission } from "@/src/features/fieldset/product_management_form_inputs";
import Logo from "@/src/ui/logo";
import ProductListing from "@/src/features/product_listing";

/*-- ************************************************************* -->
<---             PRODUCT_MANAGEMENT_FORM PAGE COMPONENT            -->
<--- ************************************************************* -*/
export default function ProductManagementForm(props){

    // Default product values for intializing and resetting product
    const defaultProductValues = {
        product_id: props.product ? props.product.product_id : '',
        product_name: props.product ? props.product.product_name : '',
        product_description: props.product ? props.product.product_description : '',
        product_category: props.product ? props.product.product_category : 'furniture',
        product_price: props.product ? props.product.product_price : 599.99,
        quantity: props.product ? props.product.quantity : 1,
        for_sale: props.product ? props.product.for_sale : false,
        images: props.product ? props.product.images : [],
        alt_description: props.product ? props.product.alt_description : []
    };
    // Product object state, setState
    const [product, setProduct] = useState(defaultProductValues);
    // Product variables
    const { product_id, product_name, product_description, product_category, product_price, quantity, for_sale, images, alt_description 
    } = product;
    // Variable to store product listing that has been looked up
    const [selected_product, setSelected_product] = useState(<Logo />);
    // Error_Success message
    const [message, setMessage] = useState('');
    
/*-- ************************************************************* -->
<---    ONCLICK HANDLER FOR PRODUCT LOOKUP, ADD, DELETE, UPDATE    -->
<--- ************************************************************* -*/
    async function handleOnClick(e) {

        let fetchStr, fetchMethod, res;
        switch (e.target.name) {
            // Set up fetch url and request method
            case 'add_product':
                fetchStr='/api/products';
                fetchMethod='POST';
                setProduct((prevState) => ({ // Product id will be auto generated as Primary Key in database
                    ...prevState, 
                    product_id: ''
                }));
                break;
            case 'delete_product':
                fetchMethod='DELETE';
                break;
            case 'update_product':
                fetchStr=`/api/products/[${product_id}]`;
                fetchMethod='PUT';
                break;
            default: // case 'look_up_product'
                fetchMethod='GET';
                break;
        }
        // GET and DELETE request
        if(fetchMethod==='GET' || fetchMethod==='DELETE'){
            res = await fetch(`/api/products/[${product_id}]`, {
                method: fetchMethod,
                headers: {'Content-Type': 'application/json'}
            })
            .then((response) => response.json())
            .catch((err) => console.log(err));
        }
        // POST and PUT request
        else if(fetchMethod==='POST' || fetchMethod==='PUT'){
            const values = [product.product_name, product.product_description, product.product_category, product.product_price, product.quantity, product.for_sale];
            const requiredFieldsFilled = values.every((field) => {
                return `${field}`.trim() !== '';
            })
            if(requiredFieldsFilled){
                res = await fetch(fetchStr, {
                    method: fetchMethod,
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({...product})
                })
                .then((response) => response.json())
                .catch((err) => console.log(err));
            }
            else{
                res = {
                   "response": [],
                   "reslength": 0,
                   "message": ["Error: Fill out all required form fields. When ADDING a new product: Do NOT enter a product id. A unique product id will automatically be generated. When UPDATING existing products: DO enter the product id you wish to update, along with the required product fields."] 
                };
            }
        }
        console.log(`Server response:\n ${JSON.stringify(res)}`);
        setMessage(`${res.message[0]}`);
        //To do: consolidate res.reslength>0 with fetchMethod !== "DELETE"
        if(res.reslength>0) { // Success
            if(fetchMethod==="DELETE") {
                setProduct((prevState) => ({ // Fill in form fields with defaults
                    ...prevState, 
                    ...defaultProductValues,
                }));
                setSelected_product(<Logo />);
            }
            else {
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
        }
        else { // Error
            setSelected_product(<Logo />);
        }
    }

/*-- ************************************************************* -->
<---                  HANDLE FORM FIELD CHANGE                     -->
<--- ************************************************************* -*/
    function handleOnChange (event) {
        const { name, value } = event.target;
        setProduct((prevState) => ({
            ...prevState, 
            [name]: value
        }));
    }

/*-- ************************************************************* -->
<---                        EVENT HANDLERS                         -->
<--- ************************************************************* -*/
    const onEventHandlers = { handleOnChange, handleOnClick };

/*-- ************************************************************* -->
<---                   PRODUCT_MANAGEMENT_FORM                     -->
<--- ************************************************************* -*/
    return(
        //To do: Create option to loop FieldSet2_images if more images are required
        //To do: handle known issue on for_sale radio button, controlled input changed to uncontrolled input on handleOnChange
        <div className={styles.form_container}>
            <Head>
                <title>Sawdust Product Management Form</title>
                <meta name="description" content="Product Management Form" />
            </Head>
            <p className={ styles.message }>{ message }</p><br/>
            <div className={ styles.selected_product }>
                <Card>{ selected_product }</Card>
            </div>
            <form>
                <FieldSet 
                    fieldset_heading="Product Management" 
                    onEventHandlers={ onEventHandlers }
                    product={ product }
                    input_props={ FieldSet1 } />
                <FieldSet
                    fieldset_heading="Image Upload" 
                    onEventHandlers={ onEventHandlers }
                    product={ product }
                    input_props={ FieldSet2_images } />
                <FieldSet 
                    fieldset_heading="" 
                    onEventHandlers={ onEventHandlers }
                    product={ product }
                    input_props={ FieldSet3_submission } />
            </form>
        </div>
    )
}