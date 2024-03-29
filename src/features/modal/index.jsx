import styles from "./modal.module.css";
import Button from "@/src/ui/button";

/*-- ****************************************************** -->
<---                     MODAL COMPONENT                    -->
<--- ****************************************************** -*/
// To do: finish modal to use as a confirmation for deleting
export default function Modal() {
    return (
        <div className={ styles.modal }>
            <p>Are you sure?</p>
            <Button
                key="cancel" 
                id="cancel"
                name="cancel"
                label="Cancel"
            />
            <Button
                key="confirm" 
                id="confirm"
                name="confirm"
                label="Confirm"
            />
        </div>
    );
}

