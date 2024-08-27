import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CartProvider from './store/CartProvider'

import RootLayout from './components/RootLayout'
import StorePage from './components/StorePage/StorePage'
import About from './components/About/About'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/store', element: <StorePage /> },
      { path: '/about/2.1', element: <About /> },
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