import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import './ProductModal.css';

export default function ProductModal({ product, onClose }) {
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
    <div className="product-modal-overlay" onClick={handleBackdropClick}>
      <div className="product-modal-container">
        <button className="btn-close-modal" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>

        <div className="product-modal-content">
          {/* Sección de imagen */}
          <div className="product-modal-image-section">
            <div className="product-modal-image-container">
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-modal-image" 
              />
            </div>
            {product.discount > 0 && (
              <div className="product-modal-badge">-{product.discount}%</div>
            )}
          </div>

          {/* Sección de información */}
          <div className="product-modal-info-section">
            <span className="product-modal-category">{product.category}</span>
            <h2 className="product-modal-name">{product.name}</h2>

            <div className="product-modal-rating">
              <div className="stars">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={index < Math.floor(product.rating || 0) ? 'star filled' : 'star'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="review-count">({product.reviews || 0} reseñas)</span>
            </div>

            <div className="product-modal-price-section">
              {product.originalPrice > product.price ? (
                <>
                  <span className="price-original">{formatPrice(product.originalPrice)}</span>
                  <span className="price-current offer">{formatPrice(product.price)}</span>
                  <span className="price-savings">
                    ¡Ahorras {formatPrice(product.originalPrice - product.price)}!
                  </span>
                </>
              ) : (
                <span className="price-current">{formatPrice(product.price)}</span>
              )}
            </div>

            <p className="product-modal-description">
              {product.description || 'Excelente producto para gaming.'}
            </p>

            <div className="product-modal-stock-info">
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
                <div className="product-modal-quantity-selector">
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
          </div>
        </div>
      </div>
    </div>
  );
}
