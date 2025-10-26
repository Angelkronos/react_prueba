import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './PromoDuoc.css';

// Componente de tarjeta individual de descuento
const DescuentoCard = ({ titulo, descripcion, tipo, imagen }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleButtonClick = () => {
    // Caso 1: Usuario no logueado
    if (!user) {
      navigate('/login');
      return;
    }

    // Caso 2: Usuario logueado pero sin correo DUOC
    if (!user.email.endsWith('@duoc.cl')) {
      alert('⚠️ Este beneficio es exclusivo para estudiantes DUOC UC con correo @duoc.cl');
      return;
    }

    // Caso 3: Usuario logueado con correo DUOC válido
    navigate(`/descuentos/${tipo}`);
  };

  const getButtonText = () => {
    if (!user) {
      return '🔐 Inicia sesión para acceder';
    }
    if (user.email.endsWith('@duoc.cl')) {
      return '🎓 Ver código de descuento';
    }
    return '⚠️ Requiere correo DUOC';
  };

  const getButtonClass = () => {
    if (!user) {
      return 'descuento-btn descuento-btn-login';
    }
    if (user.email.endsWith('@duoc.cl')) {
      return 'descuento-btn descuento-btn-valid';
    }
    return 'descuento-btn descuento-btn-warning';
  };

  return (
    <article className="descuento-card">
      {/* Imagen superior */}
      <div className="descuento-image-wrapper">
        <img 
          src={imagen} 
          alt={titulo}
          className="descuento-image"
          onError={(e) => { 
            e.target.src = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop';
          }}
        />
        <div className="descuento-overlay"></div>
      </div>

      {/* Contenido */}
      <div className="descuento-content">
        <h2 className="descuento-titulo">{titulo}</h2>
        <p className="descuento-descripcion">{descripcion}</p>

        {/* Botón dinámico único */}
        <button
          onClick={handleButtonClick}
          className={getButtonClass()}
        >
          {getButtonText()}
        </button>
      </div>
    </article>
  );
};

function PromoDuoc() {
  const { user } = useAuth();

  const descuentos = [
    {
      id: 1,
      titulo: '20% OFF en Accesorios',
      descripcion: 'Descuento exclusivo en teclados, mouse, headsets y más. Válido hasta fin de mes.',
      tipo: 'accesorios',
      imagen: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      titulo: 'Bundle Gamer 25% OFF',
      descripcion: 'Teclado mecánico + Mouse RGB + Headset 7.1. Combo completo para tu setup gamer.',
      tipo: 'bundle',
      imagen: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      titulo: 'Envío Gratis',
      descripcion: 'Primera compra con correo @duoc.cl sin costo de envío. Sin monto mínimo.',
      tipo: 'envio-gratis',
      imagen: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="promo-duoc-redesign">
      {/* Encabezado */}
      <header className="promo-header-redesign">
        <h1 className="promo-title-redesign">
          🎓 Descuentos DUOC UC
        </h1>
        <p className="promo-subtitle-redesign">
          Beneficios exclusivos para estudiantes DUOC UC en Level-Up Gamer
        </p>

        {/* Indicador de estado */}
        {user ? (
          <div className={`status-badge ${user.email.endsWith('@duoc.cl') ? 'status-valid' : 'status-warning'}`}>
            <span className="status-text">
              {user.email.endsWith('@duoc.cl') ? '✅ Acceso completo' : '⚠️ Requiere correo DUOC'}
            </span>
            <span className="status-email">{user.email}</span>
          </div>
        ) : (
          <div className="status-badge status-info">
            <span className="status-text">ℹ️ Inicia sesión para acceder a los descuentos</span>
          </div>
        )}
      </header>

      {/* Grid de descuentos */}
      <section className="descuentos-grid">
        {descuentos.map((descuento) => (
          <DescuentoCard key={descuento.id} {...descuento} />
        ))}
      </section>
    </div>
  );
}

export default PromoDuoc;
