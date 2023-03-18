import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Navbar from './comps/navbar'
import Footer from './comps/footer'

import {SvgBlob} from 'react-svg-blob';
import Card from './comps/cards'
import Menu from './comps/menu'
import { useRouter } from 'next/router';

import { UserContext } from '../Contexts/UserProvider';

function generateShapeProps() {
  return {
    size: 80,
    growth: 7,
    edges: 8
  };
}

function generateShapeProps2() {
  return {
    size: 80,
    growth: 7,
    edges: 13
  };
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width"/>
        <meta charSet="utf-8"/>
        <title>Drabble</title>
        <meta name="description" content="Ability to express interesting and meaningful ideas in a confined space" />
        <meta name="next-head-count" content="4"/>
        <link rel="icon" href="/icon-384x384.png" /> 
      </Head>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.introtext}>
        <p className={styles.words}>
          A drabble is a short work of fiction of precisely one hundred words in length. The purpose of the drabble is brevity, testing the author's ability to express interesting and meaningful ideas in a confined space.
        </p>
        </div>

        <Link href="/write">
          <div className={styles.buttondiv}>
            <button className={styles.button}>Start Writing</button>
          </div>
        </Link>

        <div className={styles.sectionone}>
          <div className={styles.blobone}>
          <SvgBlob variant='solid' isOutline={false} color='#C4C4C4' shapeProps={generateShapeProps()} />
          </div>

          <div className={styles.textone}>
            <h1>How does it work?</h1>
            <p>If you aren’t sure what to write about there’s no need to worry, we’ve got you covered!</p> 
            <br />  
            <p>Everyday we will truly put your writing skills to the test by giving you six emojis that you’ll use to integrate into your drabble.</p>
          </div>
        </div>

        <div className={styles.quote}>
          <span className={styles.quotebox}>
            <h2>"If you want to be a writer, you must do two things above all others: read a lot and write a lot. There's no way around these two things that I'm aware of, no shortcut."</h2>
            <br />
            <h3><em>On Writing</em> ‎ Stephen King</h3>
          </span>
        </div>

        <div className={styles.sectiontwo}>
          <div className={styles.texttwo}>
            <h1>Why do it?</h1>
            <p>Just because this writing form is short doesn’t mean you can deprive us of a good story.</p> 
            <br />  
            <p>The short from forces us to distill a story to its essence. We are forced to consider every word and sentence closely, and too often in writing we don’t do that.</p>
          </div>

          <div className={styles.blobtwo}>
          <SvgBlob variant='solid' isOutline={false} color='#C4C4C4' shapeProps={generateShapeProps2()} />
          </div>
        </div>

        <div className={styles.cards}> {/* cards div */}
          <Card drabbleCardText="Rhaegar the dragon loved music and movies, and during an exploration of his kingdom, he stumbled upon an old hospital where he found an ancient key. As he picked it up, he was transported to a distant galaxy, where he met a group of creatures struggling to create music. With his magical powers, Rhaegar summoned a grand piano and started playing, creating a beautiful symphony that echoed through the galaxy. Their music attracted a powerful alien ruler who asked them to perform for his people. Impressed, he gave Rhaegar the key to the galaxy as a reward. Rhaegar returned home, unlocking a magical treasure trove of music and movies with his key." drabbleEmojis={['🐉', '🎵', '🎬', '🏥', '🗝', '️🌌']}/>
          {/*
          <Card drabbleCardText="Rhaegar the dragon loved music and movies, and during an exploration of his kingdom, he stumbled upon an old hospital where he found an ancient key. As he picked it up, he was transported to a distant galaxy, where he met a group of creatures struggling to create music. With his magical powers, Rhaegar summoned a grand piano and started playing, creating a beautiful symphony that echoed through the galaxy. Their music attracted a powerful alien ruler who asked them to perform for his people. Impressed, he gave Rhaegar the key to the galaxy as a reward. Rhaegar returned home, unlocking a magical treasure trove of music and movies with his key." drabbleEmojis={['🐉', '🎵', '🎬', '🏥', '🗝', '️🌌']}/>
          <Card drabbleCardText="Rhaegar the dragon loved music and movies, and during an exploration of his kingdom, he stumbled upon an old hospital where he found an ancient key. As he picked it up, he was transported to a distant galaxy, where he met a group of creatures struggling to create music. With his magical powers, Rhaegar summoned a grand piano and started playing, creating a beautiful symphony that echoed through the galaxy. Their music attracted a powerful alien ruler who asked them to perform for his people. Impressed, he gave Rhaegar the key to the galaxy as a reward. Rhaegar returned home, unlocking a magical treasure trove of music and movies with his key."drabbleEmojis={['🐉', '🎵', '🎬', '🏥', '🗝', '️🌌']}/>
          */}
        </div>
        <div className={styles.finaltext}>
          <p>And don't worry, you can share your stories to the world or keep them all to yourself.</p>
        </div>

        <Link href="/register">
          <div className={styles.buttondiv}>
            <button className={styles.button}>Sign Up</button>
          </div>
        </Link>
      </main>

      <Footer />

    </div>
  )
}