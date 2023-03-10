import React, {useState, useContext, useEffect} from "react";
import Head from 'next/head'
import axios from 'axios';
import styles from '../styles/Write.module.css'

import { Textarea } from '@nextui-org/react';

import Navbar from './comps/navbar'
import Footer from './comps/footer'
import { UserContext } from '../Contexts/UserProvider';
import  getServerSidePropsAuth  from '../Utils/serverSidePropsAuth';

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

export default function Write() {

  const { currentUser } = useContext(UserContext);
  const [drabble, setDrabble] = useState("");
  const [emojis, setEmojis] = useState([]);

  const randomlyGenerateEmoji = async (e) => {
    let data = [];
    e.preventDefault();
    await axios.get("api/generateEmoji", {
      responseType: 'json'
    })
    .then((res) => {
      let response = res.data;
      for(var i=0; i<6; i++){
        //select randomly 6 emojis from the response
        let index = Math.floor(Math.random() * response.length);
        data.push(response[index].emoji)
        response.splice(index, 1)
      }
      setEmojis(data)
    });
  }

  const handleDrabbleChange = (e) => {
    setDrabble(e.target.value);
  }

  const handleSubmitDrabble = async (e) => {
    e.preventDefault();
    const response = await axios.post("api/newDrabble", {
      headers: {
        'Content-Type': 'application/json',
      },
      drabble: drabble,
      uid: currentUser.uid,
      emojis: emojis
    })
    return response;
  }

  useEffect(() => {
    console.log(emojis);
  }, [emojis])

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

        <main>
          <div className='flex justify-center items-center mt-16'>
            <div className='flex justify-center items-center mt-16'>
              <button class="shadow bg-stone-500 hover:bg-stone-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-2xl" onClick={randomlyGenerateEmoji}>
                <div className={styles.emojiContainer}>
                  {
                    emojis.length !== 0 ? emojis.map((emoji) => (
                    <div className={styles.emoji}>{emoji}</div>
                  )) : <div>Generate Emoji Prompt</div>
                  }
                </div>
              </button>
            </div>
          </div>
          <div className='flex justify-center items-center mt-16'>
            <Textarea
              placeholder="Let your imagination run wild."
              status='default'
              minRows={20}
              maxRows={100}
              width={1000}
              name="drabble"
              onChange={handleDrabbleChange}
            />
          </div>

          <div className='flex justify-center items-center mt-16'>
            <button class="shadow bg-stone-500 hover:bg-stone-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-2xl" type="submit" onClick={handleSubmitDrabble}>
              Submit
            </button>
          </div>
        </main>

        <Footer />

    </div>
  )
}