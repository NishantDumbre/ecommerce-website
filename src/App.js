import React from 'react'
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar'
import StorePage from './components/StorePage/StorePage'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <React.Fragment>
      <HeaderNavbar />
      <StorePage />
      <Footer />
    </React.Fragment>
  )
}

export default App