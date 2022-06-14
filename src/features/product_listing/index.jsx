import Image from "next/image";

import styles from "./product_listing.module.css";

/*-- ****************************************************** -->
<---               PRODUCT LISTING COMPONENT                -->
<--- ****************************************************** -*/

export default function ProductListing({ product }){
    const { product_id, product_name, product_description, product_category, product_price, for_sale, image0, alt_description0, image1, alt_description1, image2, alt_description2, image3, alt_description3 } = product;
    
    return (
        <span className={ styles.product_listing } key={ product_id }>
            <figure>
                <div className={ styles.product_image }>
                    <Image
                        src={ image0 ? image0 : "/mocklogo.png" } 
                        alt={ alt_description0 ? alt_description0 : "Image for product listing." }
                        width={ 400 }
                        height={ 500 }
                        layout="responsive"
                        sizes="25vw"
                    />
                </div>
                <figcaption className={ styles.fig_caption }> 
                    <h6>{ product_name }</h6>
                    <div className={ styles.product_details }>
                        <p>Price: ${ product_price }<br/>
                        This product is { for_sale ? "for sale." : "not for sale."}<br/>
                        Category: { product_category }, Product Id: { product_id }<br/>                
                        { product_description }</p>
                    </div>
                </figcaption>
            </figure>
        </span>
    )
}