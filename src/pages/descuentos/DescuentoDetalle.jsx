import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import './DescuentoDetalle.css';

const DescuentoDetalle = () => {
  const { tipo } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { 
    applyDiscount, 
    validateDiscountCode, 
    cart, 
    getCartTotal,
    appliedDiscount 
  } = useCart();
  
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [validationStatus, setValidationStatus] = useState(null);
  const [isValidating, setIsValidating] = useState(false);
  const [showCartIntegration, setShowCartIntegration] = useState(false);

  // Objeto con todos los descuentos disponibles
  const descuentos = {
    accesorios: {
      titulo: '🎮 20% OFF en Accesorios',
      descripcion: 'Obtén un increíble 20% de descuento en todos los accesorios gaming. Válido para teclados, mouse, audífonos, mousepads y más.',
      codigo: 'DUOC20ACC',
      imagen: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop',
      icono: '🛍️',
      categoria: 'accesorios',
      detalles: [
        'Descuento aplicable a todos los accesorios gaming',
        'Válido hasta fin de mes',
        'No acumulable con otras promociones',
        'Exclusivo para estudiantes DUOC UC'
      ]
    },
    bundle: {
      titulo: '💻 Bundle Gamer 25% OFF',
      descripcion: 'Arma tu setup completo con 25% de descuento. Incluye PC, monitor, teclado, mouse y audífonos en un solo pack.',
      codigo: 'DUOCBUNDLE25',
      imagen: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&auto=format&fit=crop',
      icono: '🎓',
      categoria: 'bundle',
      detalles: [
        'Pack completo de setup gaming',
        '25% de descuento en combo',
        'Envío gratis incluido',
        'Instalación y configuración sin costo',
        'Exclusivo estudiantes DUOC UC'
      ]
    },
    'envio-gratis': {
      titulo: '📦 Envío Gratis DUOC',
      descripcion: 'Disfruta de envío totalmente gratis en todas tus compras sin monto mínimo. Beneficio exclusivo para estudiantes DUOC UC.',
      codigo: 'DUOCSHIP',
      imagen: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&auto=format&fit=crop',
      icono: '🛍️',
      categoria: 'todos',
      detalles: [
        'Envío gratis sin monto mínimo',
        'Válido en todo Chile',
        'Entrega en 24-48 horas',
        'Tracking en tiempo real',
        'Exclusivo para estudiantes DUOC UC'
      ]
    }
  };

  // Validación de autenticación y correo DUOC al cargar el componente
  useEffect(() => {
    if (!user) {
      alert('⚠️ Debes iniciar sesión para ver los descuentos DUOC');
      navigate('/login');
      return;
    }

    if (!user.email.endsWith('@duoc.cl')) {
      alert('⚠️ Este beneficio es exclusivo para estudiantes DUOC UC con correo @duoc.cl');
      navigate('/ofertas');
      return;
    }
  }, [user, navigate]);

  // Validación en tiempo real del código
  useEffect(() => {
    if (!descuento) return;

    setIsValidating(true);
    
    // Simular validación con delay para efecto visual
    const timer = setTimeout(() => {
      const validation = validateDiscountCode(descuento.codigo, user?.email);
      setValidationStatus(validation);
      setIsValidating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [descuento, cart, user]);

  // Verificar si hay items en el carrito
  useEffect(() => {
    setShowCartIntegration(cart.length > 0);
  }, [cart]);

  // Obtener el descuento según el tipo de la URL
  const descuento = descuentos[tipo];

  // Manejar el uso del descuento (copiar código)
  const handleCopyCode = () => {
    navigator.clipboard.writeText(descuento.codigo)
      .then(() => {
        alert('📋 Código copiado al portapapeles: ' + descuento.codigo);
      })
      .catch(() => {
        alert('❌ Error al copiar el código. Por favor, cópialo manualmente.');
      });
  };

  // Aplicar descuento directamente al carrito
  const handleApplyToCart = () => {
    if (cart.length === 0) {
      alert('⚠️ Tu carrito está vacío. Agrega productos primero.');
      navigate('/productos');
      return;
    }

    const result = applyDiscount(descuento.codigo, user?.email);
    
    if (result.success) {
      setShowSuccessModal(true);
      
      // Cerrar modal y redirigir al carrito
      setTimeout(() => {
        setShowSuccessModal(false);
        navigate('/carrito');
      }, 2500);
    }
  };

  // Ir a comprar (copiar código y redirigir a productos)
  const handleGoShopping = () => {
    navigator.clipboard.writeText(descuento.codigo)
      .then(() => {
        navigate(`/productos${descuento.categoria !== 'todos' ? '?categoria=' + descuento.categoria : ''}`);
      })
      .catch(() => {
        navigate(`/productos${descuento.categoria !== 'todos' ? '?categoria=' + descuento.categoria : ''}`);
      });
  };

  // Si el descuento no existe
  if (!descuento) {
    return (
      <div className="descuento-detalle-error">
        <div className="error-content">
          <h1>❌ Descuento no encontrado</h1>
          <p>El descuento que buscas no existe o ha sido removido.</p>
          <button 
            className="btn-volver-inicio"
            onClick={() => navigate('/')}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="descuento-detalle-container">
      {/* Hero Section con imagen del descuento */}
      <div className="descuento-hero">
        <img 
          src={descuento.imagen} 
          alt={descuento.titulo}
          className="descuento-imagen"
        />
        <div className="descuento-overlay">
          <span className="descuento-icono">{descuento.icono}</span>
          <h1 className="descuento-titulo">{descuento.titulo}</h1>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="descuento-content">
        <div className="descuento-descripcion">
          <h2>📋 Descripción</h2>
          <p>{descuento.descripcion}</p>
        </div>

        {/* Código de Descuento */}
        <div className="descuento-codigo-box">
          <h3>🎟️ Código Promocional</h3>
          <div className="codigo-display">
            <code>{descuento.codigo}</code>
            <button 
              className="btn-copy-code"
              onClick={handleCopyCode}
              title="Copiar código"
            >
              📋
            </button>
          </div>
          
          {/* Validación en Tiempo Real */}
          <div className="validation-status">
            {isValidating ? (
              <div className="validation-loading">
                <span className="spinner"></span>
                Validando código...
              </div>
            ) : validationStatus ? (
              <div className={`validation-result ${validationStatus.valid ? 'valid' : 'invalid'}`}>
                <span className="validation-icon">
                  {validationStatus.valid ? '✅' : '⚠️'}
                </span>
                <span className="validation-message">
                  {validationStatus.message}
                </span>
              </div>
            ) : null}
          </div>

          {/* Información del carrito */}
          {showCartIntegration && (
            <div className="cart-info">
              <p className="cart-items">
                🛒 Tienes <strong>{cart.length}</strong> producto(s) en tu carrito
              </p>
              <p className="cart-total">
                Subtotal: <strong>${getCartTotal().toLocaleString('es-CL')}</strong>
              </p>
              {appliedDiscount && appliedDiscount.code === descuento.codigo && (
                <p className="discount-applied">
                  ✅ Descuento ya aplicado al carrito
                </p>
              )}
            </div>
          )}

          <p className="codigo-ayuda">
            {showCartIntegration 
              ? 'Aplica el código directamente a tu carrito o cópialo para usarlo después'
              : 'Copia este código y úsalo al finalizar tu compra'
            }
          </p>
        </div>

        {/* Detalles del descuento */}
        <div className="descuento-detalles">
          <h3>✨ Detalles del beneficio</h3>
          <ul>
            {descuento.detalles.map((detalle, index) => (
              <li key={index}>{detalle}</li>
            ))}
          </ul>
        </div>

        {/* Botones de acción */}
        <div className="descuento-acciones">
          {showCartIntegration && !appliedDiscount ? (
            <button 
              className="btn-usar-descuento btn-apply-cart"
              onClick={handleApplyToCart}
              disabled={!validationStatus?.valid}
            >
              <span>🛒</span>
              Aplicar al Carrito
            </button>
          ) : showCartIntegration && appliedDiscount?.code === descuento.codigo ? (
            <button 
              className="btn-usar-descuento btn-go-cart"
              onClick={() => navigate('/carrito')}
            >
              <span>✅</span>
              Ver Carrito
            </button>
          ) : (
            <button 
              className="btn-usar-descuento"
              onClick={handleGoShopping}
            >
              <span>🛍️</span>
              Ir a Comprar
            </button>
          )}
          
          <button 
            className="btn-copy-standalone"
            onClick={handleCopyCode}
          >
            <span>📋</span>
            Copiar Código
          </button>
          
          <button 
            className="btn-volver-ofertas"
            onClick={() => navigate('/ofertas')}
          >
            ← Volver a Ofertas
          </button>
        </div>
      </div>

      {/* Modal de Éxito */}
      {showSuccessModal && (
        <div className="success-modal-overlay">
          <div className="success-modal">
            <div className="success-icon">✅</div>
            <h2>¡Descuento Aplicado!</h2>
            <p>El descuento se ha aplicado correctamente a tu carrito.</p>
            <p className="success-codigo">
              Código: <strong>{descuento.codigo}</strong>
            </p>
            <div className="success-loader"></div>
            <p className="success-redirect">Redirigiendo al carrito...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DescuentoDetalle;
