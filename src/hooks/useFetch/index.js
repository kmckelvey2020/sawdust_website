import { useState } from "react";

/*-- ****************************************************** -->
<---                      useFetch                          -->
<--- ****************************************************** -*/

const useFetch = () =>{
    const [fetchedData, setFetchedData] = useState(null);

    const makeFetch = async (url, configurations) => {
    
        await fetch(url, {
            ...configurations
        })
        .then((response) => {
            if(!response.ok) {
                throw new Error("Failed to fetch.");
            }
            console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data);
            setFetchedData(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    return { fetchedData, makeFetch };
}

export default useFetch;