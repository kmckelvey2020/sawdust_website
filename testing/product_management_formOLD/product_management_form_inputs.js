const FieldSet1 = [
    {  
        errorMessage:"Please enter a product id.",
        id:"product_id",
        label:"Product Id", 
        min:0,
        max:100000,
        name:"product_id",
        onChange:handleOnChange,
        step:"1",
        type:"number",
        value:product_id
    },
    {
        id:"look_up_product",
        label:"Look Up Product",
        name:"look_up_product",
        onChange:handleOnLookUp,
        type:"button",
        value:"look_up_product"                
    },
    {
        errorMessage:"Please enter a product name.",
        id:"product_name",
        label:"Product Name",
        name:"product_name",
        onChange:handleOnChange,
        placeholder:"Enter name of product",
        type:"text",
        value:product_name
    },
    {
        errorMessage:"Please enter a product description.",
        id:"product_description",
        label:"Product Description",
        name:"product_description",
        onChange:handleOnChange,
        placeholder:"Enter description of product",
        type:"textarea",
        value:product_description
    },
    {
        errorMessage:"Please enter a product category.",
        defaultValue:product_category,
        id:"product_category",
        label:"Product Category",
        name:"product_category",
        onChange:handleOnChange,
        options:["Furniture", "Art", "Woodburning", "Misc"],
        type:"select"
    },
    {
        errorMessage:"Please enter a product price.",
        id:"product_price",
        label:"Product Price",
        min:0,
        max:9999.99,
        name:"product_price",
        onChange:handleOnChange,
        step:".01",
        type:"number",
        value:product_price
    },
    {
        errorMessage:"Please enter a product quantity.",
        id:"quantity",
        label:"Quantity",
        min:0,
        max:1000,
        name:"quantity",
        onChange:handleOnChange,
        step:"1",
        type:"number",
        value:quantity
    },
    {
        errorMessage:"Please enter whether the product is for sale or not.",
        id:"for_sale",
        label:"Is this item for sale?",
        labels:["Yes", "No"],
        name:"for_sale",
        onChange:handleOnChange,
        type:"radio",
        value:for_sale,
        values:[true, false],
    }
]

const FieldSet2_images = [
    {
        id:`image${imageid}`,
        label:"Select an image to upload",
        name:"images",
        onChange:handleOnChange,
        type:"file",
        value:images[imageid]
    },
    {
        id:`alt_description${imageid}`,
        label:"Alt Description",
        name:`alt_description`,
        onChange:handleOnChange,
        placeholder:`Enter Alt Description for Image ${imageid}`,
        type:"text",
        value:alt_description[imageid]
    }
]
const FieldSet3_submission = [
    {
        id:"add_product",
        label:"Add Product",
        name:"add_product",
        onChange:handleOnAdd,
        type:"button",
        value:"add_product"                
    },
    {
        id:"update_product",
        label:"Update Product",
        name:"update_product",
        onChange:handleOnUpdate,
        type:"button",
        value:"update_product"                
    },
    {
        id:"delete_product",
        label:"Delete Product",
        name:"delete_product",
        onChange:handleOnDelete,
        type:"button",
        value:"delete_product"                
    }
]