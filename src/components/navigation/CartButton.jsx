import { Link } from 'react-router-dom';
import './CartButton.css';

export default function CartButton({ count = 0 }) {
  return (
    <Link to="/carrito" className="cart-btn" aria-label={`Ver carrito (${count} productos)`}>
      <span className="cart-emoji" role="img" aria-label="carrito">🛒</span>
      {count > 0 && <span className="cart-badge">{count}</span>}
    </Link>
  );
}
