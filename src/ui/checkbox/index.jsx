export default function Checkbox({ 
    type='checkbox', 
    label, 
    onClick = () => {},
    value,
    checked
}){

    const id = label
    .toLowerCase()
    .split(' ')
    .map((word)=>{
        word.replace(/[^a-z0-9]+/g,'')
    })
    .join('-');
    
return (
    <div className="checkbox_container">
        <div>
            <label className="checkbox_label" htmlFor={id}>
                {label}
            </label>
            :
        </div>
        <input
            id={id}
            className="checkbox_input"
            type={type}
            onClick={(e) => onClick(e.target.value, e)}
            value={value}
            checked={ checked }
        />
    </div>
)
}