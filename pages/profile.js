import React, { useContext, useEffect, useState, useRef } from "react";
import Router from 'next/router'

import { UserContext } from '../Contexts/UserProvider';

import  getServerSidePropsAuth  from '../Utils/serverSidePropsAuth';
import axios from 'axios';

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
  return {
    props: {}
  }
}

export default function Profile(props) {
  const { currentUser } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);

  //todo: separate into another file for reusability
  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, ref.value)
    //console.log(ref.value)
    return ref.current
  }

  const fetchDrabbles = async () => {
    if(currentUser){
      await axios.post('/api/getUserDrabbles', {
        headers: {
          'Content-Type': 'application/json'
        },
        uid: currentUser.uid
      })
      .then((res) => {
        console.log(res.data)
        setPosts(res.data)
      })
    }
  }

  const getFavorites = async () => {
    if(currentUser){
        await axios.post('api/getFavorite', {
            headers: {
                'Content-Type': 'application/json'
            },
            uid: currentUser.uid
        })
        .then((res) => {
            console.log(res.data)
            setLikedPosts(res.data);
        })
    }
  } 
  
  const prevDrabblePostData = usePrevious(posts);
  const prevLikedPost = usePrevious(likedPosts);

  useEffect(() => {
    if(posts === prevDrabblePostData){
      fetchDrabbles();
    }
    if(likedPosts === prevLikedPost){
      getFavorites();
    }
  })
  
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
          {posts ? (<Tabs userDrabbles={posts} likedDrabbles={likedPosts}/>) : <div>You currently have no drabble posts</div>}

        </main>

        <Footer />

    </div>
  )
}