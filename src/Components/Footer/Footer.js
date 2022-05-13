import React, { useState } from "react";
import '../Navbar/Navbar.css'
import './Footer.css'
import { GiHamburgerMenu } from "react-icons/gi";

const Footer = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (

        <div className='navbar footer'>
            <h1 className='logo'>Your Logo</h1>
            <div className={
                showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }>

                <ul className="items">
                    <li>
                        <a href="#">Explore</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#" className='cities-dropdown'>Cities</a>
                    </li>
                    <li>
                        <a className='call footer-call'>Call</a>
                    </li>
                </ul>
            </div>
            <div className="footer-desc">
                © 2021 Company Name <br />All rights reserved
            </div>
        </div>

    )
}

export default Footer