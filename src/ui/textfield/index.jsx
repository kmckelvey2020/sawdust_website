export default function TextField({ 
    type='text', 
    label, 
    placeholder,
    onChange = () => {},
    value 
}){

    const id = label
    .toLowerCase()
    .split(' ')
    .map((word)=>{
        return word.replace(/[^a-z0-9]+/g,'')
    })
    .join('-');
    
    return (
        <div className="text_field_container">
            <div>
                <label className="text_field_label" htmlFor={id}>
                    {label}
                </label>
                :
            </div>
            <input
                id={id}
                className="text_field_input"
                type={type}
                placeholder={placeholder ? placeholder : ''}
                onChange={(e) => onChange(e.target.value, e)}
                value={value}
            />
        </div>
    )
}