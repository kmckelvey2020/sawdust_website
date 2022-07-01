import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "./category_menu.module.css";
import SearchContext from "@/src/context/search_context";
import CategoryMenuChoices from "@/src/defaults_and_form_inputs/category_menu_choices";

/*-- ****************************************************** -->
<---                 CATEGORY MENU COMPONENT                -->
<--- ****************************************************** -*/

export default function CategoryMenu (){
    const router = useRouter();
    const searchCtx = useContext(SearchContext);

    function handleOnClick(event) {
        if(event.target.name) {
            searchCtx.handleSearch(event.target.name);
        } else if(event.target.innerHTML) {
            searchCtx.handleSearch(event.target.attributes.value.nodeValue);
        } else searchCtx.handleSearch("");
        if(router.pathname!=="/gallery" && router.pathname!=="/shop") {
            router.push("/shop");
        }
    }
    
    const onEventHandlers = { handleOnClick };

    const content=CategoryMenuChoices.map((attributes, index) => {
        const { id, label, name, value, ...inputProps} = attributes;
        return (
            <button key={ index } className={ styles.category_menu_grid_items } type="button" name={ value } value={ value } onClick={ handleOnClick }>
                <figure>
                    <div>
                        <Image
                            key={ id }
                            id={ id }
                            name={ name }
                            value={ value }
                            { ...inputProps }
                        />
                    </div>
                    <figcaption className={ styles.fig_caption }> 
                        <h6 name={ name } value={ value }>{ label }</h6>
                    </figcaption>
                </figure>
            </button>
    )});

    return(
        <nav className={ styles.category_menu_grid }>
            { content }
        </nav>           
    )
}