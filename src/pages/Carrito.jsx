import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CartItem } from '../components/cart';
import { CheckoutForm } from '../components/products';
import { Link } from 'react-router-dom';
import './Carrito.css';

const Carrito = () => {
  const { cart, wishlist, getCartTotal, getCartItemsCount, clearCart, moveToCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckoutComplete = (details) => {
    setOrderDetails(details);
    setOrderComplete(true);
    setShowCheckout(false);
  };

  if (orderComplete && orderDetails) {
    return (
      <div className="carrito-page">
        <div className="order-success">
          <div className="success-icon">🎉</div>
          <h1>¡Compra Exitosa!</h1>
          <p>Tu pedido ha sido procesado correctamente</p>
          
          <div className="order-summary-box">
            <h3>Resumen del Pedido</h3>
            <div className="order-info">
              <p><strong>Número de orden:</strong> #{Date.now()}</p>
              <p><strong>Total pagado:</strong> {formatPrice(orderDetails.total)}</p>
              <p><strong>Método de pago:</strong> {orderDetails.paymentMethod}</p>
              <p><strong>Dirección de envío:</strong> {orderDetails.address}, {orderDetails.city}</p>
            </div>
          </div>

          <div className="success-actions">
            <Link to="/productos" className="btn-continue">
              🛍️ Seguir Comprando
            </Link>
            <Link to="/perfil" className="btn-view-orders">
              📦 Ver mis pedidos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="carrito-page">
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Tu carrito está vacío</h2>
          <p>¡Agrega productos increíbles y comienza tu aventura gamer!</p>
          <Link to="/productos" className="btn-shop">
            🎮 Explorar Productos
          </Link>

          {wishlist.length > 0 && (
            <div className="wishlist-section">
              <h3>💖 Productos en tu Wishlist</h3>
              <div className="wishlist-grid">
                {wishlist.map(item => (
                  <div key={item.id} className="wishlist-item">
                    <img src={item.image} alt={item.name} />
                    <h4>{item.name}</h4>
                    <p className="wishlist-price">{formatPrice(item.price)}</p>
                    <button
                      className="btn-move-to-cart"
                      onClick={() => moveToCart(item)}
                    >
                      🛒 Mover al carrito
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="carrito-page">
      <div className="carrito-header">
        <h1>🛒 Mi Carrito</h1>
        <button className="btn-clear-cart" onClick={clearCart}>
          🗑️ Vaciar Carrito
        </button>
      </div>

      <div className="carrito-layout">
        <div className="cart-items-section">
          <div className="cart-items-header">
            <h2>Productos ({getCartItemsCount()})</h2>
          </div>
          
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="cart-summary-section">
          <div className="cart-summary">
            <h2>📋 Resumen del Pedido</h2>
            
            <div className="summary-details">
              <div className="summary-row">
                <span>Productos ({getCartItemsCount()}):</span>
                <span>{formatPrice(getCartTotal())}</span>
              </div>
              
              <div className="summary-row">
                <span>Envío:</span>
                <span>{getCartTotal() > 50000 ? 'GRATIS' : formatPrice(5000)}</span>
              </div>

              {getCartTotal() > 50000 && (
                <div className="free-shipping-badge">
                  🎉 ¡Envío gratis activado!
                </div>
              )}

              <div className="summary-total">
                <span>Total:</span>
                <span>{formatPrice(getCartTotal() + (getCartTotal() > 50000 ? 0 : 5000))}</span>
              </div>
            </div>

            {!showCheckout ? (
              <button
                className="btn-proceed-checkout"
                onClick={() => setShowCheckout(true)}
              >
                💳 Proceder al Pago
              </button>
            ) : (
              <button
                className="btn-back-cart"
                onClick={() => setShowCheckout(false)}
              >
                ← Volver al Carrito
              </button>
            )}

            <Link to="/productos" className="btn-continue-shopping">
              ← Seguir Comprando
            </Link>
          </div>

          <div className="security-badges">
            <div className="security-item">
              <span>🔒</span>
              <p>Pago Seguro</p>
            </div>
            <div className="security-item">
              <span>🚚</span>
              <p>Envío Rápido</p>
            </div>
            <div className="security-item">
              <span>↩️</span>
              <p>30 Días Devolución</p>
            </div>
          </div>
        </div>
      </div>

      {showCheckout && (
        <div className="checkout-section">
          <CheckoutForm
            total={getCartTotal()}
            onComplete={handleCheckoutComplete}
          />
        </div>
      )}

      {wishlist.length > 0 && !showCheckout && (
        <div className="wishlist-recommendations">
          <h3>💖 También te podría gustar</h3>
          <div className="wishlist-grid">
            {wishlist.slice(0, 4).map(item => (
              <div key={item.id} className="wishlist-item">
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <p className="wishlist-price">{formatPrice(item.price)}</p>
                <button
                  className="btn-move-to-cart"
                  onClick={() => moveToCart(item)}
                >
                  🛒 Agregar al carrito
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
