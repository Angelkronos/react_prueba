import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import './VistaRapidaProducto.css';

const VistaRapidaProducto = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="vista-rapida-overlay" onClick={handleBackdropClick}>
      <div className="vista-rapida-modal">
        <button className="btn-close-modal" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>

        <div className="modal-content">
          <div className="modal-image-section">
            <img src={product.image} alt={product.name} className="modal-product-image" />
            {product.discount > 0 && (
              <div className="modal-badge">-{product.discount}%</div>
            )}
          </div>

          <div className="modal-info-section">
            <span className="modal-category">{product.category}</span>
            <h2 className="modal-product-name">{product.name}</h2>

            <div className="modal-rating">
              <div className="stars">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={index < Math.floor(product.rating) ? 'star filled' : 'star'}>
                    ★
                  </span>
                ))}
              </div>
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
                    >
                      −
                    </button>
                    <input 
                      type="number" 
                      id="quantity"
                      value={quantity} 
                      readOnly
                      className="quantity-input"
                    />
                    <button 
                      className="btn-quantity" 
                      onClick={incrementQuantity}
                      disabled={quantity >= product.stock}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button 
                  className="btn-add-to-cart-modal" 
                  onClick={handleAddToCart}
                >
                  🛒 Agregar al carrito
                </button>
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
