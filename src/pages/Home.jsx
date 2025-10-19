import Banner from '../components/Banner';
import QuickPanel from '../components/QuickPanel';
import Newsletter from '../components/Newsletter';
import SocialBar from '../components/SocialBar';
import FAQWidget from '../components/FAQWidget';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* LG-004: Banner Gamer Dinámico */}
      <Banner />

      {/* Hero Section */}
      <section className="hero-section">
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
      </section>

      {/* LG-013: Carrusel de Promociones - Sección de Destacados */}
      <section className="promo-carousel">
        <div className="promo-container">
          <h2 className="section-title">
            <span className="title-icon">⭐</span>
            PROMOCIONES DESTACADAS
          </h2>
          <div className="promo-grid">
            <div className="promo-card promo-large">
              <div className="promo-badge">-50%</div>
              <h3 className="promo-title">MEGA SALE GAMER</h3>
              <p className="promo-description">
                Descuentos increíbles en los mejores títulos AAA
              </p>
              <Link to="/productos?categoria=ofertas" className="promo-link">
                Ver Ofertas →
              </Link>
            </div>
            <div className="promo-card">
              <div className="promo-badge">NUEVO</div>
              <h3 className="promo-title">Últimos Lanzamientos</h3>
              <p className="promo-description">
                Los juegos más esperados del año
              </p>
              <Link to="/productos?categoria=nuevos" className="promo-link">
                Explorar →
              </Link>
            </div>
            <div className="promo-card">
              <div className="promo-badge">HOT</div>
              <h3 className="promo-title">Accesorios Pro</h3>
              <p className="promo-description">
                Mejora tu setup gaming
              </p>
              <Link to="/productos?categoria=accesorios" className="promo-link">
                Comprar →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Quick Access */}
      <section className="categories-section">
        <div className="categories-container">
          <h2 className="section-title">
            <span className="title-icon">🎯</span>
            CATEGORÍAS POPULARES
          </h2>
          <div className="categories-grid">
            <Link to="/productos?plataforma=ps5" className="category-card">
              <span className="category-icon">🎮</span>
              <h3 className="category-name">PlayStation 5</h3>
            </Link>
            <Link to="/productos?plataforma=xbox" className="category-card">
              <span className="category-icon">🟢</span>
              <h3 className="category-name">Xbox Series</h3>
            </Link>
            <Link to="/productos?plataforma=nintendo" className="category-card">
              <span className="category-icon">🔴</span>
              <h3 className="category-name">Nintendo Switch</h3>
            </Link>
            <Link to="/productos?plataforma=pc" className="category-card">
              <span className="category-icon">💻</span>
              <h3 className="category-name">PC Gaming</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* LG-018: Widget de Redes Sociales */}
      <SocialBar />

      {/* LG-019: Newsletter Gamer */}
      <Newsletter />

      {/* LG-009: FAQ / Centro de Ayuda con LG-015: Buscador Rápido */}
      <FAQWidget />

      {/* LG-014: Panel de Acceso Rápido Flotante */}
      <QuickPanel />
    </div>
  );
}

export default Home;
