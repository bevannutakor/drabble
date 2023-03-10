import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import ProfilePicture from '../images/pp.png'
import styles from "../styles/Settings.module.css"
import Footer from './comps/footer'
import Navbar from './comps/navbar'
import Switches from './comps/switches';
import Name from './comps/name'
import Bio from './comps/bio'
import Location from './comps/location'
import logout from '../Utils/logout';
import { useRouter } from 'next/router'
import { Card, Text } from "@nextui-org/react";

export default function Settings() {
  const router = useRouter()

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
    window.location.href = '/'
  }
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

        <div className={styles.pp}>
          <Image 
            className='rounded-full'
            src={ProfilePicture}
            alt="Profile Picture"
            width="640px"
            height="640px"
            style={styles.image}
            layout="responsive" 
          />
        </div>

        <p className='text-center text-lg mt-2.5 hover:cursor-pointer'>Change your profile photo</p>

        <div className='my-7'>
          <Switches />
        </div>

        <div className='flex justify-center items-center gap-5'>
            <Name />
            <Location />
            <Bio />
        </div>

        <p className='text-center text-lg mt-20 hover:cursor-pointer'>PLANS</p>
        <div className={styles.plans}>
          <Card
            isPressable
            isHoverable
            variant="bordered"
            css={{ mw: "700px", h: "400px" }}
          >
            <Card.Body>
              <span className='text-center mt-40'>coming soon</span>
            </Card.Body>
          </Card>
        </div>
        

        <div className={styles.buttondiv}>
            <button onClick={handleLogout} className={styles.button}>Log Out</button>
        </div>

        <Footer />
    </div>
  )
}
