import React from 'react'
import { FiMail, FiFacebook, FiGithub, FiLinkedin } from 'react-icons/fi'
import './FooterStyles.css'
import images from '../../constants/images';

import {Link} from 'react-router-dom'

const Footer = () => {
    return (

        //Redisplay Logo at the Bottom with Name and Icon
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                    <img src={images.logo} alt="app__logo" />
                        <h1><span>Power</span>Spoke</h1>
                    </div>
                </div>

                {/*This will be collumn one for the footer section including navigating to different pages
                similar to that of Navbar component */}
                <div className="col-container">
                    <div className="col">
                        <h3>Navigation</h3>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/forum'>Forum</Link> </li>
                            <li><Link to='/marketplace'>Marketplace</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                    </div>

                {/*This will be collumn two for the footer section prompting users to Sign In and Login to their account */}
                    <div className="col">
                        <h3>My Account</h3>
                        <Link to='/signin'>
                         <button>Sign in</button>
                        </Link>
                    </div>

                {/*This will be collumn three that would allow users to joina  newsletter and access associated social links */}
                    <form>
                        <h3>Join Our Newsletter Today!</h3>
                        <input type="email" placeholder='Enter your email' />
                        <FiMail className='mail-icon' />
                        <div className="social-group">
                            <a href='https://www.facebook.com/calstatenorthridge/' target="_blank" rel="noopener noreferrer"><FiFacebook className='social-icon' /> </a>
                            <a href='https://www.linkedin.com/school/california-state-university-northridge/mycompany/' target="_blank" rel="noopener noreferrer"><FiLinkedin className='social-icon' /> </a>
                            <a href='https://github.com/chizuo/COMP584-client-application' target="_blank" rel="noopener noreferrer"><FiGithub className='social-icon' /> </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
