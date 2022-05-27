
/*-- ************************************************************* -->
<--- ALL PRODUCTS OR PRODUCTS MATCHING SEARCH TERM (CATEGORY/PRODUCT ID)-->
<--- ************************************************************* -*/
export const GetGallery = async () => {
    
    const res = await fetch(`/api/searchterm`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then((response) => response.json())
    .catch((err) => console.log(err));
   
    return JSON.stringify(res);
}