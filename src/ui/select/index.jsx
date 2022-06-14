import styles from "./select.module.css"

/*-- ****************************************************** -->
<---                  SELECT INPUT COMPONENT                -->
<--- ****************************************************** -*/

export default function Select({ errormessage="", id, label, options, name, onChange = () => {}, value, ...inputProps }) {

    return (
        <div className={ styles.select_container }>
            <div>
                <label htmlFor={ id }>
                    { label }
                </label>
                :
            </div>
            <select
                className={ styles.select_input }
                id={ id }
                { ...inputProps }
                name={ name }
                onChange={ onChange }
                value={ value }
            >
                {options.map((option) => {
                    return(
                        <option 
                            key={ option }
                            value={ option.toLowerCase() }
                        >
                            { option }
                        </option>
                    )
                })}
            </select>
            <div className={ styles.error_message }>{ errormessage }</div>
        </div>
    )
}