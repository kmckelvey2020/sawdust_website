import styles from "./numberinput.module.css"
export default function NumberInput({ 
    type='number', 
    label, 
    value,
    min,
    max,
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
        <div className={ styles.numberinput_container }>
            <div>
                <label className="numberinput_label" htmlFor={ id }>
                    { label }
                </label>
                :
            </div>
            <input
                type={ type }
                className={ styles.numberinput_input }
                name={ id}
                id={ id }
                value={ value ? value: '' }
                min={ min }
                max={ max }
                onChange={ onChange }
            />
        </div>
    )
}