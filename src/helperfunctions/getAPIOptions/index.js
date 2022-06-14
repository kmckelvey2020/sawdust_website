/*-- ****************************************************** -->
<---                      getAPIOptions                     -->
<--- ****************************************************** -*/

export default function getAPIOptions(selectedMethod='look_up_product', fieldvalues={}, data) {
    let values, url, configurations;
    switch (selectedMethod) {
        // Set route and options based on which button was clicked
        case 'add_product':
            values = [fieldvalues.product_name, fieldvalues.product_description, fieldvalues.product_category, fieldvalues.product_price, fieldvalues.quantity, fieldvalues.for_sale];
            url='/api/addproduct';
            configurations={
                method: 'POST',
                body: data};
            break;
        case 'update_product':
            values = [fieldvalues.product_id, fieldvalues.product_name, fieldvalues.product_description, fieldvalues.product_category, fieldvalues.product_price, fieldvalues.quantity, fieldvalues.for_sale];
            url=`/api/updateproducts/[${fieldvalues.product_id}]`;
            configurations={
                method: 'PUT',
                body: data};
            break;
        case 'delete_product':
            values = [fieldvalues.product_id];
            url=`/api/deleteproduct/[${fieldvalues.product_id}]`;
            configurations={
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'}};
            break;
        case 'email_button':
            values = [fieldvalues.cust_fname, fieldvalues.cust_lname, fieldvalues.cust_email, fieldvalues.contact_reason, fieldvalues.cust_message];
            url=`/api/contact`;
            configurations={
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({...data})};
            break;
        case 'login_button':
            values = [fieldvalues.admin_username, fieldvalues.admin_passwords];
            url=`/api/login`;
            configurations={
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({...data})};
            break;
        case 'signup_button':
            values = [fieldvalues.signup_username, fieldvalues.signup_password, fieldvalues.signup_passwordre];
            url=`/api/manageadmin`;
            configurations={
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({...data})};
            break;
        case 'lookup_admin_button':
            values = [fieldvalues.manage_adminid];
            url=`/api/manageadmin/[${fieldvalues.manage_adminid}]`;
            configurations={
                method: 'GET',
                headers: {'Content-Type': 'application/json'}};
            break;
        case 'update_admin_button':
            values = [fieldvalues.manage_fname, fieldvalues.manage_lname, fieldvalues.manage_username, fieldvalues.current_password, fieldvalues.manage_password, fieldvalues.manage_passwordre];
            url=`/api/manageadmin`;
            configurations={
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({...data})};
            break;
        case 'delete_admin_button':
            values = [fieldvalues.manage_adminid, fieldvalues.manage_username];
            url=`/api/manageadmin/[${fieldvalues.manage_adminid}]`;
            configurations={
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({...data})};
            break;
        default: // case 'look_up_product'
            values = [fieldvalues.product_id];
            url=`/api/products/[${fieldvalues.product_id}]`;
            configurations={
                method: 'GET',
                headers: {'Content-Type': 'application/json'}};
            break;
    };
    return { values, url, configurations };
}