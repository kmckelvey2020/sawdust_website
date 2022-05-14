export default function Radio({ 
    type='radio', 
    label,
    onChange = () => {},
    value,
    groupname
}){

    const id = label
    .toLowerCase()
    .split(' ')
    .map((word)=>{
        word.replace(/[^a-z0-9]+/g,'')
    })
    .join('-');
    
    return (
        <div className="radio_button_container">
            <div>
                <label className="radio_button_label" htmlFor={id}>
                    {label}
                </label>
                :
            </div>
            <input
                id={id}
                className="radio_button_input"
                name={groupname}
                type={type}
                onChange={(e) => onChange(e.target.value, e)}
                value={value}
            />
        </div>
    )
}