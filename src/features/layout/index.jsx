import styles from "./layout.module.css";
import Footer from "@/src/features/layout/footer";
import Header from "@/src/features/layout/header";

/*-- ****************************************************** -->
<---                    LAYOUT COMPONENT                    -->
<--- ****************************************************** -*/

export default function Layout ({ children }){
    return(
        <div className={ styles.background_container }>
            <div className={ styles.background_img_container }>
                <div className={ styles.header_container }>
                    <Header />
                </div>
                <div className={ styles.main_layout_container }>
                    { children }
                </div>
                <div className={ styles.footer_container }>
                    <Footer />
                </div>
            </div>
        </div>
    )
}