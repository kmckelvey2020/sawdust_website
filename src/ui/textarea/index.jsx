import styles from "./textarea.module.css";

/*-- ************************************************************* -->
<---                   TEXT AREA INPUT COMPONENT                   -->
<--- ************************************************************* -*/

export default function TextArea({ errorMessage="", id, label, onChange = () => {}, value, ...inputProps }) {

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
            <div className={ styles.error_message }>{ errorMessage }</div>
        </div>
    )
}