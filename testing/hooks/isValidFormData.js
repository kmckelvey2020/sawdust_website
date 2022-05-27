/*-- ************************************************************* -->
<---               VALIDATING FORM INPUT ENTRIES                   -->
<--- ************************************************************* -*/

export default function isValidFormData (name, value) {
    switch (name) {
        // Add cases and corresponding constraints as needed
        case 'product_price':
            return (value==='' || value.match(/^\d{1,}(\.\d{0,2})?$/));
            break;
        case 'quantity':
            return (value==='' || value.match(/^[\d]+$/));
            break;
        case 'product_id':
            return (value==='' || value.match(/^[\d]+$/));
            break;
        default:
            return true;
            break;
    }
}