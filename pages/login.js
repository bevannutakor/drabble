import React, {useContext, useEffect} from "react";
import Head from 'next/head'
import Link from "next/link";


import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { useRouter } from 'next/router'

import Navbar from "./comps/navbar";
import Footer from "./comps/footer";
import signIn from '../Utils/signIn';
import signInGoogle from "../Utils/AuthProviders/signInGoogle";

import styles from "../styles/Register.module.css"

export default function Login(){

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;
        await signIn(email.value, password.value);
        window.location.href = "/write"
    }

    const handleGoogleAuth = async (e) => {
        e.preventDefault();
        await signInGoogle();
    }

    return(
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
        <main className='block items-center justify-center w-full flex-1 text-center my-12'>
            <div className='w-full p-5'>
                <div className='py-10'>
                    <h1 className='font-bold mb-2'>Log In To Your Account Now!</h1>
                    <div className='border-2 w-10 border-stone-300 inline-block mb-2'></div>
                    <div className='flex justify-center my-2'>
                        <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-stone-400">
                            <FaFacebookF className="text-sm" />
                        </a>
                        <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-stone-400">
                            <FaLinkedinIn className="text-sm" />
                        </a>
                        <a href="javascript:void(0)" onClick={handleGoogleAuth} className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-stone-400">
                            <FaGoogle className="text-sm" />
                        </a>
                        <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-stone-400">
                            <FaApple className="text-sm" />
                        </a>
                    </div>
                    <p className='dark:text-gray-100 text-sm my-4'>or use your email account</p>
                    <form onSubmit={handleSubmitLogin}>
                        <div class="md:flex md:items-center justify-center mb-6">
                            <div class="md:w-1/3 p-2">
                                <input className="bg-gray-200 appearance-none border-3 border-gray-200 rounded-2xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" name="email" placeholder="email"/>
                            </div>
                            <div class="md:w-1/3 p-2">
                                <input className="bg-gray-200 appearance-none border-3 border-stone-900 rounded-2xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="password" name="password" placeholder="password"/>
                            </div>
                        </div>
                        <button className="shadow bg-stone-500 hover:bg-stone-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-2xl" type="submit">
                            Submit
                        </button>
                    </form>
                    <a href='/register'>
                        <p className='dark:text-gray-100 text-sm my-4 hover:text-stone-400 cursor-pointer mt-10'>Don't have an account?</p>
                    </a>
                </div>
                
            </div>
        </main>
        <Footer />
        </div>
    );
}