import { useCart } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= item.stock) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const subtotal = item.price * item.quantity;

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
        {item.discount > 0 && (
          <span className="cart-item-discount">-{item.discount}%</span>
        )}
      </div>

      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-category">{item.category} • {item.brand}</p>
        
        <div className="cart-item-specs">
          {item.specs?.slice(0, 2).map((spec, idx) => (
            <span key={idx} className="spec-tag">{spec}</span>
          ))}
        </div>
      </div>

      <div className="cart-item-quantity">
        <label>Cantidad:</label>
        <div className="quantity-controls">
          <button
            className="quantity-btn"
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            −
          </button>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
            min="1"
            max={item.stock}
            className="quantity-input"
          />
          <button
            className="quantity-btn"
            onClick={() => handleQuantityChange(item.quantity + 1)}
            disabled={item.quantity >= item.stock}
          >
            +
          </button>
        </div>
        <span className="stock-info">Stock: {item.stock}</span>
      </div>

      <div className="cart-item-price">
        <div className="unit-price">
          <span className="price-label">Precio unitario:</span>
          <span className="price-value">{formatPrice(item.price)}</span>
        </div>
        <div className="subtotal-price">
          <span className="price-label">Subtotal:</span>
          <span className="price-value subtotal">{formatPrice(subtotal)}</span>
        </div>
      </div>

      <div className="cart-item-actions">
        <button
          className="btn-remove-item"
          onClick={() => removeFromCart(item.id)}
        >
          🗑️ Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
