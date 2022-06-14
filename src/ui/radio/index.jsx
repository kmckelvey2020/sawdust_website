import styles from "./radio.module.css";

/*-- ****************************************************** -->
<---               RADIO BUTTON INPUT COMPONENT             -->
<--- ****************************************************** -*/

export default function Radio({ errormessage="", label, labels, name, onChange = () => {}, type="radio", value, values, ...inputProps }) {
    return (
        <div className={ styles.radio_container }>
            { label } 
            { labels.map((elementLabel, index) => {
                const val = values[index];
                const labelid = elementLabel
                    .toLowerCase()
                    .split(' ')
                    .map((word)=>{ return word.replace(/[^a-z0-9]+/g,'') })
                    .join('_');
                if(value === val) {
                    return(
                        <div key={ labelid }>
                            <label htmlFor={ labelid }>
                                { elementLabel }
                            </label>
                            :
                            <input  
                                id={ labelid }
                                { ...inputProps }
                                name={ name }
                                onChange={ onChange }
                                type={ type }
                                checked
                                value={ val }
                            />
                        </div>
                    )
                }
                else {
                    return(
                        <div key={ labelid }>
                            <label htmlFor={ labelid }>
                                { elementLabel }
                            </label>
                            :
                            <input  
                                id={ labelid }
                                { ...inputProps }
                                name={ name }
                                onChange={ onChange }
                                type={ type }
                                value={ val }
                            />
                        </div>
                    )
                }
            })}
            <div className={ styles.error_message }>{ errormessage }</div>
        </div>
    )
}