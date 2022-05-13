import React, { useState } from "react";
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (

        <div className='navbar'>
            <h1 className='logo'>Your Logo</h1>
            <div className={
                showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }>

                <ul>
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
                        <a className='call'>Call</a>
                    </li>
                </ul>
            </div>

            <div className="hamburger-menu">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    <GiHamburgerMenu />
                </a>
            </div>
        </div>

    )
}

export default Navbar