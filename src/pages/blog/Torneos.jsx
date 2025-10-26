import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogArticles } from '../../data/blogData';
import './Torneos.css';

export default function Torneos() {
  const navigate = useNavigate();
  
  // Filtrar solo artículos de torneos/eventos
  const torneos = blogArticles.filter(
    article => article.category === 'Eventos' || article.title.toLowerCase().includes('torneo')
  );

  const handleInscribirse = (torneoId) => {
    // Navegar al artículo completo del torneo
    navigate(`/blog/${torneoId}`);
  };

  return (
    <div className="torneos-page">
      <div className="torneos-header">
        <h1 className="torneos-title">🏆 Torneos Disponibles</h1>
        <p className="torneos-subtitle">
          Participa en nuestros torneos exclusivos y demuestra tus habilidades
        </p>
      </div>

      <div className="torneos-grid">
        {torneos.map((torneo) => (
          <div key={torneo.id} className="torneo-card">
            <div className="torneo-image-container">
              <img 
                src={torneo.image} 
                alt={torneo.title} 
                className="torneo-image"
              />
              <span className="torneo-category">{torneo.category}</span>
            </div>
            
            <div className="torneo-content">
              <div className="torneo-date">📅 {torneo.date}</div>
              <h3 className="torneo-name">{torneo.title}</h3>
              <p className="torneo-excerpt">{torneo.excerpt}</p>
              
              <div className="torneo-actions">
                <button 
                  className="btn-inscribirse"
                  onClick={() => handleInscribirse(torneo.id)}
                >
                  📝 Ver Detalles e Inscribirse
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {torneos.length === 0 && (
        <div className="no-torneos">
          <p>🎮 No hay torneos disponibles en este momento.</p>
          <p>¡Vuelve pronto para ver las próximas competencias!</p>
        </div>
      )}
    </div>
  );
}
