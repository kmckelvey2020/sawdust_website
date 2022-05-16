import styles from "./button.module.css";

export default function Button({ 
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
    .join('_');

    return (
        <button 
            type={ type }
            className={ styles.button_input }
            name={ id }
            id={ id }
            value={ label }
            onClick={ onClick }
        >
            { label }
        </button>
    )
}