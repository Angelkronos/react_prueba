import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './QuickPanel.css';

function QuickPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const quickLinks = [
    {
      id: 1,
      icon: '🎮',
      title: 'Catálogo',
      description: 'Ver todos los juegos',
      link: '/productos',
      color: 'green',
      requiresAuth: false
    },
    {
      id: 2,
      icon: '🔥',
      title: 'Ofertas',
      description: 'Descuentos especiales',
      link: '/productos?categoria=ofertas',
      color: 'pink',
      requiresAuth: false
    },
    {
      id: 3,
      icon: '⭐',
      title: 'Favoritos',
      description: 'Tus juegos guardados',
      link: '/perfil?tab=reviews',
      color: 'blue',
      requiresAuth: true
    },
    {
      id: 4,
      icon: '📦',
      title: 'Pedidos',
      description: 'Historial de compras',
      link: '/perfil?tab=orders',
      color: 'purple',
      requiresAuth: true
    },
    {
      id: 5,
      icon: '💬',
      title: 'Soporte',
      description: 'Centro de ayuda',
      link: '/ayuda',
      color: 'yellow',
      requiresAuth: false
    }
  ];

  // Filtrar links según autenticación
  const visibleLinks = quickLinks.filter(link => 
    !link.requiresAuth || isAuthenticated
  );

  return (
    <>
      {/* Overlay para cerrar */}
      {isOpen && (
        <div 
          className="quick-panel-overlay" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Botón flotante */}
      <button 
        className={`quick-panel-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Panel de acceso rápido"
      >
        <span className="toggle-icon">{isOpen ? '✕' : '⚡'}</span>
        <span className="toggle-text">{"Quick\nAccess"}</span>
      </button>

      {/* Panel flotante */}
      <div className={`quick-panel ${isOpen ? 'open' : ''}`}>
        <div className="quick-panel-header">
          <h3 className="panel-title">
            <span className="title-icon">⚡</span>
            Acceso Rápido
          </h3>
          <p className="panel-subtitle">Navega más rápido</p>
        </div>

        <div className="quick-panel-grid">
          {visibleLinks.map((link) => (
            <Link
              key={link.id}
              to={link.link}
              className={`quick-link ${link.color}`}
              onClick={() => setIsOpen(false)}
            >
              <span className="link-icon">{link.icon}</span>
              <div className="link-content">
                <h4 className="link-title">{link.title}</h4>
                <p className="link-description">{link.description}</p>
              </div>
              <span className="link-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default QuickPanel;
