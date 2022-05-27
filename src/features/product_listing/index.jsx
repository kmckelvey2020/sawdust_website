import Image from "next/image";

import styles from "./product_listing.module.css";

/*-- ************************************************************* -->
<---                  PRODUCT LISTING COMPONENT                    -->
<--- ************************************************************* -*/

export default function ProductListing({ product }){
    const { product_id, product_name, product_description, product_price, for_sale, product_category } = product;
    return (
        <span className={ styles.product_listing } key={ product_id }>
            <figure>
                <div className={ styles.product_image }>
                    <Image
                        src="/furnitureimage1.PNG" 
                        alt={ `Image for product.alt_description[0]` }
                        width={ 440 }
                        height={ 550 }
                        layout="responsive"
                        sizes="25vw"
                    />
                </div>
                <figcaption className={ styles.fig_caption }> 
                    <h6>{ product_name }</h6>
                    <p>{ product_description }<br/>
                    Price: ${ product_price }<br/>
                    This product is { for_sale ? "for sale." : "not for sale."}<br/>
                    Category: { product_category }, Product Id: { product_id }</p>                
                </figcaption>
            </figure>
        </span>
    )
}