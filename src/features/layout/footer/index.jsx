import styles from "./footer.module.css";
import NavigationBar from "../navigation_bar";

/*-- ************************************************************* -->
<---                        FOOTER COMPONENT                       -->
<--- ************************************************************* -*/

export default function Footer (){
    return(
        <footer className={ styles.footer_content }>
            <nav className={ styles.mini_nav }>
                <NavigationBar />
            </nav>
            <span className={ styles.rights_reserved }>(c) 2022 MJSawdust | All rights reserved | 867-5309 | 
            emailaddress@buycoolstuff.outlook | </span>
            <span className={ styles.social_sites }>FaceBook | Twitter | Instagram</span>
        </footer>
    )
}