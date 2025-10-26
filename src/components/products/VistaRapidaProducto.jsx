import { useState, useEffect, useCallback } from 'react';
import { useCart } from '../../context/CartContext';
import './VistaRapidaProducto.css';

const VistaRapidaProducto = ({ product, onClose }) => {
  const { addToCart, addToWishlist, wishlist } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [imageZoomed, setImageZoomed] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(
    wishlist.some(item => item.id === product.id)
  );

  if (!product) return null;

  // Cerrar modal con tecla ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    try {
      addToCart(product, quantity);
      setShowSuccess(true);
      
      // Mostrar feedback y cerrar después de un momento
      setTimeout(() => {
        setShowSuccess(false);
        setTimeout(() => {
          onClose();
        }, 300);
      }, 1500);
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
    } finally {
      setIsAdding(false);
    }
  };

  const handleWishlist = () => {
    addToWishlist(product);
    setIsInWishlist(true);
  };

  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: `Mira este producto: ${product.name} - ${formatPrice(product.price)}`,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copiar al clipboard
        await navigator.clipboard.writeText(`${product.name} - ${window.location.href}`);
        alert('¡Link copiado al portapapeles!');
      }
    } catch (err) {
      console.log('Error al compartir:', err);
    }
  };

  const toggleImageZoom = () => {
    setImageZoomed(!imageZoomed);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(prev => prev + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    if (value >= 1 && value <= product.stock) {
      setQuantity(value);
    }
  };

  // Calcular descuento porcentual
  const discountPercent = product.originalPrice > product.price 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="vista-rapida-overlay" onClick={handleBackdropClick}>
      <div className="vista-rapida-modal">
        <button className="btn-close-modal" onClick={onClose} aria-label="Cerrar modal">
          ✕
        </button>

        {/* Mensaje de éxito */}
        {showSuccess && (
          <div className="success-notification">
            <span className="success-icon">✓</span>
            <span className="success-text">¡Producto agregado al carrito!</span>
          </div>
        )}

        <div className="modal-content">
          <div className="modal-image-section">
            <div 
              className={`product-image-container ${imageZoomed ? 'zoomed' : ''}`}
              onClick={toggleImageZoom}
              title="Haz clic para hacer zoom"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-image-preview" 
              />
              {!imageZoomed && (
                <div className="zoom-hint">🔍 Click para zoom</div>
              )}
            </div>
            {discountPercent > 0 && (
              <div className="modal-badge">-{discountPercent}%</div>
            )}
          </div>

          <div className="modal-info-section">
            <div className="modal-header-actions">
              <span className="modal-category">{product.category}</span>
              <div className="action-buttons-top">
                <button 
                  className={`btn-wishlist-modal ${isInWishlist ? 'active' : ''}`}
                  onClick={handleWishlist}
                  title={isInWishlist ? 'En favoritos' : 'Agregar a favoritos'}
                  aria-label="Agregar a favoritos"
                >
                  {isInWishlist ? '❤️' : '🤍'}
                </button>
                <button 
                  className="btn-share-modal"
                  onClick={handleShare}
                  title="Compartir producto"
                  aria-label="Compartir producto"
                >
                  🔗
                </button>
              </div>
            </div>
            
            <h2 className="modal-product-name">{product.name}</h2>

            <div className="modal-rating">
              <div className="stars">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={index < Math.floor(product.rating) ? 'star filled' : 'star'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="rating-value">{product.rating.toFixed(1)}</span>
              <span className="review-count">({product.reviews} reseñas)</span>
            </div>

            <div className="modal-price-section">
              {product.originalPrice > product.price ? (
                <>
                  <span className="modal-original-price">{formatPrice(product.originalPrice)}</span>
                  <span className="modal-current-price offer">{formatPrice(product.price)}</span>
                  <span className="modal-savings">
                    ¡Ahorras {formatPrice(product.originalPrice - product.price)}!
                  </span>
                </>
              ) : (
                <span className="modal-current-price">{formatPrice(product.price)}</span>
              )}
            </div>

            <p className="modal-description">{product.description}</p>

            <div className="modal-stock-info">
              {product.stock > 0 ? (
                <>
                  <span className="stock-available">✓ Stock disponible</span>
                  <span className="stock-quantity">({product.stock} unidades)</span>
                </>
              ) : (
                <span className="stock-unavailable">Agotado</span>
              )}
            </div>

            {product.stock > 0 && (
              <>
                <div className="modal-quantity-selector">
                  <label htmlFor="quantity">Cantidad:</label>
                  <div className="quantity-controls">
                    <button 
                      className="btn-quantity" 
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                      aria-label="Disminuir cantidad"
                    >
                      −
                    </button>
                    <input 
                      type="number" 
                      id="quantity"
                      value={quantity} 
                      onChange={handleQuantityChange}
                      min="1"
                      max={product.stock}
                      className="quantity-input"
                      aria-label="Cantidad del producto"
                    />
                    <button 
                      className="btn-quantity" 
                      onClick={incrementQuantity}
                      disabled={quantity >= product.stock}
                      aria-label="Aumentar cantidad"
                    >
                      +
                    </button>
                  </div>
                  <span className="quantity-info">Máx: {product.stock}</span>
                </div>

                <div className="modal-actions">
                  <button 
                    className={`btn-add-to-cart-modal ${isAdding ? 'loading' : ''}`}
                    onClick={handleAddToCart}
                    disabled={isAdding || showSuccess}
                  >
                    {isAdding ? (
                      <>
                        <span className="spinner"></span>
                        Agregando...
                      </>
                    ) : showSuccess ? (
                      <>
                        ✓ Agregado
                      </>
                    ) : (
                      <>
                        🛒 Agregar al carrito
                      </>
                    )}
                  </button>
                  
                  <div className="total-price">
                    <span className="total-label">Total:</span>
                    <span className="total-amount">{formatPrice(product.price * quantity)}</span>
                  </div>
                </div>
              </>
            )}

            {product.tags && product.tags.length > 0 && (
              <div className="modal-tags">
                {product.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistaRapidaProducto;
