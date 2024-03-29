import Button from "@/src/ui/button";
import Radio from "@/src/ui/radio";
import Select from "@/src/ui/select";
import TextArea from "@/src/ui/textarea";
import FormInput from "@/src/ui/form_input";

/*-- ****************************************************** -->
<---                       FIELDSET                         -->
<--- ****************************************************** -*/

// Takes in fieldset_heading, object containing event handlers, current fieldvalues state, and an array of objects containing input types along with each input's attributes (input_props as an Object)
// Returns a fieldset of form inputs
export default function FieldSet ({ fieldset_heading='', onEventHandlers, fieldvalues, input_props }) {

    return (
        <fieldset className="field_set">
            <h5>{ fieldset_heading }</h5>
            {input_props.map((input) => {
                const { id, name, type, ...attributes } = input;
                switch(type) {
                    case 'button':
                        return <Button
                            key={ id } 
                            id={ id }
                            onClick={ onEventHandlers.handleOnClick }
                            name={ name }
                            { ...attributes } 
                        />
                        break;
                    case 'submit':
                        return <Button
                            key={ id } 
                            id={ id }
                            onClick={ onEventHandlers.handleOnSubmit }
                            name={ name }
                            { ...attributes } 
                        />
                        break;
                    case 'checkbox':
                        return <p>To do: Add checkbox to Fieldset Component</p>
                        break;
                    case 'radio':
                        return <Radio 
                            key={ id } 
                            id={ id }
                            onChange={ onEventHandlers.handleOnChange }
                            name={ name }
                            { ...attributes } 
                            value={ fieldvalues[name] }
                        />
                        break;
                    case 'select':
                        return <Select 
                            key={ id } 
                            id={ id }
                            onChange={ onEventHandlers.handleOnChange }
                            name={ name }
                            { ...attributes } 
                            value={ fieldvalues[name] } />
                        break;
                    case 'textarea':
                        return <TextArea 
                            key={ id } 
                            id={ id }
                            onChange={ onEventHandlers.handleOnChange }
                            name={ name }
                            { ...attributes } 
                            value={ fieldvalues[name] } />
                        break;
                    case 'file':
                        return <FormInput 
                            key={ id } 
                            id={ id }
                            onChange={ onEventHandlers.handleOnChange }
                            name={ name }
                            type={ type }
                            { ...attributes } 
                            value={ fieldvalues[name] } />
                        break;
                    default:
                        return <FormInput 
                            key={ id } 
                            id={ id }
                            onChange={ onEventHandlers.handleOnChange }
                            name={ name }
                            type={ type }
                            { ...attributes } 
                            value={ fieldvalues[name] } />
                        break;
                }
            })}
        </fieldset>
    )
}
