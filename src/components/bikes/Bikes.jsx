import React from 'react'
import './BikesStyles.css'
import {Link} from 'react-router-dom'

const Bikes = () => {
    return (
        <div className='bikes'>     
            <div className="content">
                <h2>Browse and find <span> Bikes </span></h2>
                <div className="section">
                    <div className="trending-bikes">
                        <h3>Trending Bikes</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at veritatis quisquam voluptatem nostrum reprehenderit, tempore sint placeat, aperiam alias, facilis voluptate quod itaque deleniti molestiae non odit esse necessitatibus.</p>
                    </div>
                    <div className="recently-added">
                        <h3>Recently Added</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at veritatis quisquam voluptatem nostrum reprehenderit, tempore sint placeat, aperiam alias, facilis voluptate quod itaque deleniti molestiae non odit esse necessitatibus.</p>
                    </div>
                </div>
                <a href="/search">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Search For Bikes Here
                </a> 
            </div>        
        </div>
    )
}

export default Bikes
