import { Link } from 'react-router-dom';
import './FeaturedProducts.css';

function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      name: 'PlayStation 5 Digital',
      price: 549990,
      originalPrice: 599990,
      discount: 8,
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&h=400&fit=crop',
      category: 'Consolas'
    },
    {
      id: 2,
      name: 'Teclado Mecánico RGB',
      price: 89990,
      originalPrice: 129990,
      discount: 31,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=400&fit=crop',
      category: 'Periféricos'
    },
    {
      id: 3,
      name: 'Monitor Gaming 27" 144Hz',
      price: 299990,
      originalPrice: 399990,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=400&fit=crop',
      category: 'Monitores'
    },
    {
      id: 4,
      name: 'Headset Gamer 7.1',
      price: 79990,
      originalPrice: 119990,
      discount: 33,
      image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&h=400&fit=crop',
      category: 'Audio'
    },
    {
      id: 5,
      name: 'Mouse Gaming RGB 16000 DPI',
      price: 49990,
      originalPrice: 79990,
      discount: 38,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&h=400&fit=crop',
      category: 'Periféricos'
    },
    {
      id: 6,
      name: 'Silla Gamer Ergonómica',
      price: 199990,
      originalPrice: 279990,
      discount: 29,
      image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&h=400&fit=crop',
      category: 'Mobiliario'
    }
  ];

  return (
    <section className="featured-products-section">
      <div className="featured-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-icon">🔥</span>
            PROMOCIONES DESTACADAS
          </h2>
          <p className="section-subtitle">
            Los mejores productos gaming con descuentos increíbles
          </p>
        </div>

        <div className="products-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card-featured">
              <div className="product-image-wrapper">
                {product.discount > 0 && (
                  <span className="discount-badge">-{product.discount}%</span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-overlay">
                  <Link to="/productos" className="quick-view-btn">
                    Ver Detalles
                  </Link>
                </div>
              </div>
              
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                
                <div className="product-pricing">
                  {product.originalPrice && (
                    <span className="original-price">
                      ${product.originalPrice.toLocaleString('es-CL')}
                    </span>
                  )}
                  <span className="current-price">
                    ${product.price.toLocaleString('es-CL')}
                  </span>
                </div>

                <Link to="/productos" className="view-more-btn">
                  Ver más <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="section-footer">
          <Link to="/productos" className="see-all-btn">
            Ver Todos los Productos
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
