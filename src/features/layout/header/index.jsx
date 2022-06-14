import styles from "./header.module.css";
import Logo from "@/src/ui/logo";
import NavigationBar from "../navigation_bar";
import SearchBar from "../search_bar";

/*-- ****************************************************** -->
<---                     HEADER COMPONENT                   -->
<--- ****************************************************** -*/

export default function Header (){

    return(
        <header className={ styles.header }>
            <nav className={ styles.navigation_and_search_bar }>
                <NavigationBar />
                <div className={ styles.search_bar }>
                    <SearchBar />
                </div>
            </nav>
            <div className={ styles.logo }>
                <span className={ styles.logo_image }><Logo /></span>
                <h1>Sawdust<br/>Castle Rock</h1>
            </div>
            <aside className={ styles.aside }>
                <h6>"Woodcrafting with heart and history"</h6>
            </aside>
        </header>
    )
}