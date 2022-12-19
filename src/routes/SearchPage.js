import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Search from '../components/search/Search'
import Footer from '../components/footer/Footer'


const SearchPage = () => {
    return (
        <>
           <Navbar /> 
            <Search placeholder="Enter a bike" />
           <Footer />
        </>
    )
}

export default SearchPage