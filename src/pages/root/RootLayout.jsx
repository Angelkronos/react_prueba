import React from 'react'
import { Outlet, Link } from 'react-router'
import { Navbar } from '../../components/navigation'
import { Footer } from '../../components/layout'
import { CartProvider } from '../../context/CartContext'

export default function RootLayout(){
  return (
    <CartProvider>
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
