import styles from "./button.module.css";

/*-- ************************************************************* -->
<---                        BUTTON COMPONENT                       -->
<--- ************************************************************* -*/

export default function Button({ id, label, onClick = () => {}, name, type='button', value, ...inputProps}){
    
    return (
        <button 
            className={ styles.button_input }
            id={ id }
            { ... inputProps }
            name={ name }
            type={ type }
            value={ value }
            onClick={ onClick }
        >
            { label }
        </button>
    )
}