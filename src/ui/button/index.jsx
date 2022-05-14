import styles from "./button.module.css";

export default function Button({ 
    children,
    type = 'button',
    label,
    onClick = () => {} 
}){

    const id = label
    .toLowerCase()
    .split(' ')
    .map((word)=>{
        return word.replace(/[^a-z0-9]+/g,'')
    })
    .join('-');
    

    return (
        <button 
            id={id}
            className={styles.button_input}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}