import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section 
      className="hero-section" 
      role="banner" 
      aria-label="Sección principal de Level-Up Gamer"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay degradado radial */}
      <div className="hero-overlay"></div>

      {/* Contenido central */}
      <div className="hero-content">
        <h1 className="hero-title">LEVEL-UP GAMER</h1>
        <p className="hero-subtitle">
          Descubre los mejores accesorios y ofertas exclusivas.
        </p>
        <div className="hero-buttons">
          <button 
            className="hero-btn hero-btn-primary"
            onClick={() => navigate('/productos')}
            aria-label="Explorar catálogo de productos"
          >
            🎮 Explorar Catálogo
          </button>
          <button 
            className="hero-btn hero-btn-secondary"
            onClick={() => navigate('/ofertas')}
            aria-label="Ver descuentos DUOC"
          >
            💥 Ver Descuentos DUOC
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#featured-products" className="scroll-down" aria-label="Desplazarse al contenido principal">
        ⬇️
      </a>
    </section>
  );
}
