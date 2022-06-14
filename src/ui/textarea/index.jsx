import styles from "./textarea.module.css";

/*-- ****************************************************** -->
<---                TEXT AREA INPUT COMPONENT               -->
<--- ****************************************************** -*/

export default function TextArea({ errormessage="", id, label, char_limit=150, onChange = () => {}, value, ...inputProps }) {
    return (
        <div className={ styles.text_area_container }>
            <div>
                <label htmlFor={ id }>
                    { label }
                </label>
                :
            </div>
            <textarea
                className={ styles.text_area_input }
                id={ id }
                { ...inputProps }
                onChange={ onChange }
                value={ value }
            />
            <div className={ styles.error_message }>{ value.length<=char_limit ? '' : errormessage + ` ${value.length} out of ${char_limit} characters used.` }</div>
        </div>
    )
}