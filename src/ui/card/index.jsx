import styles from "./card.module.css";

/*-- ************************************************************* -->
<---                         CARD COMPONENT                        -->
<--- ************************************************************* -*/

export default function Card(props) {
    return (
        <div className={ styles.card }>
            { props.children }
        </div>
    )
}