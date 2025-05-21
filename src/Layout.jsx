import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
 import Footer from './Footer'

 

 

import './main.css'

const Layout = () => {
    return (
        <div>

            <Navbar />
            <Outlet />
              { <Footer />  } 
           


        </div>
    )
}

export default Layout
