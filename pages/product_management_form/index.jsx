import Head from "next/head";
import { useState, useEffect } from "react";

import styles from "./product_management_form.module.css";
import Card from "@/src/ui/card";
import FieldSet from "@/src/features/fieldset";
import { FieldSet1, FieldSet2_images, FieldSet3_submission, defaultProductValues } from "@/src/defaults_and_form_inputs/product_management_form_inputs";
import Logo from "@/src/ui/logo";
import ProductListing from "@/src/features/product_listing";
import useFetch from "@/src/hooks/useFetch";
import getAPIOptions from "@/src/helperfunctions/getAPIOptions";
import validateFields from "@/src/helperfunctions/validateFields";
import { authenticatedPage } from "pages/api/authentication_verification";

/*-- ****************************************************** -->
<---                 PRODUCT_MANAGEMENT_FORM                -->
<--- ****************************************************** -*/
// To do: fix error "Warning: A component is changing a controlled input to be uncontrolled." on radio button
// To do: When updating or deleting a product, delete old images from file before pathnames are updated or deleted
export default function ProductManagementForm(props){
    //const cookie = props.req?.headers.cookie;
    //console.log(cookie?"Authorized":"Not Authorized");
    //authenticatedPage(); // req not defined, need to figure out how to check header cookies on pages
    const { fetchedData, makeFetch } = useFetch();
    const updatedProductValues = {
        product_id: fetchedData && fetchedData.reslength>0 && fetchedData.response[0].product_id ? fetchedData.response[0].product_id : '',
        product_name: fetchedData && fetchedData.reslength>0 && fetchedData.response[0].product_name ? fetchedData.response[0].product_name : '',
        product_description: fetchedData && fetchedData.reslength>0 && fetchedData.response[0].product_description ? fetchedData.response[0].product_description : '',
        product_category: fetchedData && fetchedData.reslength>0 && fetchedData.response[0].product_category ? fetchedData.response[0].product_category : 'furniture',
        product_price: fetchedData && fetchedData.reslength>0 && fetchedData.response[0].product_price ? fetchedData.response[0].product_price : 599.99,
        quantity: fetchedData && fetchedData.reslength>0 && fetchedData.response[0].quantity ? fetchedData.response[0].quantity : 1,
        for_sale: fetchedData && fetchedData.reslength>0 && fetchedData.response[0].for_sale ? fetchedData.response[0].for_sale : false, 
        image0: '', //To do: figure out how to display current image path if it exists
        alt_description0: fetchedData && fetchedData.reslength>0 && fetchedData.response[0].alt_description0 ? fetchedData.response[0].alt_description0 : '',
        image1: '', 
        alt_description1: fetchedData && fetchedData.reslength>0 && fetchedData.response[0].alt_description1 ? fetchedData.response[0].alt_description1 : '',
        image2: '', 
        alt_description2: fetchedData && fetchedData.reslength>0 && fetchedData.response[0].alt_description2 ? fetchedData.response[0].alt_description2 : '',
        image3: '', 
        alt_description3: fetchedData && fetchedData.reslength>0 && fetchedData.response[0].alt_description3 ? fetchedData.response[0].alt_description3 : '',
    };
    const [product, setProduct] = useState(defaultProductValues);
    const [selected_product, setSelected_product] = useState(<Logo />);
    const [message, setMessage] = useState('');
    const [files, setFiles] = useState({image0: null, image1: null, image2: null, image3: null});

/*-- ****************************************************** -->
<---            ONSUBMIT HANDLER FOR ADD, UPDATE            -->
<--- ****************************************************** -*/

    async function handleOnSubmit(event) {
        event.preventDefault();
        const selectedMethod = event.target.name;

        // Product id will be auto generated as Primary Key in database
        if(selectedMethod==='add_product') {
            setProduct((prevState) => ({ 
                ...prevState, 
                product_id: ''
            }));
        }

        const { validationMessage, sanitizedFieldValues } = validateFields(product);

        // Append data from product object and files object to FormData object data
        const data = new FormData();
        for(const [key, val] of Object.entries(sanitizedFieldValues)) {
            data.append(`${key}`, val);
        }
        for(const [key, val] of Object.entries(files)) {
            if(val) {
                data.append(`${key}`, val, val.name);
            }
        }

        const { values, url, configurations } = getAPIOptions(selectedMethod, sanitizedFieldValues, data);
        const requiredFieldsFilled = values.every((field) => {
            return `${field}`.trim() !== '';
        });

        if(requiredFieldsFilled && !validationMessage.includes("Error")){  
            // Make fetch request (useFetch hook) based on url and configurations
            await makeFetch(url, configurations);
        } else if(!requiredFieldsFilled) {
            setMessage("Fill out all required form fields. When ADDING a new product: Do NOT enter a product id. A unique product id will automatically be generated. When UPDATING existing products: DO enter the product id you wish to update, along with the required product fields.");
        } else {
            setMessage(validationMessage);
        }
    };

/*-- ****************************************************** -->
<---        ONCLICK HANDLER FOR PRODUCT LOOKUP, DELETE      -->
<--- ****************************************************** -*/

    async function handleOnClick(event) {
        const selectedMethod = event.target.name;
        const { validationMessage, sanitizedFieldValues } = validateFields(product);
        const { values, url, configurations } = getAPIOptions(selectedMethod, sanitizedFieldValues);
        const requiredFieldsFilled = values.every((field) => {
            return `${field}`.trim() !== '';
        });
        if(requiredFieldsFilled && !validationMessage.includes("Error")){  
            // Make fetch request (useFetch hook) based on url and configurations
            await makeFetch(url, configurations);
        } else if(!requiredFieldsFilled) {
            setMessage("You must enter a product id to look up, update, or delete a product.");
        } else {
            setMessage(validationMessage);
        }
    };

/*-- ****************************************************** -->
<---                  FETCHED DATA CHANGE                   -->
<--- ****************************************************** -*/

    useEffect(() => {
        if(fetchedData && fetchedData.reslength>0) {
            setProduct((prevState) => ({ // Fill in form fields with requested data
                ...prevState, 
                ...updatedProductValues
            }));
            setSelected_product(<ProductListing product={ fetchedData ? fetchedData.response[0] : defaultProductValues } />);
        }
        else {
            setProduct((prevState) => ({ // Fill in form fields with defaults
                ...prevState, 
                ...defaultProductValues
            }));
            setSelected_product(<Logo />); // Placeholder
        }
        setMessage(fetchedData ? fetchedData.message[0] : '');
    }, [fetchedData]); // Need dependency array to prevent infinite loop

/*-- ****************************************************** -->
<---               HANDLE FORM FIELD CHANGE                 -->
<--- ****************************************************** -*/

    function handleOnChange (event) {
        const { name, value } = event.target;
        setProduct((prevState) => ({
            ...prevState, 
            [name]: value
        }));
        if(event.target.files) {
            setFiles((prevState) => ({
                ...prevState,
                [name]: event.target.files[0]
            }));
        }
    };

/*-- ****************************************************** -->
<---                     EVENT HANDLERS                     -->
<--- ****************************************************** -*/

    const onEventHandlers = { handleOnChange, handleOnClick, handleOnSubmit };

/*-- ****************************************************** -->
<---                PRODUCT_MANAGEMENT_FORM                 -->
<--- ****************************************************** -*/

    return(
        <div className="container">
            <Head>
                <title>Sawdust Product Management Form</title>
                <meta name="description" content="Product Management Form" />
            </Head>
            <main className="main_container">
                <h6 className="message">{ message }</h6>
                <div className={ styles.selected_product }>
                    <Card>{ selected_product }</Card>
                </div>
                <form id="product_form" onSubmit={ handleOnSubmit }>
                    <FieldSet 
                        fieldset_heading="Product Management" 
                        onEventHandlers={ onEventHandlers }
                        fieldvalues={ product }
                        input_props={ FieldSet1 } />
                    <div className="centered_div">
                        <FieldSet
                            fieldset_heading="Image Upload" 
                            onEventHandlers={ onEventHandlers }
                            fieldvalues={ product }
                            input_props={ FieldSet2_images } /> 
                        <FieldSet
                            fieldset_heading="" // Buttons
                            onEventHandlers={ onEventHandlers }
                            fieldvalues={ product }
                            input_props={ FieldSet3_submission } />
                    </div>
                </form>
            </main>
        </div>
    )
}
