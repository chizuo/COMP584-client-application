import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa' 
import {Link} from 'react-router-dom'
import './NavbarStyles.css'
import images from '../../constants/images';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                    <img src={images.logo} alt="app__logo" />
                    <h1><span>Power</span>Spoke</h1>
                </div>

                {/* Main Navbar when size is big enough */}
                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/bikes'>Bikes</Link></li>
                    <li><Link to='/forum'>Forum</Link> </li>
                    
                    
                    <Link to='/signin'>
                    <img src={images.signin} class="login-user" alt="app__logo" />
                    </Link>
                </ul>
                {/* Hamburger Menu when page gets smaller */}
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
