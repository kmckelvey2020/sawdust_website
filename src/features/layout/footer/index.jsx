import Link from "next/link";

import styles from "./footer.module.css";

export default function Footer (){
    return(
        <footer className={ styles.footer_content }>
            <nav className={ styles.mini_nav }>
                <ul>
                    <li><Link href="/"><a className={ styles.mini_link }>Home</a></Link></li>
                    <li><Link href="/about"><a className={ styles.mini_link }>About</a></Link></li>
                    <li><Link href="/shop"><a className={ styles.mini_link }>Store</a></Link></li>
                    <li><Link href="/gallery"><a className={ styles.mini_link }>Gallery</a></Link></li>
                    <li><Link href="/contact"><a className={ styles.mini_link }>Contact</a></Link></li>
                </ul>
            </nav>
            <span className={ styles.rights_reserved }>(c) 2022 MJSawdust | All rights reserved | 867-5309 | 
            emailaddress@buycoolstuff.outlook | </span>
            <span className={ styles.social_sites }>FaceBook | Twitter | Instagram</span>
        </footer>
    )
}