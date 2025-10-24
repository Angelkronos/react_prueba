import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LaunchBanner.css';

function LaunchBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array de slides con configuración diferente para cada uno
  const slides = [
    {
      title: 'MEGA OFERTAS GAMER',
      subtitle: 'Descuentos increíbles hasta 50% en tus juegos favoritos',
      buttonText: 'VER OFERTAS',
      buttonIcon: '🔥',
      buttonLink: '/productos?categoria=ofertas',
      gradient: 'linear-gradient(135deg, rgba(192, 38, 211, 0.9) 0%, rgba(147, 51, 234, 0.9) 50%, rgba(107, 33, 168, 0.9) 100%)',
      backgroundImage: '/assets/images/banners/banner1.jpg'
    },
    {
      title: 'NUEVOS LANZAMIENTOS',
      subtitle: 'Los últimos títulos AAA disponibles ahora',
      buttonText: 'EXPLORAR',
      buttonIcon: '🎮',
      buttonLink: '/productos',
      gradient: 'linear-gradient(135deg, rgba(30, 60, 114, 0.9) 0%, rgba(42, 82, 152, 0.9) 50%, rgba(126, 34, 206, 0.9) 100%)',
      backgroundImage: '/assets/images/banners/banner2.jpg'
    },
    {
      title: 'EVENTOS DESTACADOS',
      subtitle: 'Torneos, lanzamientos y experiencias únicas para gamers',
      buttonText: 'DESCUBRIR',
      buttonIcon: '⚡',
      buttonLink: '/productos?categoria=nuevos',
      gradient: 'linear-gradient(135deg, rgba(57, 255, 20, 0.9) 0%, rgba(30, 144, 255, 0.9) 50%, rgba(10, 14, 39, 0.9) 100%)',
      backgroundImage: '/assets/images/banners/banner3.jpg'
    }
  ];

  // Rotación automática cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="launch-banner">
      {/* Slides del carrusel */}
      <div className="launch-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`launch-slide ${index === currentSlide ? 'active' : ''}`}
          >
            {/* Imagen de fondo */}
            <div 
              className="launch-slide-bg"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            />
            {/* Overlay degradado */}
            <div 
              className="launch-slide-overlay"
              style={{ background: slide.gradient }}
            />
            {/* Contenido */}
            <div className="launch-content">
              <h2 className="launch-title">{slide.title}</h2>
              <p className="launch-subtitle">{slide.subtitle}</p>
              <Link to={slide.buttonLink} className="launch-btn">
                <span>{slide.buttonText}</span>
                <span className="launch-icon">{slide.buttonIcon}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="launch-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`launch-indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default LaunchBanner;
