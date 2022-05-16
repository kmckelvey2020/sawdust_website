import Head from "next/head";

import styles from "./contact.module.css";

export default function Contact(){
    return(
        <div className={ styles.contact }>
            <Head>
                <title>Contact Sawdust CastleRock</title>
                <meta name="description" content="Contact Sawdust CastleRock" />
            </Head>
            <h5>Contact</h5>
            <p><strong>EMAIL:</strong> EMAILADDRESS@BUYCOOLSTUFF.OUTLOOK</p>
            <p><strong>PHONE:</strong> 867-5309</p>
            <p><strong>FACEBOOK:</strong> HTTPS://WWW.FACEBOOK.COM/SOMEUSERNAME</p>
            <p><strong>TWITTER:</strong> @SOMETWITTERACCOUNT</p>
            <p><strong>INSTAGRAM:</strong> SOMEINSTAACCOUNT</p>
            <h5>Email me:</h5>
        </div>
    )
}