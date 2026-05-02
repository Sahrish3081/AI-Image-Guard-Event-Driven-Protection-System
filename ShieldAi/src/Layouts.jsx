import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './assets/components/Header.jsx'
import Footer from './assets/components/Footer.jsx'

function Layouts() {
    return (
       <>
       <Header/>
       <Outlet/>
       <Footer/>
       </> 
    )
}

export default Layouts
