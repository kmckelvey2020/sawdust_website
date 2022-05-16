import styles from "./textarea.module.css";

export default function TextArea({ 
    label, 
    rows=3,
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
        <div className={ styles.text_area_container }>
            <div>
                <label className="text_area_label" htmlFor={ id }>
                    { label }
                </label>
                :
            </div>
            <textarea
                className={ styles.text_area_input }
                name={ id }
                id={ id }
                rows={ rows }
                value={ value ? value: '' }
                onChange={ onChange }
            />
            
        </div>
    )
}