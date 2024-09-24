import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import CartProvider from './store/CartProvider'

import RootLayout from './components/RootLayout'
import StorePage from './components/StorePage/StorePage'
import About from './components/About/About'
import ContactUs from './components/About/ContactUs'
import Home from './components/Home/Home'
import Error from './components/Error/Error'
import ProductItem from './components/Products/ProductItem'




// Used React Router 6 in the project
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {path: '/', element:<Navigate to = '/store' /> },
      { path: '/store', element: <StorePage /> },
      { path: '/about/2.1', element: <About /> },
      { path: '/about/2.2', element: <ContactUs /> },
      { path: '/home', element: <Home /> },
      { path: '/store/:productId', element: <ProductItem /> }
    ]
  }

])


// Provided the routes wrapped with the context for the cart. The cart context is created using useReducer. 
const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App