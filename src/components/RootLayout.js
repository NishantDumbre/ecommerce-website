import React from 'react'
import HeaderNavbar from './CommonLayouts/HeaderNavbar'
import Footer from './CommonLayouts/Footer'
import Banner from './CommonLayouts/Banner'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <React.Fragment>
            <HeaderNavbar />
            <Banner />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}

export default RootLayout