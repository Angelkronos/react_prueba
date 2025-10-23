import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PromoCarousel.css';

function PromoCarousel() {
  const promos = [
    {
      id: 1,
      title: 'NUEVOS LANZAMIENTOS',
      description: 'Los juegos más esperados del año ya disponibles',
      image: '/assets/images/hero.jpg',
      link: '/productos',
      badge: 'NUEVO'
    },
    {
      id: 2,
      title: 'MEGA OFERTAS GAMING',
      description: 'Hasta 50% de descuento en productos seleccionados',
      image: '/assets/images/hero2.jpg',
      link: '/ofertas',
      badge: '-50%'
    },
    {
      id: 3,
      title: 'SETUP GAMER COMPLETO',
      description: 'Todo lo que necesitas para dominar',
      image: '/assets/images/hero3.jpg',
      link: '/productos?categoria=accesorios',
      badge: 'HOT'
    },
    {
      id: 4,
      title: 'CONSOLAS NEXT-GEN',
      description: 'PlayStation 5, Xbox Series X y más',
      image: '/assets/images/chica.jpg',
      link: '/productos?plataforma=ps5',
      badge: 'STOCK'
    },
    {
      id: 5,
      title: 'PC GAMING EXTREMO',
      description: 'Componentes de última generación',
      image: '/assets/images/chico.jpg',
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
