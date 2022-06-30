import Head from "next/head";

/*-- ****************************************************** -->
<---                   ABOUT PAGE COMPONENT                 -->
<--- ****************************************************** -*/

export default function About(){
    return(
        <div className="container">
            <Head>
                <title>About Sawdust CastleRock</title>
                <meta name="description" content="About Sawdust CastleRock" />
            </Head>
            <main className="main_container">
                <h3>About Sawdust Castle Rock</h3>
                <p>Sawdust Castle Rock has become more and more aware of the importance of appreciating the world around us in a meaningful way. The stories that can be told by our surroundings shape us from who we were before into the humans we want to be. These stories create us as individuals, families and even communities.</p>
                <p>The legacy we will leave behind is wound through the choices we make and the bonds we share together as humans. Using nature to build tangible memories that can be passed down through generations, has become a defining passion of Michael and Jennifer Slamowitz, owners of Sawdust Castle Rock. They began their journey by creating new ideas and reviving antiques as a gentle hobby for family and friends.</p>
                <p>When they realized this was more than a hobby, but a powerful tool to connect with their community and strangers in an impactful way, they began to understand this was so much more important to them than refinishing old wares or creating new pieces. They wanted to share this experience of connection by learning about others through family tales and traditions. This is the story of how Sawdust Castle Rock was created.</p>
            </main>
        </div>
    )
}