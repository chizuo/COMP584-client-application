import React from 'react'
import './HeroStyles.css'
import {Link} from 'react-router-dom'
{/*
This component is basically a simple yet modern landing page.
A button option will allow the user to reroute to the Bikes
Page.
*/}
const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="content">
                    <h1>Explore Your </h1>
                    <h1 className='blue'>Bikes</h1>
                    <h1>Endlessly</h1>
                    <div> 
                        <a href="/bikes">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Check out some bikes
                            </a>     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
