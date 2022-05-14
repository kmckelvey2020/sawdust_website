export default function Seo({title, description}){
    document.querySelector('title').innerHTML = title;
    document.querySelector("meta[name='description']").setAttribute("content", description);
    return null;
}