import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './DescuentoDetalle.css';

function DescuentoDetalle() {
  const { tipo } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [descuentoInfo, setDescuentoInfo] = useState(null);

  useEffect(() => {
    // Validar autenticación y email DUOC
    if (!user) {
      navigate('/login', { state: { from: `/descuentos/${tipo}` } });
      return;
    }

    if (!user.email.endsWith('@duoc.cl')) {
      navigate('/ofertas');
      return;
    }

    // Configurar información del descuento según el tipo
    const descuentos = {
      accesorios: {
        id: 'accesorios',
        title: '20% OFF en Accesorios Gamer',
        icon: '🎮',
        code: 'DUOC20',
        discount: '20%',
        description: 'Descuento exclusivo para estudiantes DUOC UC en toda nuestra línea de accesorios gaming.',
        details: [
          'Válido en teclados mecánicos',
          'Válido en mouse gaming',
          'Válido en headsets',
          'Válido en mousepads',
          'Válido en controles',
          'No acumulable con otras promociones'
        ],
        validUntil: '31 de Diciembre 2025',
        image: '/assets/images/hero1.jpg',
        minAmount: null,
        category: 'accesorios',
        howToUse: [
          'Agrega los productos al carrito',
          'En el checkout, ingresa el código DUOC20',
          'El descuento se aplicará automáticamente',
          'Finaliza tu compra'
        ]
      },
      bundles: {
        id: 'bundles',
        title: 'Bundle Gamer 25% OFF',
        icon: '💻',
        code: 'DUOCBUNDLE25',
        discount: '25%',
        description: 'Combo completo para armar tu setup gamer profesional con descuento exclusivo.',
        details: [
          'Teclado mecánico RGB',
          'Mouse óptico 16,000 DPI',
          'Headset surround 7.1',
          'Ahorra 25% comprando el pack',
          'Garantía extendida incluida',
          'Envío express gratis'
        ],
        validUntil: '31 de Diciembre 2025',
        image: '/assets/images/hero2.jpg',
        minAmount: null,
        category: 'bundles',
        howToUse: [
          'Selecciona el bundle completo',
          'Agrega al carrito',
          'Aplica el código DUOCBUNDLE25',
          'Disfruta del 25% de descuento'
        ]
      },
      envio: {
        id: 'envio',
        title: 'Envío Gratis Primera Compra',
        icon: '📦',
        code: 'DUOCSHIP',
        discount: 'Envío Gratis',
        description: 'Obtén envío gratis en tu primera compra con tu correo institucional DUOC UC.',
        details: [
          'Válido solo en primera compra',
          'Requiere correo @duoc.cl verificado',
          'Aplica a todo Chile continental',
          'Compra mínima: $25.000',
          'Entrega de 2 a 5 días hábiles',
          'Seguimiento en tiempo real'
        ],
        validUntil: '31 de Diciembre 2025',
        image: '/assets/images/hero3.jpg',
        minAmount: '$25.000',
        category: 'envio',
        howToUse: [
          'Realiza tu primera compra sobre $25.000',
          'En el checkout, ingresa el código DUOCSHIP',
          'El costo de envío se eliminará',
          'Completa tu pedido'
        ]
      }
    };

    const info = descuentos[tipo];
    if (!info) {
      navigate('/ofertas');
      return;
    }

    setDescuentoInfo(info);
  }, [tipo, user, navigate]);

  const handleCopyCode = () => {
    if (descuentoInfo && navigator.clipboard) {
      navigator.clipboard.writeText(descuentoInfo.code)
        .then(() => {
          alert(`✅ Código ${descuentoInfo.code} copiado al portapapeles`);
        })
        .catch(() => {
          alert(`Código: ${descuentoInfo.code}`);
        });
    }
  };

  const handleGoToShop = () => {
    navigate(`/productos?categoria=${descuentoInfo.category}`);
  };

  if (!descuentoInfo) {
    return (
      <div className="descuento-loading">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="descuento-detalle">
      {/* Hero Section */}
      <section 
        className="descuento-hero"
        style={{
          backgroundImage: `url(${descuentoInfo.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="descuento-hero-overlay"></div>
        <div className="descuento-hero-content">
          <div className="descuento-icon">{descuentoInfo.icon}</div>
          <h1 className="descuento-title">{descuentoInfo.title}</h1>
          <p className="descuento-discount">{descuentoInfo.discount}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="descuento-container">
        {/* Código Promocional */}
        <section className="codigo-section">
          <h2 className="section-title">Tu Código Promocional</h2>
          <div className="codigo-box">
            <span className="codigo-label">Código:</span>
            <span className="codigo-value">{descuentoInfo.code}</span>
            <button 
              className="btn-copy-code"
              onClick={handleCopyCode}
              aria-label="Copiar código promocional"
            >
              📋 Copiar Código
            </button>
          </div>
          <p className="codigo-description">{descuentoInfo.description}</p>
        </section>

        {/* Detalles del Beneficio */}
        <section className="detalles-section">
          <h2 className="section-title">Detalles del Beneficio</h2>
          <ul className="detalles-list">
            {descuentoInfo.details.map((detail, index) => (
              <li key={index} className="detalle-item">
                <span className="detalle-icon">✓</span>
                {detail}
              </li>
            ))}
          </ul>
          
          <div className="info-box">
            <div className="info-item">
              <strong>Válido hasta:</strong> {descuentoInfo.validUntil}
            </div>
            {descuentoInfo.minAmount && (
              <div className="info-item">
                <strong>Compra mínima:</strong> {descuentoInfo.minAmount}
              </div>
            )}
            <div className="info-item">
              <strong>Exclusivo para:</strong> Estudiantes DUOC UC (@duoc.cl)
            </div>
          </div>
        </section>

        {/* Cómo Usar */}
        <section className="uso-section">
          <h2 className="section-title">¿Cómo usar este descuento?</h2>
          <ol className="uso-steps">
            {descuentoInfo.howToUse.map((step, index) => (
              <li key={index} className="uso-step">
                <span className="step-number">{index + 1}</span>
                <span className="step-text">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Acciones */}
        <section className="acciones-section">
          <button 
            className="btn-primary-action"
            onClick={handleGoToShop}
            aria-label="Ir a comprar ahora"
          >
            🛒 Ir a Comprar Ahora
          </button>
          <button 
            className="btn-secondary-action"
            onClick={() => navigate('/ofertas')}
            aria-label="Ver más ofertas"
          >
            Ver Más Ofertas
          </button>
        </section>

        {/* Usuario Info */}
        <section className="user-info">
          <p className="user-email">
            ✅ Sesión iniciada como: <strong>{user.email}</strong>
          </p>
        </section>
      </div>
    </div>
  );
}

export default DescuentoDetalle;
