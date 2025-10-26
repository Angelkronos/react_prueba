import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PromoBanner.css';

export default function PromoBanner() {
  const navigate = useNavigate();

  return (
    <section className="promo-banner" aria-label="Banner promocional DUOC">
      <div className="promo-overlay"></div>
      <div className="promo-content">
        <h2 className="promo-title">
          🎮 Descuentos DUOC exclusivos para estudiantes
        </h2>
        <p className="promo-description">
          Aprovecha ofertas especiales con tu credencial DUOC UC. ¡Hasta 30% de descuento en productos seleccionados!
        </p>
        <button 
          className="promo-btn"
          onClick={() => navigate('/ofertas')}
          aria-label="Ver más descuentos DUOC"
        >
          Ver más
        </button>
      </div>
    </section>
  );
}
