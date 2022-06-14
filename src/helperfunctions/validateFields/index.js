/*-- ****************************************************** -->
<---                     validateFields                     -->
<--- ****************************************************** -*/

export default function validateFields(fieldvalues={}) {
    let validationMessage = 'Validation Message: ';
    let matchPattern;
    const sanitizedFieldValues = {...fieldvalues};
    const shortTextPattern=/^[\'\w\s-]{3,30}$/, 
        mediumTextPattern=/^.{0,150}$/, // will need to double ' and " characters when sanitizing for database 
        longTextPattern=/^.{0,300}$/, // will need to double ' and " characters when sanitizing for database 
        intPattern=/^[0-9]+$/, // quantity
        floatPattern=/^[0-9]+(\.[0-9]{0,2})?$/, // product_price
        passwordPattern=/^((?=.*[\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&?])[^\'\"]{8,20})$/, 
        imagePattern=/^([^;\.]+(\.(jpe?g|png|bmp|svg|JPE?G|PNG|BMP|SVG)))$/,
        emailPattern=/^(([^\s\'\"]+)(@[\w]+)(\.[\w]+))$/;
    const shortTextArr=[
            "product_name",
            "admin_username",
            "signup_username",
            "signup_fname",
            "signup_lname"], 
        mediumTextArr=[
            "product_description",
            "alt_description0",
            "alt_description1",
            "alt_description2",
            "alt_description3"], 
        imageArr=[
            "image0",
            "image1",
            "image2",
            "image3"],
        passwordArr=[
            "admin_password",
            "signup_password",
            "signup_passwordre"],
        presetsArr=[
            "contact_reason",
            "product_id",
            "product_category",
            "for_sale"
        ];
        for(let key in fieldvalues) {
            if(shortTextArr.includes(key.toString())) {
                matchPattern = shortTextPattern;
                sanitizedFieldValues[key] = fieldvalues[key].slice(0,30).replace(/\'|\"/g,"\'\'");
            } else if (mediumTextArr.includes(key.toString())) {
                matchPattern = mediumTextPattern;
                sanitizedFieldValues[key] = fieldvalues[key].slice(0,150).replace(/\'|\"/g,"\'\'");
            } else if (imageArr.includes(key.toString())) {
                matchPattern = imagePattern;
            } else if (passwordArr.includes(key.toString())) {
                matchPattern = passwordPattern;
                sanitizedFieldValues[key] = fieldvalues[key].replace(/\'|\"/g,"");
            } else if (key.toString()==="quantity") {
                matchPattern = intPattern;
            } else if (key.toString()==="product_price") {
                matchPattern = floatPattern;
            } else if(key.toString()==="cust_message") {
                matchPattern = longTextPattern;
                sanitizedFieldValues[key] = fieldvalues[key].slice(0,300);
            } else if (key.toString()==="cust_email") {
                matchPattern = emailPattern;
            } else if (key.toString()==="cust_fname" || key.toString()==="cust_lname") {
                matchPattern = shortTextPattern;
                sanitizedFieldValues[key] = fieldvalues[key].slice(0,30);
            } else {
                //console.log(`${key}: ${fieldvalues[key]} is a preset value.`);
            }
            if(!presetsArr.includes(key.toString()) && !fieldvalues[key].toString().match(matchPattern) && fieldvalues[key]!=='') {
                validationMessage += `Error... ${key} is not valid. `
            }
            //console.log(`${key}: ${fieldvalues[key]}, ${matchPattern}`);
        }
    return {validationMessage, sanitizedFieldValues};
}