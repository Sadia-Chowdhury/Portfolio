import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@assets/assets"; // Adjust the import path as necessary
import { Ovo } from "next/font/google";
import { useRef } from 'react'



const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            }
            else {
                setIsScroll(false)
            }
        })
    }, [])

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translation-y-[-80%]">
                <Image src={assets.header_bg_color} alt='' className="w-full" />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : " "}`}>
                <a onClick={closeMenu} href="#top">
                    <Image
                        src={assets.logo}
                        className="w-28 cursor-pointer mr-14"
                        alt=""
                    />
                </a>
                <ul className={`hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : " bg-white shadow-sm bg-opacity-50"} `}>
                    <li>
                        <a className="font-Ovo " onClick={closeMenu} href="#top">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo " onClick={closeMenu} href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo " onClick={closeMenu} href="#services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo " onClick={closeMenu} href="#projects">
                            My Projects
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo " onClick={closeMenu} href="#contact">
                            Contact Me
                        </a>
                    </li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button>
                        <Image src={assets.moon_icon} alt='' className='w-6' />
                    </button>
                    <a
                        onClick={closeMenu} href="#contact"
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
                    >
                        Contact <Image src={assets.arrow_icon} className="w-3" alt="" />{" "}
                    </a>
                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                {/* ......Mobile Menu...... */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={assets.close_black} className='w-5 cursor-pointer' alt="" />
                    </div>


                    <li>
                        <a className="font-Ovo " onClick={closeMenu} href="#top">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo " onClick={closeMenu} href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo " onClick={closeMenu} href="#services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo " onClick={closeMenu} href="#projects">
                            My Projects
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo " onClick={closeMenu} href="#contact">
                            Contact Me
                        </a>
                    </li>
                </ul>

            </nav>
        </>
    );
};

export default Navbar;
