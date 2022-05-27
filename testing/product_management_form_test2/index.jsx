import Head from "next/head";
import { useState } from "react";

import styles from "./product_management_form.module.css";
import Card from "@/src/ui/card";
import FieldSet from "@/src/features/fieldset";
import { FieldSet1, FieldSet2_images, FieldSet3_submission } from "../../src/features/fieldset/product_management_form_inputs";
import Logo from "@/src/ui/logo";
import ProductListing from "@/src/features/product_listing";
import handleOnDelete from "@/src/handlers/on_delete";
import handleOnGetSingle from "@/src/handlers/on_getsingle";
import handleOnPost from "@/src/handlers/on_post";
import handleOnPut from "@/src/handlers/on_put";

/*-- ************************************************************* -->
<---                    PRODUCT_MANAGEMENT_FORM                    -->
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
    // Variable used to display product listing that has been looked up
    const [selected_product, setSelected_product] = useState(<Logo />);
    // Loading state: when fetch promise fulfills, loading state updates
    const [isLoading, setIsLoading] = useState(true);
    // Error_Success message
    const [message, setMessage] = useState('');

/*-- ************************************************************* -->
<---    ONCLICK HANDLER FOR PRODUCT LOOKUP, ADD, DELETE, UPDATE    -->
<--- ************************************************************* -*/
    async function handleOnClick(e) {
        let res;
        switch (e.target.name) {
            // Route to appropriate handler based on which button was clicked
            case 'add_product':
                setProduct((prevState) => ({ // Product id will be auto generated as Primary Key in database
                    ...prevState, 
                    product_id: ''
                }));
                res= await handleOnPost(product);
                if(res.reslength>0){
                    setProduct((prevState) => ({ // Fill in form fields with requested data
                        ...prevState, 
                        ...res.response[0]
                    }));
                    setSelected_product(<ProductListing product={ res.response[0] } />);
                    setMessage(`${res.message[0]}`);
                }
                else { // Error
                    setSelected_product(<Logo />);
                    setMessage(`${res.message[0]}`);
                }
                break;
            case 'delete_product':
                res=await handleOnDelete(product);
                if(res.reslength>0){
                    setProduct((prevState) => ({ // Fill in form fields with defaults
                        ...prevState, 
                        ...defaultProductValues,
                    }));
                    setSelected_product(<Logo />);
                    setMessage(`${res.message[0]}`);
                }
                else { // Error
                    setSelected_product(<Logo />);
                    setMessage(`${res.message[0]}`);
                }
                break;
            case 'update_product':
                res=await handleOnPut(product);
                if(res.reslength>0){
                    setProduct((prevState) => ({ // Fill in form fields with requested data
                        ...prevState, 
                        ...res.response[0]
                    }));
                    setSelected_product(<ProductListing product={ res.response[0] } />);
                    setMessage(`${res.message[0]}`);
                }
                else { // Error
                    setSelected_product(<Logo />);
                    setMessage(`${res.message[0]}`);
                }
                break;
            default: // case 'look_up_product'
                res=await handleOnGetSingle(product);
                if(res.reslength>0){
                    setProduct((prevState) => ({ // Fill in form fields with requested data
                        ...prevState, 
                        ...res.response[0]
                    }));
                    setSelected_product(<ProductListing product={ res.response[0] } />);
                    setMessage(`${res.message[0]}`);
                }
                else { // Error
                    setSelected_product(<Logo />);
                    setMessage(`${res.message[0]}`);
                }
                break;
        }
        console.log(`Server response:\n ${res.response}`);
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
        //To do: handle image uploads, updates, deletes, etc.
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