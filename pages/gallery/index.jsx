import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";

import styles from "./gallery.module.css";
import Card from "@/src/ui/card";
import Logo from "@/src/ui/logo";
import SearchContext from "@/src/context/search_context";

/*-- ****************************************************** -->
<---            PRODUCT GALLERY PAGE COMPONENT              -->
<--- ****************************************************** -*/

export default function Gallery(props){
    const [isLoading, setIsLoading] = useState(true);
    const defaultProductsArray = {products: props.products ? props.products : []};
    const [products, setProducts] = useState(defaultProductsArray.products);
    const searchCtx = useContext(SearchContext);

/*-- ****************************************************** -->
<---            FETCH ALL PRODUCTS FROM DATABASE            -->
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
<---      PLACEHOLDER UNTIL FETCH PROMISE IS FULFILLED      -->
<--- ****************************************************** -*/

    if(isLoading) {
        return (
            <li className={ styles.loading_section }>
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
        if((searchCtx.search_term==='') || (`${product.product_id}`===searchCtx.search_term) || (product.product_category.toLowerCase().includes(searchCtx.search_term.toLowerCase())) || (product.product_description.toLowerCase().includes(searchCtx.search_term.toLowerCase()))){
            counter++;
            return (
                <Link href={`/${product.product_id}`}  key={ index }>
                    <a className={ styles.product_link }>
                        <li>
                            <Card>
                                <figure>
                                    <div className={ styles.product_image }>
                                        <Image
                                            src={ product.image0 ? product.image0 : "/mocklogo.png" } 
                                            alt={ product.alt_description0 ? product.alt_description0 : "Image for product listing." }
                                            width={ 400 }
                                            height={ 500 }
                                            layout="responsive"
                                            sizes="25vw"
                                        />
                                    </div>
                                    <figcaption className={ styles.fig_caption }> 
                                        <h6>{ product.product_name }</h6>
                                    </figcaption>
                                </figure>
                            </Card>
                        </li>
                    </a>
                </Link>
            )}})
    if(counter===0) { // If search returned no results
        content=
            <li className={ styles.gallery_no_results }>
                <h6>No Results Matching Search Term</h6>
                <p>Try entering a product id or category such as furniture, woodburning, art, or misc.</p>
                <Logo />
            </li>
    }

/*-- ****************************************************** -->
<---        DISPLAY GALLERY WHEN PROMISE FULFILLS           -->
<--- ****************************************************** -*/

    return(
        <div className="container">
            <Head>
                <title>Sawdust CastleRock Gallery</title>
                <meta name="description" content="Sawdust CastleRock Gallery" />
            </Head>
            <main className="main_container">
                <h3>Gallery</h3>
                <p>View our past and present projects. Click on an image to view the details.</p>
                <ul className={ styles.gallery_list }>
                    { content }
                </ul>
            </main>
        </div>
    )
}