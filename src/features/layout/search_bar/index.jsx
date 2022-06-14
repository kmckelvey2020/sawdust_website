import { useState, useContext } from "react";
import { useRouter } from "next/router";

import Button from "@/src/ui/button";
import FormInput from "@/src/ui/form_input";
import SearchContext from "@/src/context/search_context";

/*-- ****************************************************** -->
<---                  SEARCHBAR COMPONENT                   -->
<--- ****************************************************** -*/

export default function SearchBar() {
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');
    const searchCtx = useContext(SearchContext);

    function handleOnClick() {
        searchCtx.handleSearch(searchValue);
        if(router.pathname!=="/gallery" && router.pathname!=="/shop") {
            router.push("/shop");
        }
    }

    function handleOnChange (event) {
        setSearchValue(event.target.value);
    }
    
    return(
        <form>
            <FormInput 
                key="search_field" 
                id="search_field"
                onChange={ handleOnChange }
                name="search_field"
                placeholder="Enter category or product id"
                type="text"
                value={ searchValue }
            />
            <Button
                key="search" 
                id="search"
                onClick={ handleOnClick }
                name="search"
                label="SEARCH"
                value="search" 
            />
        </form>
    )
}