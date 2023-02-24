import React, { useContext, useCallback, useEffect, useState, useRef } from "react";
import Router from 'next/router'

import { UserContext } from '../Contexts/UserProvider';
import  getServerSidePropsAuth  from '../Utils/serverSidePropsAuth';

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Profile.module.css'

import ProfilePicture from '../images/pp.png'

import Footer from './comps/footer'

import { UilCog } from '@iconscout/react-unicons'
import { UilBars } from '@iconscout/react-unicons'
import Menu from './comps/menu'
import Tabs from "./comps/tabs";

import admin from "../Models/firbaseAdmin";




export async function getServerSideProps(context){

  const auth = await getServerSidePropsAuth(context);
  if (auth.props.authenticated === false){
    return{
      redirect: {
        destination: "/login",
        permanent: false
      }
    }
  }
  
  //Abstract all this into different files
  const db = admin.firestore();
  //getting userDrabbles
  const getAllDrabbleSnapshots = async () => {
    const userRef = await db.collection("user").doc(auth.props.uid);
    const snapshot = await userRef.collection("UserDrabbles").get();

    return snapshot.docs.map((doc) => {
      return [doc.data().text, doc.data().emojis, doc.data().postId, doc.data().userId]
    });   
  }

  //getting user's favorite drabble posts
  const likedDrabblesSnapshot = async () => {
    const userRef = await db.collection("user").doc(auth.props.uid);
    const drabbleIdSnapshot = await userRef.collection("FavoritedDrabblesList").get();

    let drabbleFavorites = await drabbleIdSnapshot.docs.map((doc) => doc.data());
    
    return drabbleFavorites;
  }

  //getting the favorited drabbles from the Appwide drabble storage
  const getFavorite = async () => {
      let likedDrabbles = await likedDrabblesSnapshot();
      let likedDrabblesArray = await Promise.all(likedDrabbles.map(
        async (post) => {
          let AppWideDrabblesRef = await db.collection("AppWideDrabbles").doc(post.postId).get();

          return [AppWideDrabblesRef.data().text, AppWideDrabblesRef.data().emojis]
        }
      ));

        return likedDrabblesArray;
  }

  //store return values
  const drabbles = await getAllDrabbleSnapshots();
  const favorites = await getFavorite();

  return {
    props: {drabbles, favorites}
  }
}

export default function Profile({drabbles, favorites}) {
  const { currentUser } = useContext(UserContext);
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

        <div className={styles.navwrapper}>
        <div className={styles.navleft}>
          <Menu />
        </div>
        <div className={styles.navmid}>
          <div className={styles.pp}>
            <Image className='rounded-full'
            src={ProfilePicture}
            alt="Profile Picture"
            width="640px"
            height="640px"
            style={styles.image}
            layout="responsive" />
          </div>
        </div>
        <div className={styles.navright}>
        <a href="/settings">
          <UilCog size='1.5rem' className={styles.profile} />
        </a>
        </div>
      </div>

        <main>
          <h1 className='text-center mt-8 xl:mt-24'>Drabble User</h1>
          <p className='text-center text-lg -mt-2.5'>@{currentUser && <span>{currentUser.displayName}</span>}</p>
          <Tabs userDrabbles={drabbles} likedDrabbles={favorites}/>

        </main>

        <Footer />

    </div>
  )
}