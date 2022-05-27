import Head from "next/head";
import { useState, useEffect, useContext } from "react";
import styles from "./gallery.module.css";
import Card from "@/src/ui/card";
import Logo from "@/src/ui/logo";
import ProductListing from "@/src/features/product_listing";
import SearchContext from "@/src/context/search_context";

/*-- ************************************************************* -->
<---               PRODUCT GALLERY PAGE COMPONENT                  -->
<--- ************************************************************* -*/

export default function Gallery(props){
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
            <section className={ styles.loading_section }>
                <p>Loading...</p>
                <Logo />
            </section>
        );
    }

/*-- ************************************************************* -->
<---          CONDITIONAL RENDERING BASED ON SEARCH RESULTS        -->
<--- ************************************************************* -*/
    //To do: Only display images on gallery page and add link to individual product info page
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
    if(counter===0) { // If search returned no results
        content=
            <section className={ styles.loading_section }>
                <h6>No Results Matching Search Term</h6>
                <p>Try entering a product id or category such as furniture, woodburning, art, or misc.</p>
                <Logo />
            </section>
    }

/*-- ************************************************************* -->
<---           DISPLAY GALLERY WHEN PROMISE FULFILLS               -->
<--- ************************************************************* -*/
    return(
        <div className={ styles.gallery_content }>
            <Head>
                <title>Sawdust CastleRock Gallery</title>
                <meta name="description" content="Sawdust CastleRock Gallery" />
            </Head>
            <h5>Gallery</h5>
            <ul className={ styles.gallery_list }>
                { content }
            </ul>
        </div>
    )
}