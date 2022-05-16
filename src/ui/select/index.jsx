import styles from "./select.module.css"
export default function Select({ 
    label, 
    options,
    onChange = () => {}  
}){

    const id = label
    .toLowerCase()
    .split(' ')
    .map((word)=>{
        return word.replace(/[^a-z0-9]+/g,'')
    })
    .join('_');
    
    return (
        <div className={ styles.select_container }>
            <div>
                <label className="select_label" htmlFor={ id }>
                    { label }
                </label>
                :
            </div>
            <select
                className={ styles.select_input }
                name={ id }
                id={ id }
                onChange={ onChange }
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
        </div>
    )
}