import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección principal */}
        <div className="footer-grid">
          {/* Columna 1: Info de la tienda */}
          <div className="footer-column">
            <h3 className="footer-title">
              <span className="title-main">LEVEL-UP</span>
              <span className="title-accent">GAMER</span>
            </h3>
            <p className="footer-description">
              Tu tienda gamer de confianza. Los mejores videojuegos, accesorios 
              y equipos para llevar tu experiencia al siguiente nivel.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="footer-column">
            <h4 className="footer-heading">Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/ayuda">Centro de Ayuda</Link></li>
              <li><Link to="/perfil">Mi Perfil</Link></li>
            </ul>
          </div>

          {/* Columna 3: Soporte */}
          <div className="footer-column">
            <h4 className="footer-heading">Soporte</h4>
            <ul className="footer-links">
              <li><Link to="/ayuda">FAQ</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
              <li><Link to="/terminos">Términos y Condiciones</Link></li>
              <li><Link to="/privacidad">Política de Privacidad</Link></li>
            </ul>
          </div>

          {/* Columna 4: Redes sociales */}
          <div className="footer-column">
            <h4 className="footer-heading">Síguenos</h4>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <span className="social-icon">𝕏</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <span className="social-icon">📷</span>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <span className="social-icon">💬</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <span className="social-icon">▶️</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Level-Up Gamer. Todos los derechos reservados.
          </p>
          <p className="made-with">
            Hecho con <span className="heart">💚</span> para gamers
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
