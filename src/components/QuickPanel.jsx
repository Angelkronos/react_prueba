import { useState } from 'react';
import { Link } from 'react-router-dom';
import './QuickPanel.css';

function QuickPanel() {
  const [isOpen, setIsOpen] = useState(false);

  const quickLinks = [
    {
      id: 1,
      icon: '🎮',
      title: 'Catálogo',
      description: 'Ver todos los juegos',
      link: '/productos',
      color: 'green'
    },
    {
      id: 2,
      icon: '🔥',
      title: 'Ofertas',
      description: 'Descuentos especiales',
      link: '/productos?categoria=ofertas',
      color: 'pink'
    },
    {
      id: 3,
      icon: '⭐',
      title: 'Favoritos',
      description: 'Tus juegos guardados',
      link: '/perfil/favoritos',
      color: 'blue'
    },
    {
      id: 4,
      icon: '📦',
      title: 'Pedidos',
      description: 'Historial de compras',
      link: '/perfil/pedidos',
      color: 'purple'
    },
    {
      id: 5,
      icon: '💬',
      title: 'Soporte',
      description: 'Centro de ayuda',
      link: '/ayuda',
      color: 'yellow'
    }
  ];

  return (
    <>
      {/* Botón flotante */}
      <button 
        className={`quick-panel-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Panel de acceso rápido"
      >
        <span className="toggle-icon">{isOpen ? '✕' : '⚡'}</span>
        <span className="toggle-text">Quick Access</span>
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
          {quickLinks.map((link) => (
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

        {/* Overlay para cerrar */}
        {isOpen && (
          <div 
            className="quick-panel-overlay" 
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </>
  );
}

export default QuickPanel;
