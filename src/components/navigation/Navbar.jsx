import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartItemsCount } = useCart();
  const { user, isAuthenticated } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">LEVEL-UP</span>
          <span className="logo-accent">GAMER</span>
        </Link>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
          <li><Link to="/productos" onClick={() => setIsMenuOpen(false)}>Productos</Link></li>
          <li><Link to="/ayuda" onClick={() => setIsMenuOpen(false)}>Ayuda</Link></li>
          <li>
            {isAuthenticated ? (
              <Link to="/perfil" onClick={() => setIsMenuOpen(false)} className="user-link">
                <span className="user-avatar">{user?.avatar || '👤'}</span>
                <span className="user-name">{user?.name || 'Mi Perfil'}</span>
              </Link>
            ) : (
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="login-link">
                🔐 Iniciar Sesión
              </Link>
            )}
          </li>
          <li>
            <Link to="/carrito" className="cart-btn" onClick={() => setIsMenuOpen(false)}>
              <span className="cart-icon">🛒</span>
              {getCartItemsCount() > 0 && (
                <span className="cart-count">{getCartItemsCount()}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
