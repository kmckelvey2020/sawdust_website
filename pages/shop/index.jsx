import Head from "next/head";
import { useState, useEffect, useContext } from "react";

import styles from "./shop.module.css";
import Card from "@/src/ui/card";
import Logo from "@/src/ui/logo";
import ProductListing from "@/src/features/product_listing";
import SearchContext from "@/src/context/search_context";

/*-- ************************************************************* -->
<---                  PRODUCT SHOP PAGE COMPONENT                  -->
<--- ************************************************************* -*/

export default function Shop(props){
    const [isLoading, setIsLoading] = useState(true);
    const defaultProductsArray = {products: props.products ? props.products : []};
    const [products, setProducts] = useState(defaultProductsArray.products);
    const searchCtx = useContext(SearchContext);

/*-- ************************************************************* -->
<---                FETCH ALL PRODUCTS FROM DATABASE               -->
<--- ************************************************************* -*/
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
                setProducts((prevState) => ([ 
                    ...prevState, 
                    ...data.response
                ]));        
            }
        }).catch((err) => console.log(err));
    }, []); // Need dependency array to prevent infinite loop

/*-- ************************************************************* -->
<---          PLACEHOLDER UNTIL FETCH PROMISE IS FULFILLED         -->
<--- ************************************************************* -*/
    if(isLoading) {
        return (
            <section className={ styles.shop_loading }>
                <p>Loading...</p>
                <Logo />
            </section>
        );
    }

/*-- ************************************************************* -->
<---          CONDITIONAL RENDERING BASED ON SEARCH RESULTS        -->
<--- ************************************************************* -*/
    //To do: additional filter based on for_sale===true
    //To do: add link to individual product info page
    let counter=0;
    let content=products.map((product, index) => {
        if((searchCtx.search_term==='') || (`${product.product_id}`===searchCtx.search_term) || (product.product_category.toLowerCase().includes(searchCtx.search_term.toLowerCase())) || (product.product_description.toLowerCase().includes(searchCtx.search_term.toLowerCase()))){
            counter++;
            return (
                <li key={ index }>
                    <Card>
                        <ProductListing product={ product }/>
                    </Card>
                </li>
            )}})
    if(counter===0) {
        content=
            <section className={ styles.shop_loading }>
                <h6>No Results Matching Search Term</h6>
                <p>Try entering a product id or category such as furniture, woodburning, art, or misc.</p>
                <Logo />
            </section>
    }
/*-- ************************************************************* -->
<---              DISPLAY SHOP WHEN PROMISE FULFILLS               -->
<--- ************************************************************* -*/
    return(
        //To do: display search results
        <div className={ styles.shop_content }>
            <Head>
                <title>Shop Sawdust CastleRock</title>
                <meta name="description" content="Shop Sawdust CastleRock" />
            </Head>
            <h5>Shop</h5>
            <ul className={ styles.shop_list }>
                { content }
            </ul>
        </div>
    )
}