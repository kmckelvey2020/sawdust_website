import Image from "next/image";

import styles from './logo.module.css';

/*-- ****************************************************** -->
<---                      LOGO COMPONENT                    -->
<--- ****************************************************** -*/
export default function Logo(){

    return (
        <figure className={ styles.logo_image }>
            <Image
                src="/mocklogo.png" 
                alt={ `Logo image for Sawdust Castlerock` }
                width={ 100 }
                height={ 100 }
                sizes="10vw"
            />
        </figure>
    )
}