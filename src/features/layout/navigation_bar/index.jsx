import Link from "next/link";
import styles from "./navigation_bar.module.css";

/*-- ****************************************************** -->
<---                NAVIGATION BAR COMPONENT                -->
<--- ****************************************************** -*/

export default function NavigationBar() {
    return(
        <nav className={ styles.navigation_bar }>
            <ul>
                <li><Link href="/"><a className={ styles.nav_link }>Home</a></Link></li>
                <li><Link href="/about"><a className={ styles.nav_link }>About</a></Link></li>
                <li><Link href="/shop"><a className={ styles.nav_link }>Store</a></Link></li>
                <li><Link href="/gallery"><a className={ styles.nav_link }>Gallery</a></Link></li>
                <li><Link href="/contact"><a className={ styles.nav_link }>Contact</a></Link></li>
            </ul> 
        </nav>
    )
}