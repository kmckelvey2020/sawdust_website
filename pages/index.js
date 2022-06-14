import Head from "next/head";
import Image from "next/image";

import styles from "./index.module.css";
import CategoryMenu from "@/src/features/category_menu";

/*-- ****************************************************** -->
<---                 LANDING PAGE COMPONENT                 -->
<--- ****************************************************** -*/

export default function LandingPage() {

  return (
    <div className="container">
      <Head>
        <title>Sawdust CastleRock Home</title>
        <meta name="description" content="Home of Sawdust Castle Rock - for restored and handcrafted furniture, art, woodburning, and specialty woodcrafting. Woodcrafting with heart and history." />
      </Head>
      <main className="main_container">
        <h3>Heading 3</h3>
        <figure className={ styles.figure_container }>
          <div className={ styles.landing_image }>
            <Image
              src="/lumbertobecrafted_d.jpg" 
              alt="Lumber ready to be built into something awesome"
              width={ 400 }
              height={ 500 }
              layout="responsive"
              sizes="50vw"
            />
          </div>
          <figcaption>
            <p>Inspiration can strike anywhere.</p>
          </figcaption>
        </figure>
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
        <h5>Heading 5</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip ex 
          ea commodo consequat. Duis aute irure dolor in reprehenderit 
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa 
          qui officia deserunt mollit anim id est laborum.
        </p>
        <h5>Heading 5</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip ex 
          ea commodo consequat. Duis aute irure dolor in reprehenderit 
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa 
          qui officia deserunt mollit anim id est laborum.
        </p>
        <CategoryMenu />
      </main>
    </div>
  )
}
