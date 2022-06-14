import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";

import styles from "./shop.module.css";
import Card from "@/src/ui/card";
import Logo from "@/src/ui/logo";
import ProductListing from "@/src/features/product_listing";
import SearchContext from "@/src/context/search_context";

/*-- ****************************************************** -->
<---               PRODUCT SHOP PAGE COMPONENT              -->
<--- ****************************************************** -*/
// To do: Make sure product listings are displaying a common, visually pleasing, responsive size
// To do: Make sure product info doesn't get cut off or in some way shows there is more to see

export default function Shop(props){
    const [isLoading, setIsLoading] = useState(true);
    const defaultProductsArray = {products: props.products ? props.products : []};
    const [products, setProducts] = useState(defaultProductsArray.products);
    const searchCtx = useContext(SearchContext);

/*-- ****************************************************** -->
<---             FETCH ALL PRODUCTS FROM DATABASE           -->
<--- ****************************************************** -*/

    useEffect(() => {
        setIsLoading(true);
        fetch(`/api/products`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then((response) => {
            return response.json();
        }).then((data) => {
            if(data.reslength>0) { // Success
                setIsLoading(false);
                setProducts([...data.response]);        
            }
        }).catch((err) => console.log(err));
    }, []); // Need dependency array to prevent infinite loop

/*-- ****************************************************** -->
<---       PLACEHOLDER UNTIL FETCH PROMISE IS FULFILLED     -->
<--- ****************************************************** -*/

    if(isLoading) {
        return (
            <li className={ styles.shop_loading }>
                <p>Loading...</p>
                <Logo />
            </li>
        );
    }

/*-- ****************************************************** -->
<---       CONDITIONAL RENDERING BASED ON SEARCH RESULTS    -->
<--- ****************************************************** -*/

    let counter=0;
    let content=products.map((product, index) => {
        if((product.for_sale===true) && ((searchCtx.search_term==='') || (`${product.product_id}`===searchCtx.search_term) || (product.product_category.toLowerCase().includes(searchCtx.search_term.toLowerCase())) || (product.product_description.toLowerCase().includes(searchCtx.search_term.toLowerCase())))){
            counter++;
            return (
                <Card key={ index }>
                    <Link href={`/${product.product_id}`}>
                        <a className={ styles.product_link }>
                            <li>
                                <ProductListing product={ product }/>
                            </li>
                        </a>
                    </Link>
                </Card>
            )}})
    if(counter===0) {
        content=
            <li className={ styles.shop_no_results }>
                <h6>No Results Matching Search Term</h6>
                <p>Try entering a product id or category such as furniture, woodburning, art, or misc.</p>
                <Logo />
            </li>
    }
/*-- ****************************************************** -->
<---           DISPLAY SHOP WHEN PROMISE FULFILLS           -->
<--- ****************************************************** -*/

    return(
        <div className="container">
            <Head>
                <title>Shop Sawdust CastleRock</title>
                <meta name="description" content="Shop Sawdust CastleRock" />
            </Head>
            <main className="main_container">
                <h3>Shop Our Custom Projects</h3>
                <p>Browse our current projects and items for sale. Click on an image to view the details. If you see something you are interested in (or would like to discuss a personalized commission), feel free to <Link href="/contact"><a>Contact Us</a></Link>.</p>
                <ul className={ styles.shop_list }>
                    { content }
                </ul>
            </main>
        </div>
    )
}