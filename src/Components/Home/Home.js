import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import './Navbar.css'
import './Home.css';
import layer1 from '../../images/rectangle-3@1x.svg'

const Home = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <div className='home'>

            {/* navbar section */}
            <nav className='navbar'>
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
            </nav>


            <div className="homePage">
                <h1>Rethink your <br /> living & renting</h1>
                <p>Make your stay painless with us</p>
            </div>
            <img alt='img' className="layer1" src={layer1} />

            <div className="info">
                <select className="cities select">
                    <option disabled selected>Cities</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                    <option value="chennai">Chennai</option>
                </select>
                <select className="dates select">
                    <option disabled selected>Dates</option>
                    <option value="mumbai">options1</option>
                    <option value="delhi">option2</option>
                    <option value="chennai">option3</option>
                </select>
                <select className="guests select">
                    <p>Add Guests</p>
                    <option disabled selected>Guests</option>
                    <option value="mumbai">1</option>
                    <option value="delhi">2</option>
                    <option value="chennai">3</option>
                </select>
                <button className="search">
                    Search
                </button>
            </div>


        </div>
    )
}

export default Home