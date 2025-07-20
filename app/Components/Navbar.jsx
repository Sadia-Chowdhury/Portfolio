import React from 'react'
import Image from 'next/image';
import { assets } from '@assets/assets'; // Adjust the import path as necessary


const Navbar = () => {
    return (
        <>
            <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
                <a href="#top">
                    <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt="" />
                </a>
                <ul className='hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
                    <li><a href="#top">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">My Projects</a></li>
                    <li><a href="#Contact">Contact Me</a></li>
                </ul>

                <div>
                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact <Image src={assets.arrow_icon} className='w-3 h-3' alt="" /> </a>
                </div>

            </nav>
        </>
    )
}

export default Navbar