import styles from "./layout.module.css";
import Footer from "@/src/features/layout/footer";
import Header from "@/src/features/layout/header";

export default function Layout ({ children }){
    return(
        <div className={ styles.background_container }>
            <div className={ styles.layout_container }>
                <Header />
                { children }
                <Footer />
            </div>
        </div>
    )
}