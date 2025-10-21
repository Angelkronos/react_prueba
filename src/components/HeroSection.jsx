import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array de imágenes del carrusel
  const heroImages = [
    '/assets/images/hero1.jpg',
    '/assets/images/chica.jpg',
    '/assets/images/hero3.jpg'
  ];

  // Cambiar imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="hero-section">
      {/* Carrusel de imágenes de fondo */}
      <div className="hero-carousel">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
            role="img"
            aria-label={`Hero slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Overlay con degradado morado → negro transparente */}
      <div className="hero-overlay"></div>
      
      {/* Contenido fijo sobre el carrusel */}
      <div className="hero-container">
        <h1 className="hero-title">
          BIENVENIDO A <span className="hero-accent">LEVEL-UP GAMER</span>
        </h1>
        
        <p className="hero-subtitle">
          La mejor tienda de videojuegos y accesorios gaming. 
          Encuentra los últimos lanzamientos, ofertas exclusivas y mucho más.
        </p>
        
        <div className="hero-actions">
          <Link to="/productos" className="hero-btn primary">
            <span>Explorar Catálogo</span>
            <span className="btn-icon">🎮</span>
          </Link>
          <Link to="/productos?categoria=ofertas" className="hero-btn secondary">
            <span>Ver Ofertas</span>
            <span className="btn-icon">🔥</span>
          </Link>
        </div>
      </div>

      {/* Indicadores del carrusel */}
      <div className="hero-indicators">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
