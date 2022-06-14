import Head from "next/head";

import styles from "./contact.module.css";
import EmailForm from "@/src/features/email_form";

/*-- ****************************************************** -->
<---                  CONTACT PAGE COMPONENT                -->
<--- ****************************************************** -*/

export default function Contact(){
    return(
        <div className="container">
            <Head>
                <title>Contact Sawdust CastleRock</title>
                <meta name="description" content="Contact Sawdust CastleRock" />
            </Head>
            <main className="main_container">
                <h3>Contact Us</h3>
                <ul className={ styles.contact }>
                    <li><strong>EMAIL:</strong> EMAILADDRESS@BUYCOOLSTUFF.OUTLOOK</li>
                    <li><strong>PHONE:</strong> 867-5309</li>
                    <li><strong>FACEBOOK:</strong> HTTPS://WWW.FACEBOOK.COM/SOMEUSERNAME</li>
                    <li><strong>TWITTER:</strong> @SOMETWITTERACCOUNT</li>
                    <li><strong>INSTAGRAM:</strong> SOMEINSTAACCOUNT</li>
                </ul>
                <EmailForm />
            </main>
        </div>
    )
}