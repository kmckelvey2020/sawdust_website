import styles from "./form_input.module.css";

/*-- ****************************************************** -->
<---                  FORM INPUT COMPONENT                  -->
<--- ****************************************************** -*/

// Can be used for input type = checkbox, email, file, number, text, password
export default function FormInput ({ errormessage="", id, label="", onChange = () => {}, value, ...inputProps }) {
    if(label===""){ // Input element with no label
        return(
            <div className={ styles.form_input_nolabel }>
                <input
                    className={ styles.form_input }
                    id={ id }
                    { ...inputProps }
                    onChange={ onChange }
                    value={ value }
                />
            </div>
        )
    }
    else{ // Input element with label
        return (
            <div className={ styles.form_input_container }>
                <div>
                    <label htmlFor={ id }>
                        { label }
                    </label>
                    :
                </div>
                <input
                    className={ styles.form_input }
                    id={ id }
                    { ...inputProps }
                    onChange={ onChange }
                    value={ value }
                />
                <div className={ styles.error_message }>{ errormessage }</div>
            </div>
        )
    }
}