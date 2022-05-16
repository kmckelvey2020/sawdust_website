import Link from "next/link";

import styles from "./header.module.css";

export default function Header (){
    return(
        <header className={ styles.header }>
            <div className={ styles.logo }>
                <img 
                    src="mocklogo.png" 
                    alt="MockLogo"
                />
                <h1>Sawdust</h1>
            </div>
            <h5>"Woodcrafting with heart and history"</h5>
            <nav className={ styles.navigation_bar }>
                <ul>
                    <li><Link href="/"><a className={ styles.nav_link }>Home</a></Link></li>
                    <li><Link href="/about"><a className={ styles.nav_link }>About</a></Link></li>
                    <li><Link href="/shop"><a className={ styles.nav_link }>Store</a></Link></li>
                    <li><Link href="/gallery"><a className={ styles.nav_link }>Gallery</a></Link></li>
                    <li><Link href="/contact"><a className={ styles.nav_link }>Contact</a></Link></li>
                </ul>
                <div className={ styles.search_bar }>
                <input 
                    placeholder="I'm looking for..."
                    />
                <button 
                    className="search_button"
                    >SEARCH</button>
                </div>
            </nav>
        </header>
    )
}