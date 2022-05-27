import Link from "next/link";
import { useState, useContext } from "react";

import styles from "./header.module.css";
import NavigationBar from "../navigation_bar";
import SearchBar from "../search_bar";
import SearchContext from "@/src/context/search_context";

/*-- ************************************************************* -->
<---                        HEADER COMPONENT                       -->
<--- ************************************************************* -*/

export default function Header (){
    const [searchValue, setSearchValue] = useState('');
    const searchCtx = useContext(SearchContext);

    function handleOnClick() {
        searchCtx.handleSearch(searchValue);
        // To do: history.push(path to gallery/shop)
    }

    function handleOnChange (event) {
        setSearchValue(event.target.value);
    }
    
    const onEventHandlers = { handleOnChange, handleOnClick };

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
                <NavigationBar />
                <div className={ styles.search_bar }>
                <SearchBar 
                    onEventHandlers={ onEventHandlers }
                    searchValue={ searchValue }
                />
                </div>
            </nav>
        </header>
    )
}