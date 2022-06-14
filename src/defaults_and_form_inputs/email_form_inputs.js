/*-- ****************************************************** -->
<---                  EMAIL FIELD DEFAULTS                  -->
<--- ****************************************************** -*/

const defaultEmailValues = {
    cust_fname: '',
    cust_lname: '',
    cust_email: '',
    contact_reason: 'A product listed for sale',
    cust_message: ''
}

/*-- ****************************************************** -->
<---                  EMAIL FIELDSET ARRAYS                 -->
<--- ****************************************************** -*/

// Used to set up form inputs in email_form
const FieldSetEmail = [
    {  
        errormessage:"Please enter a first name.",
        id:"cust_fname",
        label:"First Name", 
        name:"cust_fname",
        pattern: "[\'a-zA-Z_\\s-]{3,30}",
        placeholder:"Enter your first name",
        type:"text",
    },
    {  
        errormessage:"Please enter a last name.",
        id:"cust_lname",
        label:"Last Name", 
        name:"cust_lname",
        pattern: "[\'a-zA-Z_\\s-]{3,30}",
        placeholder:"Enter your last name",
        type:"text",
    },
    {  
        errormessage:"Please enter a valid email address.",
        id:"cust_email",
        label:"Email Address", 
        name:"cust_email",
        pattern: `(^([^\\s\'\"]+)(@[\\w]+)(\\.[\\w]+)$)`,
        placeholder:"Enter your email address",
        type:"email",
    },
    {
        errormessage:"Select the best description for your contact.",
        id:"contact_reason",
        label:"I would like to know more about...",
        name:"contact_reason",
        options:["A product listed for sale", "Commissioning a custom piece", "Questions about my process", "Feedback for an item I purchased"],
        type:"select"
    },
    {
        char_limit:300,
        errormessage:"Max 300 characters -",
        id:"cust_message",
        label:"Email message",
        name:"cust_message",
        pattern:".{0,300}",
        placeholder:"Enter your message. For example, a question about an existing product (include Product ID) or a description of a custom piece you would like to discuss.",
        rows:10,
        type:"textarea",
    },
    {
        id:"email_button",
        label:"Send Email",
        name:"email_button",
        type:"button",
        value:"email_button"                
    },
]

const email_fieldset_and_defaults = {
    defaultEmailValues,
    FieldSetEmail
}

module.exports = email_fieldset_and_defaults;