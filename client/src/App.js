import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CartProvider from './store/CartProvider'

import RootLayout from './components/RootLayout'
import StorePage from './components/StorePage/StorePage'
import About from './components/About/About'
import ContactUs from './components/About/ContactUs'
import Home from './components/Home/Home'
import Error from './components/Error/Error'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement:<Error />,
    children: [
      { path: '/store', element: <StorePage /> },
      { path: '/about/2.1', element: <About /> },
      { path: '/about/2.2', element: <ContactUs /> },
      { path: '/home', element: <Home /> },
    ]
  }

])

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App