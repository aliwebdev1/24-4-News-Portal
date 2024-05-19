import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

const navItems = [
    {
        route: "Home",
        path: "/"
    },
    {
        route: "Pages",
        path: "/pages"
    },
    {
        route: "Categories",
        path: "/categories/news?category=all-news"
    },
    {
        route: "About",
        path: "/about"
    },
    {
        route: "Contact",
        path: "/contact"
    },

]


const Navbar = () => {
    return (
        <div className="navbar bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems.map((item) =>
                            <li className=''
                                key={item.route}>
                                <Link className='text-black font-semibold uppercase' href={item.path}><button>{item.route}</button></Link>
                            </li>
                        )}

                    </ul>

                </div>
                <Link href="/" className="btn btn-ghost text-xl">
                    <Image src={logo} alt='news portal' width={100} height={50} />

                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map((item) =>
                        <li className=''
                            key={item.route}>
                            <Link className='text-white font-semibold uppercase' href={item.path}><button>{item.route}</button></Link>
                        </li>
                    )}
                </ul>
            </div>

            <div className="navbar-end">
                <FontAwesomeIcon className='me-5 w-5 h-5 text-white' icon={faFacebook} />
                <FontAwesomeIcon className='me-5 w-5 h-5 text-white' icon={faYoutube} />
                <FontAwesomeIcon className='me-5 w-5 h-5 text-white' icon={faLinkedin} />
                <FontAwesomeIcon className='me-5 w-5 h-5 text-white' icon={faWhatsapp} />
                <FontAwesomeIcon className='me-5 w-5 h-5 text-white' icon={faTwitter} />

            </div>
        </div>
    );
};

export default Navbar;