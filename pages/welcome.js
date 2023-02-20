import React from 'react'
import styles from '../styles/Welcome.module.css'
import Navbar from './comps/navbar'
import Footer from './comps/footer';

import {SvgBlob} from 'react-svg-blob';
import Switches from './comps/switches';
import { useRouter } from 'next/router'

export default function Welcome() {
    const router = useRouter()

    function generateShapeProps() {
        return {
          size: 80,
          growth: 9,
          edges: 6
        };
      }
    const handleSubmitRegister = async (e) => {
    e.preventDefault();
    // const { email, username, password } = e.target.elements;
    // await signUp(email.value, username.value, password.value);
    router.push('/profile')
    }
  return (
    <div className={styles.container}>
        <Navbar />
        <main>
            <h1 className={styles.toptext}>We're glad you here! Tell us a little about yourself.</h1>
            <div className={styles.blobdiv}>
                <div className={styles.blobone}>
                    <SvgBlob variant='solid' isOutline={false} color='#C4C4C4' shapeProps={generateShapeProps()} />
                </div>
            </div>

           <div className={styles.switches}>
            <Switches />
           </div>

            <div className={styles.inputs}>
                <form onSubmit={handleSubmitRegister}>
                    <div class="md:flex md:items-center justify-center mb-6">
                        <div class="md:w-1/3 p-2">
                            <h2 className='mb-2'>Display Name</h2>
                            <input class="bg-gray-200 appearance-none border-3 border-gray-200 rounded-2xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" maxlength = "60" name="Display Name" placeholder="What should we call you?"/>
                        </div>
                        <div class="md:w-1/3 p-2">
                            <h2 className='mb-2'>Location</h2>
                            <input class="bg-gray-200 appearance-none border-3 border-gray-200 rounded-2xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" maxlength = "60" name="Location" placeholder="City, Province/State"/>
                        </div>
                        <div class="md:w-1/3 p-2">
                            <h2 className='mb-2'>Bio</h2>
                            <input class="bg-gray-200 appearance-none border-3 border-stone-900 rounded-2xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" maxlength = "120" name="Bio" placeholder="Share a little about yourself"/>
                        </div>
                    </div>
                    <button class="shadow bg-stone-500 hover:bg-stone-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-2xl" type="submit">
                        Submit
                    </button>
                </form>
            </div>
            
        </main>
        <Footer />
    </div>
  )
}
