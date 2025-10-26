import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

// Datos de los slides del carrusel
const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop',
    tag: '🎮 EXPLORA',
    title: 'LEVEL-UP GAMER',
    subtitle: 'Descubre los mejores accesorios y periféricos gaming de última generación',
    primaryBtn: { text: '🎮 Explorar Catálogo', link: '/productos' },
    secondaryBtn: null
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop',
    tag: '💥 DESCUENTOS EXCLUSIVOS',
    title: 'DESCUENTOS DUOC UC',
    subtitle: 'Estudiantes obtienen hasta 20% de descuento adicional en accesorios gaming',
    primaryBtn: { text: '🎓 Ver Beneficio', link: '/ofertas' },
    secondaryBtn: { text: '📱 Más Info', link: '/contacto' }
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=2070&auto=format&fit=crop',
    tag: '🏆 EVENTOS GAMER',
    title: 'TORNEOS Y PREMIOS',
    subtitle: 'Participa en nuestros torneos exclusivos y gana increíbles premios gaming',
    primaryBtn: { text: '🎯 Inscribirse', link: '/torneos' },
    secondaryBtn: null
  }
];

export default function HeroSection() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Cambiar slide automáticamente cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setIsTransitioning(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Función para cambiar slide manualmente
  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section 
      className="hero-section" 
      role="banner" 
      aria-label="Carrusel principal de Level-Up Gamer"
    >
      {/* Imagen de fondo con transición */}
      <div 
        className={`hero-background ${isTransitioning ? 'transitioning' : ''}`}
        style={{
          backgroundImage: `url(${currentSlideData.image})`,
        }}
      />

      {/* Overlay degradado radial */}
      <div className="hero-overlay"></div>

      {/* Contenido central */}
      <div className={`hero-content ${isTransitioning ? 'transitioning' : ''}`} key={currentSlide}>
        <span className="hero-tag">{currentSlideData.tag}</span>
        <h1 className="hero-title">{currentSlideData.title}</h1>
        <p className="hero-subtitle">{currentSlideData.subtitle}</p>
        <div className="hero-buttons">
          <button 
            className="hero-btn hero-btn-primary"
            onClick={() => navigate(currentSlideData.primaryBtn.link)}
            aria-label={currentSlideData.primaryBtn.text}
          >
            {currentSlideData.primaryBtn.text}
          </button>
          {currentSlideData.secondaryBtn && (
            <button 
              className="hero-btn hero-btn-secondary"
              onClick={() => navigate(currentSlideData.secondaryBtn.link)}
              aria-label={currentSlideData.secondaryBtn.text}
            >
              {currentSlideData.secondaryBtn.text}
            </button>
          )}
        </div>
      </div>

      {/* Indicadores de slide */}
      <div className="hero-indicators">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            className={`hero-indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
