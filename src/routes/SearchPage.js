import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Search from '../components/search/Search'
import Footer from '../components/footer/Footer'
import BikeData from '../constants/bikedata'

const SearchPage = () => {
    return (
        <>
           <Navbar /> 
            <Search placeholder="Enter a bike" data={BikeData} />
           <Footer />
        </>
    )
}

export default SearchPage