import { Link } from 'react-router-dom';
import './CartButton.css';

export default function CartButton({ count = 0 }) {
  return (
    <Link to="/carrito" className="cart-btn" aria-label={`Ver carrito (${count} productos)`}>
      <svg 
        className="cart-icon" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M9 2L7.17 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H21C22.1 20 23 19.1 23 18V6C23 4.9 22.1 4 21 4H16.83L15 2H9ZM7 18C5.9 18 5 17.1 5 16C5 14.9 5.9 14 7 14C8.1 14 9 14.9 9 16C9 17.1 8.1 18 7 18ZM17 18C15.9 18 15 17.1 15 16C15 14.9 15.9 14 17 14C18.1 14 19 14.9 19 16C19 17.1 18.1 18 17 18Z" 
          fill="currentColor"
        />
      </svg>
      {count > 0 && <span className="cart-badge">{count}</span>}
    </Link>
  );
}
