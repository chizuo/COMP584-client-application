import './BikesStyles.css'

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
                        <p>Electric bikes are becoming increasingly popular, with many people opting for a more environmentally-friendly mode of transportation.</p>
                        <p>Mountain bikes with full suspension systems are a hot trend in the biking world, allowing for a smooth and comfortable ride on rough terrain.</p>
                        <p>Road bikes with aerodynamic frames are also gaining popularity, as they offer a fast and efficient ride for both recreational and competitive cycling.</p>
                    </div>

                    {/*Recently Added Collumn */}
                    <div className="recently-added">
                        <h3>Recently Added</h3>
                        <p>Recently, several new bikes have been added to our webpage, including mountain bikes, road bikes, and electric bikes in a variety of sizes and colors.</p>
                        <p>Many bike manufacturers are now offering a wider range of sizes and styles, including options for women and people of different heights and abilities.</p>
                        <p>There has also been an increase in the development of smart bike technology, including features such as GPS tracking, automatic shifting, and connectivity to fitness apps.</p>
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
