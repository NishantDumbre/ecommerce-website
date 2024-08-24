import React from 'react'
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar'
import StorePage from './components/StorePage/StorePage'
import Footer from './components/Footer/Footer'
import CartProvider from './store/CartProvider'

const App = () => {
  return (
    <CartProvider>
      <HeaderNavbar />
      <StorePage />
      <Footer />
    </CartProvider>
  )
}

export default App