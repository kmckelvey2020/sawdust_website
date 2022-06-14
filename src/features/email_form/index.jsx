import { useState, useEffect } from "react";

import styles from "./email_form.module.css";
import { defaultEmailValues, FieldSetEmail } from "../../defaults_and_form_inputs/email_form_inputs";
import FieldSet from "../fieldset";
import useFetch from "@/src/hooks/useFetch";
import getAPIOptions from "@/src/helperfunctions/getAPIOptions";
import validateFields from "@/src/helperfunctions/validateFields";

export default function EmailForm() {
    const [emailfields, setEmailFields] = useState(defaultEmailValues);
    const { fetchedData, makeFetch } = useFetch();
    const [message, setMessage] = useState('');

/*-- ****************************************************** -->
<---                HANDLE EMAIL SUBMISSION                 -->
<--- ****************************************************** -*/
    
    async function handleOnClick(event) {
        const selectedMethod = event.target.name;
        const { validationMessage, sanitizedFieldValues } = validateFields(emailfields);
        const { values, url, configurations } = getAPIOptions(selectedMethod, sanitizedFieldValues, sanitizedFieldValues);
        const requiredFieldsFilled = values.every((field) => {
            return `${field}`.trim() !== '';
        })
        
        if(requiredFieldsFilled && !validationMessage.includes("Error")){  
            // Make fetch request (useFetch hook) based on url and configurations
            await makeFetch(url, configurations);
        } else if(!requiredFieldsFilled){
            setMessage("Please complete the email form fields to send a message. We are excited to hear from you!")
        } else {
            setMessage(validationMessage);
        }
    };

/*-- ****************************************************** -->
<---                  FETCHED DATA CHANGE                   -->
<--- ****************************************************** -*/
    
    useEffect(() => {
        setMessage(fetchedData ? fetchedData.message[0] : '');
    }, [fetchedData]); // Need dependency array to prevent infinite loop

/*-- ****************************************************** -->
<---               HANDLE FORM FIELD CHANGE                 -->
<--- ****************************************************** -*/
    
    function handleOnChange (event) {
        const { name, value } = event.target;
        setEmailFields((prevState) => ({
            ...prevState, 
            [name]: value
        }));
    }

/*-- ****************************************************** -->
<---                     EVENT HANDLERS                     -->
<--- ****************************************************** -*/

    const onEventHandlers = { handleOnChange, handleOnClick };

/*-- ****************************************************** -->
<---                      EMAIL FORM                        -->
<--- ****************************************************** -*/

    return (
        <div className={ styles.email_form }>
            <h6 className={ styles.message }>{ message }</h6>
            <form>
                <FieldSet
                    fieldset_heading="Send a message:" 
                    onEventHandlers={ onEventHandlers }
                    fieldvalues={ emailfields }
                    input_props={ FieldSetEmail }
                />
             </form>
        </div>
    )
}