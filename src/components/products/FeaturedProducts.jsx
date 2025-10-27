import { Link } from 'react-router-dom';
import { getOffers } from '../../data/productsData';
import './FeaturedProducts.css';

function FeaturedProducts() {
  // Obtener productos en oferta del catálogo real
  const allOffers = getOffers();
  const featuredProducts = allOffers.slice(0, 5).map(product => ({
    id: product.id,
    name: product.name,
    price: product.price,
    originalPrice: Math.round(product.price / (1 - product.discount / 100)),
    discount: product.discount,
    image: product.image,
    category: product.category
  }));

  // Si no hay suficientes ofertas, completar con productos mock
  while (featuredProducts.length < 5) {
    featuredProducts.push({
      id: `mock-${featuredProducts.length}`,
      name: 'Producto Gaming',
      price: 99990,
      originalPrice: 149990,
      discount: 33,
      image: '/assets/images/hero.jpg',
      category: 'Gaming'
    });
  }

  return (
    <section className="featured-products-section" id="featured-products">
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
