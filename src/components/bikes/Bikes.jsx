import React from 'react'
import './BikesStyles.css'
import {Link} from 'react-router-dom'

/*
This component includes the internal page for Bikes. This page will disply a section that includes Currently Trending
bikes and another section that includes Recently posted bikes. Users will have the ability to also click on the 
'search' button that will reroute to another internal page that includes the search field.
*/
const Bikes = () => {
    return (
        <div className='bikes'>     
            <div className="content">
                <h2>Browse and find <span> Bikes </span></h2>
                <div className="section">

                    {/*Trending Bikes Collumn */}
                    <div className="trending-bikes">
                        <h3>Trending Bikes</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at veritatis quisquam voluptatem nostrum reprehenderit, tempore sint placeat, aperiam alias, facilis voluptate quod itaque deleniti molestiae non odit esse necessitatibus.</p>
                    </div>

                    {/*Recently Added Collumn */}
                    <div className="recently-added">
                        <h3>Recently Added</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at veritatis quisquam voluptatem nostrum reprehenderit, tempore sint placeat, aperiam alias, facilis voluptate quod itaque deleniti molestiae non odit esse necessitatibus.</p>
                    </div>
                </div>

                {/*Search button that will reference and reroute to the Search page */}
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
