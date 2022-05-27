/*-- ************************************************************* -->
<---               PRODUCT LISTING FIELDSET ARRAYS                 -->
<--- ************************************************************* -*/

// Used to set up form inputs in product_management_form
const FieldSet1 = [
    {  
        errorMessage:"Please enter a product id if you would like to look up an existing product.",
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
        errorMessage:"Please enter a product name.",
        id:"product_name",
        label:"Product Name",
        name:"product_name",
        placeholder:"Enter name of product",
        type:"text",
    },
    {
        errorMessage:"Please enter a product description.",
        id:"product_description",
        label:"Product Description",
        name:"product_description",
        placeholder:"Enter description of product",
        rows:3,
        type:"textarea",
    },
    {
        errorMessage:"Please choose a product category.",
        id:"product_category",
        label:"Product Category",
        name:"product_category",
        options:["Furniture", "Art", "Woodburning", "Misc"],
        type:"select"
    },
    {
        errorMessage:"Please enter a product price between 0 and 9999.99. Numerical entry only.",
        id:"product_price",
        label:"Product Price",
        min:0,
        max:9999.99,
        name:"product_price",
        step:".01",
        type:"number",
    },
    {
        errorMessage:"Please enter a product quantity between 0 and 1000. Numerical entry only.",
        id:"quantity",
        label:"Quantity",
        min:0,
        max:1000,
        name:"quantity",
        step:"1",
        type:"number",
    },
    {
        errorMessage:"Please choose whether the product is for sale or not.",
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
        id:`image`,
        label:"Select an image to upload",
        name:"images",
        type:"file",
    },
    {
        id:`alt_description`,
        label:"Alt Description",
        name:`alt_description`,
        placeholder:`Enter Alt Description for Image`,
        type:"text",
    }
]
const FieldSet3_submission = [
    {
        id:"add_product",
        label:"Add Product",
        name:"add_product",
        type:"button",
        value:"add_product"                
    },
    {
        id:"update_product",
        label:"Update Product",
        name:"update_product",
        type:"button",
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

const fieldsets = {
    FieldSet1,
    FieldSet2_images,
    FieldSet3_submission
}

module.exports = fieldsets;