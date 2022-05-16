import styles from "./radio.module.css";

export default function Radio({ 
    type="radio", 
    labels,
    values,
    groupname,
    onChange = () => {} 
}){

    const groupid = groupname
    .toLowerCase()
    .split(' ')
    .map((word)=>{
        return word.replace(/[^a-z0-9]+/g,'')
    })
    .join('_');

    return (
        <div className={ styles.radio_container }>
            {
                labels.map((label, index) => {
                    const val = values[index];
                    const labelid = label
                        .toLowerCase()
                        .split(' ')
                        .map((word)=>{
                            return word.replace(/[^a-z0-9]+/g,'')
                        })
                        .join('_');
                    return(
                        <div key={ labelid }>
                            <label htmlFor={ labelid }>
                                { label }
                            </label>
                            :
                            <input  
                                type={ type }
                                id={ labelid }
                                name={ groupid }
                                value={ val }
                                onChange={ onChange }
                                />
                        </div>
                    )
                })
            }
        </div>
    )
}