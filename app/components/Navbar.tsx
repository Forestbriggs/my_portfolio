'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/Logo.png';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { BiMessage } from 'react-icons/bi';


const Nav = () => {
    const [navbarblur, setnavbarblur] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        }
        else {
            setnavbarblur(false);
        }
    }

    const showMenu = () => {
        const bar = document.getElementsByClassName("bar");
        const ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");

        ham[0].classList.toggle("showNavbar");
    }

    const hideMenu = () => {
        const bar = document.getElementsByClassName("bar");
        const ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    }

    if (typeof window !== 'undefined') {
        window.addEventListener("scroll", scrollHandler);
    }

    return (
        <nav className={navbarblur ? 'Navbar blur' : 'Navbar'}>

            <Link title='Reload' href="/" className='Logo'>
                <Image src={Logo} alt='Forest Briggs Logo' height={80} />
            </Link>

            <div className='Hamburger' onClick={showMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>

            <ul className='NavbarLinks'>
                <li onClick={hideMenu}><Link href="/"><AiOutlineHome /> Home</Link></li>
                <li onClick={hideMenu}><Link href="/About"><BsPerson /> About</Link></li>
                <li onClick={hideMenu}><Link href="/Project"><BsCodeSlash /> Project</Link></li>
                <li onClick={hideMenu}><Link href="/Contact"><BiMessage /> Contact Me</Link></li>
            </ul>

        </nav>
    )
}

export default Nav