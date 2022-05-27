import { useState, createContext } from 'react';

/*-- ************************************************************* -->
<---                        SEARCH CONTEXT                         -->
<--- ************************************************************* -*/

// Default export
const SearchContext = createContext({
    search_term: '',
    handleSearch: (newSearch_term) => {}
});

// Named function export
export function SearchContextProvider(props) {
    const [userSearch_term, setUserSearch_term] = useState('');

    function handleSearchUpdate(newSearch_term) {
        setUserSearch_term(`${newSearch_term}`);
    }

    const context = {
        search_term: userSearch_term,
        handleSearch: handleSearchUpdate
    };

    return (
        <SearchContext.Provider value={ context }>
            { props.children }
        </SearchContext.Provider>
    )
}

export default SearchContext;