import styles from "./layout.module.css";

export default function Layout ({ children }){
    return(
        <div className={ styles.background_container }>
            <div className={ styles.layout_container }>
            <header className={ styles.header }>
                header
            </header>
                { children }
            <footer className={ styles.footer }>
                footer
            </footer>
            </div>
        </div>
    )
}