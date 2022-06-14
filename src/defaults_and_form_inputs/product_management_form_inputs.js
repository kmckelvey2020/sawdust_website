/*-- ****************************************************** -->
<---                DEFAULT PRODUCT VALUES                  -->
<--- ****************************************************** -*/

const defaultProductValues = {
    product_id: '',
    product_name: '',
    product_description: '',
    product_category: 'furniture',
    product_price: 599.99,
    quantity: 1,
    for_sale: false, 
    image0: '',
    alt_description0: '',
    image1: '',
    alt_description1: '',
    image2: '',
    alt_description2: '',
    image3: '',
    alt_description3: ''
};

/*-- ****************************************************** -->
<---            PRODUCT LISTING FIELDSET ARRAYS             -->
<--- ****************************************************** -*/

// Used to set up form inputs in product_management_form
const FieldSet1 = [
    {  
        errormessage:"Please enter a product id if you would like to look up an existing product.",
        id:"product_id",
        label:"Product Id", 
        min:0,
        max:100000,
        name:"product_id",
        step:"1",
        type:"number",
    },
    {
        id:"look_up_product",
        label:"Look Up Product",
        name:"look_up_product",
        type:"button",
        value:"look_up_product"                
    },
    {
        errormessage:"Please enter a valid product name (3-30 alphanumeric characters, spaces, dashes, and underscores allowed).",
        id:"product_name",
        label:"Product Name",
        name:"product_name",
        pattern: "[a-zA-Z0-9_\\s-]{3,30}",
        placeholder:"Enter name of product",
        type:"text",
    },
    {
        errormessage:"Please enter a product description (up to 150 characters).",
        id:"product_description",
        label:"Product Description",
        name:"product_description",
        pattern: ".{0,150}",
        placeholder:"Enter description of product",
        rows:3,
        type:"textarea",
    },
    {
        errormessage:"Please choose a product category.",
        id:"product_category",
        label:"Product Category",
        name:"product_category",
        options:["Furniture", "Art", "Woodburning", "Misc"],
        type:"select"
    },
    {
        errormessage:"Please enter a product price between 0 and 9999.99. Numerical entry only.",
        id:"product_price",
        label:"Product Price",
        min:0,
        max:9999.99,
        name:"product_price",
        step:".01",
        type:"number",
    },
    {
        errormessage:"Please enter a product quantity between 0 and 1000. Numerical entry only.",
        id:"quantity",
        label:"Quantity",
        min:0,
        max:1000,
        name:"quantity",
        step:"1",
        type:"number",
    },
    {
        errormessage:"Please choose whether the product is for sale or not.",
        id:"for_sale",
        label:"Is this item for sale? (Will default to 'No' if nothing is selected.)",
        labels:["Yes", "No"],
        name:"for_sale",
        type:"radio",
        values:[true, false],
    }
]

const FieldSet2_images = [
    {
        errormessage:"Images should be .jpg, .jpeg, .png, or .svg",
        id:`image0`,
        label:"Select an image to upload",
        name:"image0",
        pattern: "([^;\\.]+(\\.(jpe?g|png|bmp|svg|JPE?G|PNG|BMP|SVG))$)",
        type:"file",
    },
    {
        errormessage:"Alt descriptions should be between 0-150 characters.",
        id:`alt_description0`,
        label:"Alt Description",
        name:`alt_description0`,
        pattern: '.{0,150}',
        placeholder:`Enter Alt Description for Image`,
        type:"text",
    },
    {
        errormessage:"Images should be .jpg, .jpeg, .png, or .svg",
        id:`image1`,
        label:"Select an image to upload",
        name:"image1",
        pattern: "([^;\\.]+(\\.(jpe?g|png|bmp|svg|JPE?G|PNG|BMP|SVG))$)",
        type:"file",
    },
    {
        errormessage:"Alt descriptions should be between 0-150 characters.",
        id:`alt_description1`,
        label:"Alt Description",
        name:`alt_description1`,
        pattern: '.{0,150}',
        placeholder:`Enter Alt Description for Image`,
        type:"text",
    },
    {
        errormessage:"Images should be .jpg, .jpeg, .png, or .svg",
        id:`image2`,
        label:"Select an image to upload",
        name:"image2",
        pattern: "([^;\\.]+(\\.(jpe?g|png|bmp|svg|JPE?G|PNG|BMP|SVG))$)",
        type:"file",
    },
    {
        errormessage:"Alt descriptions should be between 0-150 characters.",
        id:`alt_description2`,
        label:"Alt Description",
        name:`alt_description2`,
        pattern: '.{0,150}',
        placeholder:`Enter Alt Description for Image`,
        type:"text",
    },
    {
        errormessage:"Images should be .jpg, .jpeg, .png, or .svg",
        id:`image3`,
        label:"Select an image to upload",
        name:"image3",
        pattern: "([^;\\.]+(\\.(jpe?g|png|bmp|svg|JPE?G|PNG|BMP|SVG))$)",
        type:"file",
    },
    {
        errormessage:"Alt descriptions should be between 0-150 characters.",
        id:`alt_description3`,
        label:"Alt Description",
        name:`alt_description3`,
        pattern: '.{0,150}',
        placeholder:`Enter Alt Description for Image`,
        type:"text",
    }
]

const FieldSet3_submission = [
    {
        id:"add_product",
        label:"Add Product",
        name:"add_product",
        type:"submit",
        value:"add_product"                
    },
    {
        id:"update_product",
        label:"Update Product",
        name:"update_product",
        type:"submit",
        value:"update_product"                
    },
    {
        id:"delete_product",
        label:"Delete Product",
        name:"delete_product",
        type:"button",
        value:"delete_product"                
    }
]

const fieldsets_and_defaults = {
    FieldSet1,
    FieldSet2_images,
    FieldSet3_submission,
    defaultProductValues,
}

module.exports = fieldsets_and_defaults;