import styles from "./checkbox.module.css";

/*-- ****************************************************** -->
<---                 CHECK BOX INPUT COMPONENT              -->
<--- ****************************************************** -*/

export default function Checkbox({ errormessage="", id, label, name, onChange = () => {}, type="checkbox", value, ...inputProps }) { 

    return (
        <div className={ styles.checkbox_container }>
            <label htmlFor={ id }>
                { label }
            </label>
            :
            <input
                id={ id }
                { ...inputProps }
                name={ name }
                onChange={ onChange }
                type={ type }
                value={ value }
            />
            <div className={ styles.error_message }>{ errormessage }</div>
        </div>
    )
}