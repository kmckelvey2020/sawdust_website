import styles from "./numberinput.module.css"
export default function NumberInput({ 
    type='number', 
    label, 
    value,
    min,
    max,
    step,
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
                <label htmlFor={ id }>
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
                step={ step }
                onChange={ onChange }
            />
        </div>
    )
}