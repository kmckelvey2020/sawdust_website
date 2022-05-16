import styles from "./checkbox.module.css";

export default function Checkbox({ 
    type='checkbox', 
    label, 
    value,
    checked,
    onClick = () => {},
}){

    const id = label
    .toLowerCase()
    .split(' ')
    .map((word)=>{
        return word.replace(/[^a-z0-9]+/g,'')
    })
    .join('-');
    
return (
    <div className={ styles.checkbox_container }>
        <label className="checkbox_label" htmlFor={ id }>
            { label }
        </label>
        :
        <input
            type={ type }
            className="checkbox_input"
            name={ id }
            id={ id }
            onClick={ (e) => onClick(e.target.value, e) }
            value={ value }
            checked={ checked }
        />
    </div>
)
}