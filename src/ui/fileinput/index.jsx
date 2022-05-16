import styles from "./fileinput.module.css"
export default function FileInput({ 
    type='file', 
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
        <div className={ styles.fileinput_container }>
            <div>
                <label className="fileinput_label" htmlFor={ id }>
                    { label }
                </label>
                :
            </div>
            <input
                type={ type }
                className={ styles.fileinput_input }
                name={ id }
                id={ id }
                value={ value ? value: '' }
                onChange={ onChange }
            />
        </div>
    )
}