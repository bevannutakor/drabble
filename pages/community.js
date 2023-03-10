import Head from 'next/head'
import styles from '../styles/Community.module.css'

import { useState, useContext } from 'react'

import Navbar from './comps/navbar'
import Footer from './comps/footer'
import Card from './comps/cards'

import admin from '../Models/firbaseAdmin';
import { UserContext } from '../Contexts/UserProvider';

import getServerSidePropsAuth from '../Utils/serverSidePropsAuth';
import favoritePost from '../Utils/favoritePost';

export async function getServerSideProps(context){
    const auth = await getServerSidePropsAuth(context);

    const db = admin.firestore();
    let allDrabbles;

    const allDrabblesSnapshot = await db.collection("AppWideDrabbles").get();
    allDrabbles = await allDrabblesSnapshot.docs.map((doc) => [doc.data().text, doc.data().emojis, doc.data().postId, doc.data().userId]);

    return{
        props: { allDrabbles }
    }
}

export default function Community({allDrabbles}) {
    const { currentUser } = useContext(UserContext);  
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
                    All
                </div>

                <div className={ toggleState === 2 ? `${styles.selectedtab}` : `${styles.tab}` }
                onClick={() => toggleTab(2)}
                >
                    Hot
                </div>
                <div className={ toggleState === 3 ? `${styles.selectedtab}` : `${styles.tab}` }
                onClick={() => toggleTab(3)}
                >
                    New
                </div>
                <div className={ toggleState === 4 ? `${styles.selectedtab}` : `${styles.tab}` }
                onClick={() => toggleTab(4)}
                >
                    Polar
                </div>
                <div className={ toggleState === 5 ? `${styles.selectedtab}` : `${styles.tab}` }
                onClick={() => toggleTab(5)}
                >
                    Top
                </div>
            </div>

            <div className="content-tabs">
                <div
                className={ toggleState === 1 ? `${styles.selectedcontent}` : `${styles.content}` }
                >
                    <h2>All</h2>
                    <div className={styles.cards}>
                        
                        {allDrabbles && allDrabbles.map((drabble) => (
                            <Card drabbleCardText={drabble[0]} drabbleEmojis={drabble[1]} favoritePost={() => favoritePost(currentUser, drabble[2], drabble[3] )}/>
                        ))}
                    </div>
                </div>

                <div
                className={ toggleState === 2 ? `${styles.selectedcontent}` : `${styles.content}` }
                >
                    <h2>Hot</h2>
                    
                    <div className={styles.cards}>
                        Coming Soon
                    </div>
                </div>

                <div
                className={ toggleState === 3 ? `${styles.selectedcontent}` : `${styles.content}` }
                >
                <h2>New</h2>
                <div className={styles.cards}>
                        Coming Soon
                    </div>
                </div>

                <div
                className={ toggleState === 4 ? `${styles.selectedcontent}` : `${styles.content}` }
                >
                <h2>Polar</h2>
                    <div className={styles.cards}>
                        Coming Soon
                    </div>
                </div>

                <div
                className={ toggleState === 5 ? `${styles.selectedcontent}` : `${styles.content}` }
                >
                <h2>Top</h2>
                    <div className={styles.cards}>
                        Coming Soon
                    </div>
                </div>
            </div>

            
        </>
            </main>

            <Footer /> 

        </div>
    )
}