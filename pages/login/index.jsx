import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { defaultLoginValues, FieldSetLogin } from "@/src/defaults_and_form_inputs/login_form_inputs";
import getAPIOptions from "@/src/helperfunctions/getAPIOptions";
import useFetch from "@/src/hooks/useFetch";
import FieldSet from "@/src/features/fieldset";
import validateFields from "@/src/helperfunctions/validateFields";


/*-- ****************************************************** -->
<---                  LOGIN PAGE COMPONENT                  -->
<--- ****************************************************** -*/
// To do: Need an I am not a robot check. 
// To do: Need to redirect Product Management Form to login page if no valid token exists.
export default function Login(){
    const { fetchedData, makeFetch } = useFetch();
    const [login_values, setLogin_values] = useState(defaultLoginValues);
    const [message, setMessage] = useState('');
    const router = useRouter();

/*-- ****************************************************** -->
<---                    ONCLICK HANDLER                     -->
<--- ****************************************************** -*/

    async function handleOnClick(event) {
        const selectedMethod = event.target.name;
        const { validationMessage, sanitizedFieldValues } = validateFields(login_values);
        const { values, url, configurations } = getAPIOptions(selectedMethod, sanitizedFieldValues, sanitizedFieldValues);
        const requiredFieldsFilled = values.every((field) => {
            return `${field}`.trim() !== '';
        })

        if(requiredFieldsFilled && !validationMessage.includes("Error")){  
            // Make fetch request (useFetch hook) based on url and configurations
            await makeFetch(url, configurations);
        } else if(!requiredFieldsFilled){
            setMessage("Make sure to fill in all required fields.")
        } else {
            setMessage(validationMessage);
        }
    };

/*-- ****************************************************** -->
<---                  FETCHED DATA CHANGE                   -->
<--- ****************************************************** -*/

    useEffect(() => {
        setMessage(fetchedData ? fetchedData.message[0] : '');
        if(fetchedData && fetchedData.authToken) {
            router.push("/product_management_form");
        }
    }, [fetchedData]); // Need dependency array to prevent infinite loop

/*-- ****************************************************** -->
<---               HANDLE FORM FIELD CHANGE                 -->
<--- ****************************************************** -*/

    function handleOnChange (event) {
        const { name, value } = event.target;
        setLogin_values((prevState) => ({
            ...prevState, 
            [name]: value
        }));
    };

/*-- ****************************************************** -->
<---                     EVENT HANDLERS                     -->
<--- ****************************************************** -*/

    const onEventHandlers = { handleOnChange, handleOnClick };

/*-- ****************************************************** -->
<---                      LOGIN FORM                        -->
<--- ****************************************************** -*/
    
    return(
        <div className="container">
            <Head>
                <title>Login Sawdust CastleRock</title>
                <meta name="description" content="Login Sawdust CastleRock" />
            </Head>
            <main className="main_container">
                <h6 className="message">{ message }</h6>
                <form>
                    <FieldSet 
                        fieldset_heading="Login" 
                        onEventHandlers={ onEventHandlers }
                        fieldvalues={ login_values }
                        input_props={ FieldSetLogin } />
                </form>
            </main>
        </div>
    )
}
