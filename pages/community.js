import Head from 'next/head'
import styles from '../styles/Community.module.css'

import { useState } from 'react'

import Navbar from './comps/navbar'
import Footer from './comps/footer'
import Card from './comps/cards'

export default function Community() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className={styles.container}>
        <Navbar />

        <main>
        <>
        <div className={styles.tabs}>
            <div className={ toggleState === 1 ? `${styles.selectedtab}` : `${styles.tab}` }
            onClick={() => toggleTab(1)}
            >
                Hot
            </div>
            <div className={ toggleState === 2 ? `${styles.selectedtab}` : `${styles.tab}` }
            onClick={() => toggleTab(2)}
            >
                New
            </div>
            <div className={ toggleState === 3 ? `${styles.selectedtab}` : `${styles.tab}` }
            onClick={() => toggleTab(3)}
            >
                Polar
            </div>
            <div className={ toggleState === 4 ? `${styles.selectedtab}` : `${styles.tab}` }
            onClick={() => toggleTab(4)}
            >
                Top
            </div>
        </div>

        <div className="content-tabs">
            <div
            className={ toggleState === 1 ? `${styles.selectedcontent}` : `${styles.content}` }
            >
            <h2>Hot</h2>
            <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>

            <div
            className={ toggleState === 2 ? `${styles.selectedcontent}` : `${styles.content}` }
            >
                <h2>New</h2>
                
                <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>

            <div
            className={ toggleState === 3 ? `${styles.selectedcontent}` : `${styles.content}` }
            >
            <h2>Polar</h2>
            <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>

            <div
            className={ toggleState === 4 ? `${styles.selectedcontent}` : `${styles.content}` }
            >
            <h2>Top</h2>
            <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    </>
        </main>

        <Footer /> 

    </div>
  )
}