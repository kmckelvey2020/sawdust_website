import Head from "next/head";

import styles from "./productid.module.css";
import Card from "@/src/ui/card";
import ProductListing from "@/src/features/product_listing";

/*-- ****************************************************** -->
<---              PRODUCT BY ID PAGE COMPONENT              -->
<--- ****************************************************** -*/
// To do: Work on ui display to make more visually appealing
// To do: Add mini thumbnails if more than one image exists that can be toggled through onClick
export default function DisplayProductById(props) {
    return(
        <div className="container">
            <Head>
                <title>Sawdust CastleRock Product Details for { props.product.product_name }, product id: { props.product.product_id }</title>
                <meta name="description" content={ props.product.product_description } />
            </Head>
            <main className="main_container">
                <Card>
                    <h3>Product Details: { props.product.product_name }</h3>
                    <div className={ styles.product_listing_container }>
                        <ProductListing product={ props.product } />
                    </div>
                    <div className={ styles.product_history }>
                        <h6>Get to know the history...</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, ed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, ed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum.</p>
                    </div>
                </Card>
            </main>
        </div>
    )
}

export async function getStaticPaths() {
    const pool = require('@/src/database/connection_pool_heroku');
    let result;

    try {
        const client = await pool.connect();
        const response = await client.query(`SELECT product_id FROM product_table;`);
        client.release();
        result = (response) ? response.rows : null;
    } catch(err) {
        console.error(err);
    }
    return {
        paths: 
            result.map((product) => ({
                params: { productid: `${product.product_id}` },
            }),
            ),
        fallback: false
    }
}

export async function getStaticProps(context) {
    // Fetch data from an API or database
    // Anything here will be pre-rendered server side and never be exposed to client
    // Always returns an object
    const productId = context.params.productid;
    const pool = require('@/src/database/connection_pool_heroku');
    let result;

    try {
        const client = await pool.connect();
        const response = await client.query(`SELECT * FROM product_table WHERE product_id=${productId};`);
        client.release();
        result = (response) ? response.rows : null;
    } catch(err) {
        console.error(err);
    }
    return {
        props: {
            product: {
                product_id: result[0].product_id,
                product_name: result[0].product_name,
                product_description: result[0].product_description,
                product_category: result[0].product_category,
                product_price: result[0].product_price,
                quantity: result[0].quantity,
                for_sale: result[0].for_sale,
                image0: result[0].image0,
                alt_description0: result[0].alt_description0,
                image1: result[0].image1,
                alt_description1: result[0].alt_description1,
                image2: result[0].image2,
                alt_description2: result[0].alt_description2,
                image3: result[0].image3,
                alt_description3: result[0].alt_description3
            } 
        }, 
        // Incremental static generation
        revalidate: 10
    };
}