import { Link } from 'react-router-dom';
import './Error404.css';

function Error404() {
  return (
    <div className="error-404-page">
      <div className="error-404-container">
        <div className="error-glitch">
          <h1 className="error-code">404</h1>
          <h1 className="error-code error-code-shadow">404</h1>
        </div>
        
        <div className="error-content">
          <h2 className="error-title">
            <span className="error-icon">⚠️</span>
            PÁGINA NO ENCONTRADA
          </h2>
          <p className="error-message">
            La página que buscas no existe en nuestra dimensión gamer
          </p>
          
          <Link to="/" className="btn-back-home">
            <span className="btn-icon">🏠</span>
            Volver al Inicio
          </Link>
          
          <div className="error-suggestions">
            <p className="suggestions-title">¿Qué tal si visitas?</p>
            <div className="suggestions-links">
              <Link to="/productos">🎮 Productos</Link>
              <Link to="/ofertas">🔥 Ofertas</Link>
              <Link to="/ayuda">💬 Ayuda</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error404;
