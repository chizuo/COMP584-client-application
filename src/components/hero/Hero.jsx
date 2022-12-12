import React from 'react'
import './HeroStyles.css'
import {Link} from 'react-router-dom'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="content">
                    <h1>Explore Your </h1>
                    <h1 className='blue'>Bikes</h1>
                    <h1>Endlessly</h1>
                    <div>
                        <Link to='/forum'>
                            <button>Learn More</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
