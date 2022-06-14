import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "./category_menu.module.css";
import SearchContext from "@/src/context/search_context";
import CategoryMenuChoices from "@/src/defaults_and_form_inputs/category_menu_choices";

/*-- ****************************************************** -->
<---                 CATEGORY MENU COMPONENT                -->
<--- ****************************************************** -*/
// To do: Fix 'value' not being passed onClick of image or figcaption (only outside edges of button)
export default function CategoryMenu (){
    const router = useRouter();
    const searchCtx = useContext(SearchContext);

    function handleOnClick(event) {
        //console.log(event.target);
        searchCtx.handleSearch(event.target.value);
        if(router.pathname!=="/gallery" && router.pathname!=="/shop") {
            router.push("/shop");
        }
    }
    
    const onEventHandlers = { handleOnClick };

    const content=CategoryMenuChoices.map((attributes, index) => {
        const { id, label, name, value, ...inputProps} = attributes;
        return (
            <button key={ index } className={ styles.category_menu_grid_items } type="button" value={ value } onClick={ handleOnClick }>
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