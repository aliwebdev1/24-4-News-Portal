import { faFacebook, faLinkedin, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

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
        path: "/categories"
    },
    {
        route: "About",
        path: "/About"
    },
    {
        route: "Contact",
        path: "/contact"
    },

]


const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-black text-primary-content">
            <aside>
                <div className='flex'>
                    <FontAwesomeIcon className='me-5 w-5 h-5 text-white' icon={faFacebook} />
                    <FontAwesomeIcon className='me-5 w-5 h-5 text-white' icon={faYoutube} />
                    <FontAwesomeIcon className='me-5 w-5 h-5 text-white' icon={faLinkedin} />
                    <FontAwesomeIcon className='me-5 w-5 h-5 text-white' icon={faWhatsapp} />
                    <FontAwesomeIcon className='me-5 w-5 h-5 text-white' icon={faTwitter} />
                </div>

                <div className='flex'>
                    {navItems.map((item) =>
                        <li className='list-none'
                            key={item.route}>
                            <button className='text-white m-2 font-semibold uppercase' href={item.path}>{item.route}</button>
                        </li>
                    )}
                </div>


                <p className='text-neutral-400'>@2024 The News Portal. Design by Developer Shoriful Islaml</p>
            </aside>

        </footer>
    );
};

export default Footer;