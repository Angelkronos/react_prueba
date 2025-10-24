import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">Level-Up Gamer</h1>
        <p className="hero-sub">Potencia tu partida con hardware profesional</p>
        <div className="hero-cta">
          <a className="btn primary" href="/productos">Explorar catálogo</a>
          <a className="btn ghost" href="/productos">Ver ofertas</a>
        </div>
      </div>
    </section>
  )
}
