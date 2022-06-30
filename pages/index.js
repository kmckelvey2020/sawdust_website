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
        <h5>Welcome to Sawdust Castle Rock...</h5>
        <p>Sawdust Castle Rock has become more and more aware of the importance of appreciating the world around us in a meaningful way. The stories that can be told by our surroundings shape us from who we were before into the humans we want to be. These stories create us as individuals, families, and even communities.</p>
        <p>The legacy we will leave behind is wound through the choices we make and the bonds we share together as humans. Using nature to build tangible memories that can be passed down through generations, has become a defining passion of Michael and Jennifer Slamowitz, owners of Sawdust Castle Rock. They began their journey by creating new ideas and reviving antiques as a gentle hobby for family and friends.</p>
        <p>When they realized this was more than a hobby, but a powerful tool to connect with their community and strangers in an impactful way, they began to understand this was so much more important to them than refinishing old wares or creating new pieces. They wanted to share this experience of connection by learning about others through family tales and traditions. This is the story of how Sawdust Castle Rock was created.</p>
        <CategoryMenu />
      </main>
    </div>
  )
}
