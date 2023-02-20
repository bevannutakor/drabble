import React, { useState } from 'react'

import { UilBars } from '@iconscout/react-unicons'
import { UilMultiply } from '@iconscout/react-unicons'
import { UilWindowGrid } from '@iconscout/react-unicons'
// import { UilUser } from '@iconscout/react-unicons'
import { UilBrowser } from '@iconscout/react-unicons'
import { UilEdit } from '@iconscout/react-unicons'
import { UilCog } from '@iconscout/react-unicons'
import { UilEllipsisH } from '@iconscout/react-unicons'
import { UilUsdCircle } from '@iconscout/react-unicons'
import Link from 'next/link'

function Menu() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    {!isOpen ?
        (
            <UilBars size='1.5rem' className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}/>) :
        (
            <UilMultiply size='1.5rem' className='cursor-pointer z-20 ' onClick={() => setIsOpen(!isOpen)}/>  
        )
    } 
        <div className={`top-0 left-0 fixed bg-stone-400 lg:w-[35vw] w-[80vw] h-full p-10 z-10 ${isOpen ? 'translate-x-0': '-translate-x-full'} ease-in-out duration-300`}>
            <div className='ml-8 lg:ml-1 mt-16 lg:mt-28'>
                <a href='/profile'>
                    <div className='flex justify-start items-center gap-4 pl-5 hover:bg-stone-500 p-2 rounded-md cursor-pointer hover:shadow-lg m-auto lg:w-[15vw] my-7'>
                        <UilWindowGrid />
                        Dashboard
                    </div>
                </a>
                <a href='/write'>
                    <div className='flex justify-start items-center gap-4 pl-5 hover:bg-stone-500 p-2 rounded-md cursor-pointer hover:shadow-lg m-auto lg:w-[15vw] my-7'>
                        <UilEdit />
                        Write
                    </div>
                </a>
                <a href='/community'>
                    <div className='flex justify-start items-center gap-4 pl-5 hover:bg-stone-500 p-2 rounded-md cursor-pointer hover:shadow-lg m-auto lg:w-[15vw] my-7'>
                        <UilBrowser />
                        Community
                    </div>
                </a>
                <a href='/settings'>
                    <div className='flex justify-start items-center gap-4 pl-5 hover:bg-stone-500 p-2 rounded-md cursor-pointer hover:shadow-lg m-auto lg:w-[15vw] mt-20 my-7'>
                        <UilCog />
                        Settings
                    </div>
                </a>
                <a href='/'>
                    <div className='flex justify-start items-center gap-4 pl-5 hover:bg-stone-500 p-2 rounded-md cursor-pointer hover:shadow-lg m-auto lg:w-[15vw] my-7'>
                        <UilEllipsisH />
                        More
                    </div>
                </a>
                <a href='/'>
                    <div className='flex justify-start items-center gap-4 pl-5 hover:bg-stone-500 p-2 rounded-md cursor-pointer hover:shadow-lg m-auto lg:w-[15vw] mt-20 my-7'>
                        <UilUsdCircle />
                        Donate
                    </div>
                </a>
            </div>
        </div>
    </>
  )
}

export default Menu;