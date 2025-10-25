import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import CartButton from './CartButton';
import LoginButton from './LoginButton';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartItemsCount } = useCart();
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
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
          <li>
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={isActive('/') ? 'active' : ''}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link 
              to="/productos" 
              onClick={() => setIsMenuOpen(false)}
              className={isActive('/productos') ? 'active' : ''}
            >
              Productos
            </Link>
          </li>
          <li>
            <Link 
              to="/ayuda" 
              onClick={() => setIsMenuOpen(false)}
              className={isActive('/ayuda') ? 'active' : ''}
            >
              Ayuda
            </Link>
          </li>
          <li>
            {isAuthenticated ? (
              <Link to="/perfil" onClick={() => setIsMenuOpen(false)} className="user-link">
                <span className="user-avatar">{user?.avatar || '👤'}</span>
                <span className="user-name">{user?.name || 'Mi Perfil'}</span>
              </Link>
            ) : (
              <LoginButton />
            )}
          </li>
          <li>
            <CartButton count={getCartItemsCount()} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
