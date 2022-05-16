import styles from "./textfield.module.css"
export default function TextField({ 
    type='text', 
    label, 
    value,
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
        <div className={ styles.text_field_container }>
            <div>
                <label className="text_field_label" htmlFor={ id }>
                    { label }
                </label>
                :
            </div>
            <input
                type={ type }
                className={ styles.text_field_input }
                name={ id}
                id={ id }
                value={ value ? value: '' }
                onChange={ onChange }
            />
        </div>
    )
}