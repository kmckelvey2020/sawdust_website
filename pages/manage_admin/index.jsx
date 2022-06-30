import Head from "next/head";
import { useState, useEffect, Fragment } from "react";

import { defaultSignUpValues, FieldSetSignup, defaultManageAdminValues, FieldSetManageAdmin } from "@/src/defaults_and_form_inputs/login_form_inputs";
import getAPIOptions from "@/src/helperfunctions/getAPIOptions";
import useFetch from "@/src/hooks/useFetch";
import FormInput from "@/src/ui/form_input";
import Button from "@/src/ui/button";
import validateFields from "@/src/helperfunctions/validateFields";


/*-- ****************************************************** -->
<---                  MANAGE PAGE COMPONENT                  -->
<--- ****************************************************** -*/
// To do: Need a way to check on client side if the desired username is unique. 
// To do: Need an I am not a robot check. 
// To do: Need to redirect Product Management Form to login page if no valid token exists. 
// To do: after initial signup, remove/comment out signup section and other restricted sections
export default function ManageAdmin(){
    /*
    const { fetchedData, makeFetch } = useFetch();
    const [manageAdmin_values, setManageAdmin_values] = useState(defaultManageAdminValues);
    const [signup_values, setSignup_values] = useState(defaultSignUpValues);
    const [message, setMessage] = useState('');
    const updatedAdminValues = {
        manage_adminid: fetchedData && fetchedData.response[0] && fetchedData.response[0].admin_id ? fetchedData.response[0].admin_id : '',
        manage_fname: fetchedData && fetchedData.response[0] && fetchedData.response[0].admin_fname ? fetchedData.response[0].admin_fname : '',
        manage_lname: fetchedData && fetchedData.response[0] && fetchedData.response[0].admin_lname ? fetchedData.response[0].admin_lname : '',
        manage_username: fetchedData && fetchedData.response[0] && fetchedData.response[0].admin_username ? fetchedData.response[0].admin_username : '',
        current_password: '',
        manage_password: '',
        manage_passwordre: '' 
    };
*/
/*-- ****************************************************** -->
<---                    ONCLICK HANDLER                     -->
<--- ****************************************************** -*/
/*
    async function handleOnClick(event) {
        const selectedMethod = event.target.name;
        const { validationMessage, sanitizedFieldValues } = validateFields(selectedMethod==="signup_button" ? signup_values : manageAdmin_values);
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
*/
/*-- ****************************************************** -->
<---                  FETCHED DATA CHANGE                   -->
<--- ****************************************************** -*/
/*
    useEffect(() => {
        setManageAdmin_values((prevState) => ({ // Fill in form fields with requested data
            ...prevState, 
            ...updatedAdminValues
        }));
        setSignup_values((prevState) => ({ // Fill in form fields with requested data
            ...prevState, 
            ...defaultSignUpValues
        }));
        setMessage(fetchedData ? fetchedData.message[0] : '');
    }, [fetchedData]); // Need dependency array to prevent infinite loop
*/
/*-- ****************************************************** -->
<---               HANDLE FORM FIELD CHANGE                 -->
<--- ****************************************************** -*/
/*
    function handleOnChange (event) {
        const { name, value } = event.target;
        if(name.includes("manage") || name.includes("current")){
            setManageAdmin_values((prevState) => ({
                ...prevState, 
                [name]: value
            }));
        } else {
            setSignup_values((prevState) => ({
                ...prevState, 
                [name]: value
            }));
        }
    };
*/
/*-- ****************************************************** -->
<---                     SIGNUP FORM                        -->
<--- ****************************************************** -*/
/*
    const signup_content = FieldSetSignup.map((field_attributes) => {
        const { id, name, type, ...attributes } = field_attributes;
        if(type==="button") {    
            return(
                <Button
                    key={ id } 
                    id={ id }
                    onClick={ handleOnClick }
                    name={ name }
                    type={ type }
                    { ...attributes } />
        )} else if(name==="signup_passwordre") {
            const errorMessageUpdate = ("Passwords do not match.");
            return(
                <Fragment key={ id }>
                    <FormInput 
                        key={ id } 
                        id={ id }
                        onChange={ handleOnChange }
                        name={ name }
                        type={ type }
                        { ...attributes } 
                        value={ signup_values[name] } />
                    <div className="error_message">{signup_values[name]!==signup_values["signup_password"] ? errorMessageUpdate : ""}</div>
                </Fragment>
        )} else {
            return(
                <FormInput 
                    key={ id } 
                    id={ id }
                    onChange={ handleOnChange }
                    name={ name }
                    type={ type }
                    { ...attributes } 
                    value={ signup_values[name] } />
        )}
    });
*/
/*-- ****************************************************** -->
<---                    MANAGE USER FORM                    -->
<--- ****************************************************** -*/
/*
const manage_admin_content = FieldSetManageAdmin.map((field_attributes) => {
    const { id, name, type, ...attributes } = field_attributes;
    if(type==="button") {    
        return(
            <Button
                key={ id } 
                id={ id }
                onClick={ handleOnClick }
                name={ name }
                type={ type }
                { ...attributes } />
        )
    } else if(name==="manage_passwordre") {
        const errorMessageUpdate = ("New passwords do not match.");
        return(
            <Fragment key={ id }>
                <FormInput 
                    key={ id } 
                    id={ id }
                    onChange={ handleOnChange }
                    name={ name }
                    type={ type }
                    { ...attributes } 
                    value={ manageAdmin_values[name] } />
                <div className="error_message">{manageAdmin_values[name]!==manageAdmin_values["manage_password"] ? errorMessageUpdate : ""}</div>
            </Fragment>
    )} else {
        return(
            <FormInput 
                key={ id } 
                id={ id }
                onChange={ handleOnChange }
                name={ name }
                type={ type }
                { ...attributes } 
                value={ manageAdmin_values[name] } />
    )}
});
*/

const message = '';
const signup_content = 
    <section>
        <h6>Not Authorized</h6>
    </section>
const manage_admin_content =
    <section>
        <h6>Not Authorized</h6>
    </section>

/*-- ****************************************************** -->
<---                      ADMIN FORM                        -->
<--- ****************************************************** -*/
    
    return(
        <div className="container">
            <Head>
                <title>Manage Sawdust CastleRock</title>
                <meta name="description" content="Manage Sawdust CastleRock" />
            </Head>
            <main className="main_container">
                <h6 className="message">{ message }</h6>
                <form>
                    <fieldset className="field_set">
                        <h5>Signup</h5>
                        { signup_content }
                    </fieldset>
                    <fieldset className="field_set">
                        <h5>Manage</h5>
                        { manage_admin_content }
                    </fieldset>
                </form>
            </main>
        </div>
    )
}
