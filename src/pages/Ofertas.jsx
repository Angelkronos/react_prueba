import { useState, useEffect } from 'react';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { getOffers, sortProducts } from '../data/productsData';
import ProductCard from '../components/ProductCard';
import './Ofertas.css';

function Ofertas() {
  const [offers, setOffers] = useState([]);
  const [sortBy, setSortBy] = useState('discount');

  useEffect(() => {
    const allOffers = getOffers();
    const sorted = sortProducts(allOffers, sortBy, 'desc');
    setOffers(sorted);
  }, [sortBy]);

  // Calcular ahorros totales
  const totalSavings = offers.reduce((sum, product) => {
    return sum + (product.originalPrice - product.price);
  }, 0);

  return (
    <div className="ofertas-page">
      {/* Hero con contador de ofertas */}
      <section className="ofertas-hero">
        <Container>
          <div className="hero-badge">
            <span className="badge-icon">🔥</span>
            <span className="badge-text">MEGA OFERTAS</span>
          </div>
          <h1 className="hero-title">
            ¡AHORRA EN GRANDE!
          </h1>
          <p className="hero-subtitle">
            Aprovecha nuestros mejores descuentos antes de que terminen
          </p>
          
          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-value">{offers.length}</div>
              <div className="stat-label">Productos en oferta</div>
            </div>
            <div className="stat-card highlight">
              <div className="stat-value">
                ${totalSavings.toLocaleString()}
              </div>
              <div className="stat-label">Ahorro total disponible</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">
                Hasta {Math.max(...offers.map(o => o.discount))}%
              </div>
              <div className="stat-label">Descuento máximo</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Filtros y Productos */}
      <Container className="ofertas-content">
        {/* Header de resultados */}
        <div className="results-header">
          <h2 className="results-title">
            <span className="title-icon">💥</span>
            Ofertas Destacadas
            <Badge bg="danger" className="results-count ms-2">
              {offers.length} productos
            </Badge>
          </h2>
          
          <div className="sort-controls">
            <label className="sort-label">Ordenar por:</label>
            <div className="sort-buttons">
              <Button
                variant={sortBy === 'discount' ? 'primary' : 'outline-secondary'}
                size="sm"
                onClick={() => setSortBy('discount')}
                className="sort-btn"
              >
                Mayor descuento
              </Button>
              <Button
                variant={sortBy === 'price' ? 'primary' : 'outline-secondary'}
                size="sm"
                onClick={() => setSortBy('price')}
                className="sort-btn"
              >
                Menor precio
              </Button>
              <Button
                variant={sortBy === 'name' ? 'primary' : 'outline-secondary'}
                size="sm"
                onClick={() => setSortBy('name')}
                className="sort-btn"
              >
                Nombre
              </Button>
            </div>
          </div>
        </div>

        {/* Grid de Ofertas */}
        {offers.length > 0 ? (
          <Row className="ofertas-grid">
            {offers.map(product => (
              <Col key={product.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
                <ProductCard product={product} showDiscount={true} />
              </Col>
            ))}
          </Row>
        ) : (
          <div className="no-offers">
            <div className="no-offers-icon">😕</div>
            <h3>No hay ofertas disponibles</h3>
            <p>Vuelve pronto para encontrar increíbles descuentos</p>
          </div>
        )}

        {/* Banner de información */}
        <div className="info-banner">
          <div className="info-banner-content">
            <div className="info-icon">ℹ️</div>
            <div className="info-text">
              <h4>¿Cómo funcionan nuestras ofertas?</h4>
              <ul>
                <li>✅ Descuentos reales sobre precio original</li>
                <li>✅ Stock limitado - ¡Compra rápido!</li>
                <li>✅ Nuevas ofertas cada semana</li>
                <li>✅ Envío gratis en compras sobre $50.000</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Ofertas;
