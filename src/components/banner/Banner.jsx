import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "MEGA OFERTAS GAMER",
      subtitle: "Hasta 50% de descuento en juegos seleccionados",
      cta: "Ver Ofertas",
      bgColor: "from-purple",
      bgImage: "/assets/images/hero1.jpg",
      link: "/productos?categoria=ofertas"
    },
    {
      id: 2,
      title: "NUEVOS LANZAMIENTOS",
      subtitle: "Los últimos títulos AAA disponibles ahora",
      cta: "Explorar",
      bgColor: "from-blue",
      bgImage: "/assets/images/hero3.jpg",
      link: "/productos?categoria=nuevos"
    },
    {
      id: 3,
      title: "ACCESORIOS PRO",
      subtitle: "Mejora tu setup con los mejores periféricos",
      cta: "Comprar Ahora",
      bgColor: "from-pink",
      bgImage: "/assets/images/chica.jpg",
      link: "/productos?categoria=accesorios"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="banner">
      <div className="banner-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`banner-slide ${index === currentSlide ? 'active' : ''} ${slide.bgColor}`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="banner-overlay"></div>
            <div className="banner-content">
              <h1 className="banner-title">{slide.title}</h1>
              <p className="banner-subtitle">{slide.subtitle}</p>
              <Link to={slide.link} className="banner-cta">
                {slide.cta}
                <span className="cta-arrow">→</span>
              </Link>
            </div>
          </div>
        ))}

        {/* Controles de navegación */}
        <button 
          className="banner-control prev" 
          onClick={prevSlide}
          aria-label="Anterior slide"
        >
          ‹
        </button>
        <button 
          className="banner-control next" 
          onClick={nextSlide}
          aria-label="Siguiente slide"
        >
          ›
        </button>

        {/* Indicadores */}
        <div className="banner-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Banner;
