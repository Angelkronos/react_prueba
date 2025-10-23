import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PromoCarousel.css';

function PromoCarousel() {
  const promos = [
    {
      id: 1,
      title: 'PlayStation 5 - Stock Disponible',
      description: 'La consola más esperada ahora disponible',
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=1200&h=600&fit=crop',
      link: '/productos?plataforma=ps5',
      badge: 'NUEVO'
    },
    {
      id: 2,
      title: 'Periféricos Gaming - Hasta 40% OFF',
      description: 'Teclados, mouse y headsets profesionales',
      image: 'https://images.unsplash.com/photo-1625255592811-d28a42c239f0?w=1200&h=600&fit=crop',
      link: '/productos?categoria=accesorios',
      badge: '-40%'
    },
    {
      id: 3,
      title: 'Monitores Gaming 144Hz',
      description: 'Experiencia visual de próximo nivel',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=1200&h=600&fit=crop',
      link: '/productos?categoria=monitores',
      badge: 'HOT'
    },
    {
      id: 4,
      title: 'Nintendo Switch OLED',
      description: 'Juega en casa o en movimiento',
      image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=1200&h=600&fit=crop',
      link: '/productos?plataforma=nintendo',
      badge: 'STOCK'
    },
    {
      id: 5,
      title: 'PC Gaming - Arma tu Setup',
      description: 'Componentes de última generación',
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1200&h=600&fit=crop',
      link: '/productos?plataforma=pc',
      badge: 'BUILD'
    }
  ];

  return (
    <section className="promo-carousel-section">
      <Carousel 
        interval={3000} 
        fade 
        controls={true}
        indicators={true}
        className="custom-carousel"
      >
        {promos.map((promo) => (
          <Carousel.Item key={promo.id}>
            <div className="carousel-slide">
              <img
                className="carousel-image"
                src={promo.image}
                alt={promo.title}
              />
              <div className="carousel-overlay"></div>
              <Carousel.Caption className="carousel-content">
                <span className="carousel-badge">{promo.badge}</span>
                <h2 className="carousel-title">{promo.title}</h2>
                <p className="carousel-description">{promo.description}</p>
                <Link to={promo.link} className="carousel-btn">
                  Ver Productos <span className="btn-arrow">→</span>
                </Link>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default PromoCarousel;
