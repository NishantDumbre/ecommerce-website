import React from 'react'
import HeaderNavbar from './HeaderNavbar/HeaderNavbar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <React.Fragment>
            <HeaderNavbar />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}

export default RootLayout