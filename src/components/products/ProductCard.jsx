import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product, onCompare }) => {
  const { addToCart, addToWishlist, wishlist } = useCart();
  const [isInWishlist, setIsInWishlist] = useState(
    wishlist.some(item => item.id === product.id)
  );

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleWishlist = () => {
    addToWishlist(product);
    setIsInWishlist(true);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="product-card">
      {product.discount > 0 && (
        <div className="product-badge">-{product.discount}%</div>
      )}
      
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-overlay">
          <button className="btn-quick-view" onClick={handleAddToCart}>
            Vista Rápida
          </button>
        </div>
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={index < Math.floor(product.rating) ? 'star filled' : 'star'}>
                ★
              </span>
            ))}
          </div>
          <span className="review-count">({product.reviews})</span>
        </div>

        <p className="product-description">{product.description.substring(0, 80)}...</p>

        <div className="product-price-section">
          {product.originalPrice > product.price ? (
            <>
              <span className="original-price">{formatPrice(product.originalPrice)}</span>
              <span className="current-price">{formatPrice(product.price)}</span>
            </>
          ) : (
            <span className="current-price">{formatPrice(product.price)}</span>
          )}
        </div>

        <div className="product-stock">
          {product.stock > 0 ? (
            <span className="in-stock">✓ Stock disponible ({product.stock})</span>
          ) : (
            <span className="out-stock">Agotado</span>
          )}
        </div>

        <div className="product-actions">
          <button 
            className="btn-add-cart" 
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            🛒 Agregar
          </button>
          <button 
            className={`btn-wishlist ${isInWishlist ? 'active' : ''}`}
            onClick={handleWishlist}
          >
            {isInWishlist ? '❤️' : '🤍'}
          </button>
          {onCompare && (
            <button className="btn-compare" onClick={() => onCompare(product)}>
              ⚖️
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
