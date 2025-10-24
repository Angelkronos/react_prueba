import React from 'react'
import { Outlet, Link } from 'react-router'

export default function RootLayout(){
  return (
    <div>
      <header style={{padding: '1rem', background:'#040612', color:'#9fe8ff'}}>
        <nav style={{display:'flex',gap:12,alignItems:'center'}}>
          <Link to="/" style={{color:'#39ff14', fontWeight:700, textDecoration:'none'}}>Level-Up</Link>
          <Link to="/productos" style={{color:'#9fe8ff'}}>Productos</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer style={{padding: '1rem', textAlign:'center', color:'#7fbfe6'}}>© Level-Up Gamer</footer>
    </div>
  )
}
