import Head from "next/head";
import Image from "next/image";

import styles from "./index.module.css";

export default function LandingPage() {
  
  return (
    <div className={ styles.landing_container }>
      <Head>
        <title>Sawdust CastleRock Home</title>
        <meta name="description" content="Home of Sawdust Castle Rock - for restored and handcrafted furniture, art, woodburning, and specialty woodcrafting. Woodcrafting with heart and history." />
      </Head>
      <h3>Heading 3</h3>
      <span className={ styles.lumber1 }>
        <Image
          src="/lumbertobecrafted_d.jpg" 
          alt="Lumber ready to be built into something awesome"
          width={ 450 }
          height={ 568 }
          layout="responsive"
          sizes="50vw"
        />
      </span>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing 
      elit, sed do eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad minim veniam, quis 
      nostrud exercitation ullamco laboris nisi ut aliquip ex 
      ea commodo consequat. Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa 
      qui officia deserunt mollit anim id est laborum.
      </p> 
      <h3>Heading 3</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
      elit, sed do eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad minim veniam, quis 
      nostrud exercitation ullamco laboris nisi ut aliquip ex 
      ea commodo consequat. Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa 
      qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  )
}
