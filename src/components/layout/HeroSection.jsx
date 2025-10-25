import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

// Array de slides con contenido dinámico
const slides = [
  {
    id: 1,
    image: '/assets/images/hero1.jpg',
    title: 'Mega Ofertas Gamer',
    subtitle: 'Hasta 50% de descuento en juegos seleccionados. ¡No te pierdas las mejores ofertas de la temporada!',
    link: '/productos',
    buttonText: 'Ver Ofertas',
    buttonIcon: '🔥'
  },
  {
    id: 2,
    image: '/assets/images/chica.jpg',
    title: 'Descuento Especial DUOC UC',
    subtitle: 'Estudiantes obtienen 20% adicional en accesorios gaming. Presenta tu credencial universitaria.',
    link: '/productos',
    buttonText: 'Ver Beneficio',
    buttonIcon: '🎓'
  },
  {
    id: 3,
    image: '/assets/images/hero3.jpg',
    title: 'Torneos y Eventos Gamer',
    subtitle: 'Inscríbete en nuestros torneos exclusivos y demuestra tus habilidades. ¡Premios increíbles te esperan!',
    link: '/blog',
    buttonText: 'Participar',
    buttonIcon: '🏆'
  }
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Cambiar slide automáticamente cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = slides[currentSlide];

  const handleNavigate = () => {
    navigate(currentContent.link);
  };

  return (
    <section className="hero-section">
      {/* Carrusel de imágenes de fondo con transición suave */}
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={`Hero slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Overlay con degradado */}
      <div className="hero-overlay"></div>
      
      {/* Contenido dinámico del slide actual */}
      <div className="hero-container">
        <h1 className="hero-title">
          <span className="hero-accent">{currentContent.title}</span>
        </h1>
        
        <p className="hero-subtitle">
          {currentContent.subtitle}
        </p>
        
        <div className="hero-actions">
          <button 
            onClick={handleNavigate} 
            className="hero-btn primary"
            aria-label={currentContent.buttonText}
          >
            <span>{currentContent.buttonText}</span>
            <span className="btn-icon">{currentContent.buttonIcon}</span>
          </button>
        </div>
      </div>

      {/* Indicadores del carrusel (dots) */}
      <div className="hero-indicators">
        {slides.map((_, index) => (
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
