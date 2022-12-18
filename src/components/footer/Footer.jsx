import React from 'react'
import { FiFacebook, FiGithub, FiLinkedin } from 'react-icons/fi'
import './FooterStyles.css'
import images from '../../constants/images';

import {Link} from 'react-router-dom'

const Footer = () => {
    return (

        //Redisplay Logo at the Bottom with Name and Icon
        <div className='footer'>
            <div className="top">
                <div className="logo-footer">
                    <img src={images.logo} alt="app__logo" />
                    <h1><span>Power</span>Spoke</h1>
                </div>
            </div>

            {/* <span class="split-line"></span> */}

            {/*This will be column one for the footer section including navigating to different pages
            similar to that of Navbar component */}
            <div className="col-container">
                {/* Social */}
                <section>
                    <a href='https://www.facebook.com/calstatenorthridge/' target="_blank" rel="noopener noreferrer"><FiFacebook className='social-icon' /> </a>
                    <a href='https://www.linkedin.com/school/california-state-university-northridge/mycompany/' target="_blank" rel="noopener noreferrer"><FiLinkedin className='social-icon' /> </a>
                    <a href='https://github.com/chizuo/COMP584-client-application' target="_blank" rel="noopener noreferrer"><FiGithub className='social-icon' /> </a>
                </section>
                <span class="split-line"></span>
                {/* Navigation */}
                <section>
                    <a href='/'><Link to='/'>Home</Link></a>
                    <a href='/'><Link to='/bikes'>Bikes</Link></a>
                    <a href='/'><Link to='/forum'>Forum</Link> </a>
                    <a href='/'><Link to='/contact'>Contact</Link></a>
                </section>

                {/* Copyrights */}
                <div class="copyright">
                    Copyright © 2022 PowerSpoke - All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer
