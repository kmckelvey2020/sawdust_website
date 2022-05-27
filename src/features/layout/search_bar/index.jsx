import styles from "./search_bar.module.css";

import Button from "@/src/ui/button";
import FormInput from "@/src/ui/form_input";

/*-- ************************************************************* -->
<---                     SEARCHBAR COMPONENT                       -->
<--- ************************************************************* -*/

export default function SearchBar(props) {

    return(
        <form>
            <FormInput 
                key="search_field" 
                id="search_field"
                onChange={ props.onEventHandlers.handleOnChange }
                name="search_field"
                placeholder="Enter category or product id"
                type="text"
                value={ props.searchValue }
            />
            <Button
                key="search" 
                id="search"
                onClick={ props.onEventHandlers.handleOnClick }
                name="search"
                label="SEARCH"
                value="search" 
            />
        </form>
    )
}