/*-- ****************************************************** -->
<---                  LOGIN FIELD DEFAULTS                  -->
<--- ****************************************************** -*/

const defaultLoginValues = {
    admin_username: '',
    admin_password: '',
}

/*-- ****************************************************** -->
<---                  LOGIN FIELDSET ARRAYS                 -->
<--- ****************************************************** -*/

// Used to set up form inputs in login_form
const FieldSetLogin = [
    {  
        autoComplete: "username",
        errormessage:"Please enter a valid username (3-30 alphanumeric characters, spaces, dashes, and  underscores allowed).",
        id:"admin_username",
        label:"Username", 
        name:"admin_username",
        pattern: "[\'a-zA-Z0-9_\\s-]{3,30}",
        placeholder:"Enter your user name.",
        type:"text",
    },
    {  
        autoComplete: "current-password",
        errormessage:"Please enter a valid password.",
        id:"admin_password",
        label:"Password", 
        name:"admin_password",
        pattern: "((?=.*[\\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&?])[^\'\"]{8,20})",
        placeholder:"Enter your password.",
        type:"password",
    },
    {
        id:"login_button",
        label:"Log In",
        name:"login_button",
        type:"button",
        value:"login_button"                
    },
]

/*-- ****************************************************** -->
<---                 SIGNUP FIELD DEFAULTS                  -->
<--- ****************************************************** -*/

const defaultSignUpValues = {
    signup_fname: '',
    signup_lname: '',
    signup_username: '',
    signup_password: '',
    signup_passwordre: '',
}

/*-- ****************************************************** -->
<---                 SIGNUP FIELDSET ARRAYS                 -->
<--- ****************************************************** -*/

// Used to set up form inputs in signup_form
const FieldSetSignup = [
    {  
        autoComplete: "given-name",
        errormessage:"Please enter your first name (3-30 alphanumeric characters, spaces, dashes, and underscores allowed).",
        id:"signup_fname",
        label:"First Name", 
        name:"signup_fname",
        pattern: "[\'a-zA-Z0-9_\\s-]{3,30}",
        placeholder:"Enter your first name.",
        type:"text",
    },
    {  
        autoComplete: "family-name",
        errormessage:"Please enter your last name (3-30 alphanumeric characters, spaces, dashes, and underscores allowed).",
        id:"signup_lname",
        label:"Last Name", 
        name:"signup_lname",
        pattern: "[\'a-zA-Z0-9_\\s-]{3,30}",
        placeholder:"Enter your last name.",
        type:"text",
    },
    {  
        autoComplete: "username",
        errormessage:"Please enter a valid username (3-30 alphanumeric characters, spaces, dashes, and underscores allowed).",
        id:"signup_username",
        label:"Username", 
        name:"signup_username",
        pattern: "[\'a-zA-Z0-9_\\s-]{3,30}",
        placeholder:"Enter your user name.",
        type:"text",
    },
    {  
        autoComplete: "new-password",
        errormessage:"Please enter a valid password. Passwords are between 8-20 characters and must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#&?).",
        id:"signup_password",
        label:"Password", 
        name:"signup_password",
        pattern: "((?=.*[\\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&?])[^\'\"]{8,20})",
        placeholder:"Enter your password.",
        type:"password",
    },
    {  
        autoComplete: "new-password",
        errormessage:"",
        id:"signup_passwordre",
        label:"Reenter Password", 
        name:"signup_passwordre",
        pattern: "((?=.*[\\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&?])[^\'\"]{8,20})",
        placeholder:"Reenter your password.",
        type:"password",
    },
    {
        id:"signup_button",
        label:"Sign up",
        name:"signup_button",
        type:"button",
        value:"signup_button"                
    },
]

/*-- ****************************************************** -->
<---                 MANAGE FIELD DEFAULTS                  -->
<--- ****************************************************** -*/

const defaultManageAdminValues = {
    manage_adminid: '',
    manage_fname: '',
    manage_lname: '',
    manage_username: '',
    current_password: '',
    manage_password: '',
    manage_passwordre: '',
}

/*-- ****************************************************** -->
<---                 MANAGE FIELDSET ARRAYS                 -->
<--- ****************************************************** -*/

// Used to set up form inputs in Manage Admin Form
const FieldSetManageAdmin = [
    {  
        errormessage:"Please enter an id.",
        id:"manage_adminid",
        label:"Admin ID", 
        name:"manage_adminid",
        min:0,
        max:100000,
        step:"1",
        type:"number",
    },
    {    
        autoComplete: "given-name",
        errormessage:"Please enter your first name (3-30 alphanumeric characters, spaces, dashes, and underscores allowed).",
        id:"manage_fname",
        label:"First Name", 
        name:"manage_fname",
        pattern: "[\'a-zA-Z0-9_\\s-]{3,30}",
        placeholder:"Enter your first name.",
        type:"text",
    },
    {  
        autoComplete: "family-name",
        errormessage:"Please enter your last name (3-30 alphanumeric characters, spaces, dashes, and underscores allowed).",
        id:"manage_lname",
        label:"Last Name", 
        name:"manage_lname",
        pattern: "[\'a-zA-Z0-9_\\s-]{3,30}",
        placeholder:"Enter your last name.",
        type:"text",
    },
    {  
        autoComplete: "username",
        errormessage:"Please enter a valid username (3-30 alphanumeric characters, spaces, dashes, and underscores allowed).",
        id:"manage_username",
        label:"Username", 
        name:"manage_username",
        pattern: "[\'a-zA-Z0-9_\\s-]{3,30}",
        placeholder:"Enter your user name.",
        type:"text",
    },
    {  
        autoComplete: "current-password",
        errormessage:"Please enter a valid password. Passwords are between 8-20 characters and must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#&?).",
        id:"current_password",
        label:"Current Password", 
        name:"current_password",
        pattern: "((?=.*[\\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&?])[^\'\"]{8,20})",
        placeholder:"Enter your current password.",
        type:"password",
    },
    {  
        autoComplete: "new-password",
        errormessage:"Please enter a valid password. Passwords are between 8-20 characters and must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#&?).",
        id:"manage_password",
        label:"New Password", 
        name:"manage_password",
        pattern: "((?=.*[\\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&?])[^\'\"]{8,20})",
        placeholder:"Enter your new password.",
        type:"password",
    },
    {  
        autoComplete:"new-password",
        errormessage:"",
        id:"manage_passwordre",
        label:"Reenter New Password", 
        name:"manage_passwordre",
        pattern:"((?=.*[\\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&?])[^\'\"]{8,20})",
        placeholder:"Reenter your new password.",
        type:"password",
    },
    {
        id:"lookup_admin_button",
        label:"Look Up Login",
        name:"lookup_admin_button",
        type:"button",
        value:"lookup_admin_button"                
    },
    {
        id:"update_admin_button",
        label:"Update Login",
        name:"update_admin_button",
        type:"button",
        value:"update_admin_button"                
    },
    {
        id:"delete_admin_button",
        label:"Delete Login",
        name:"delete_admin_button",
        type:"button",
        value:"delete_admin_button"                
    },
]

const login_fieldset_and_defaults = {
    defaultLoginValues,
    FieldSetLogin, 
    defaultSignUpValues,
    FieldSetSignup,
    defaultManageAdminValues,
    FieldSetManageAdmin
}

module.exports = login_fieldset_and_defaults;