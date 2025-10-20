import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Cargar carrito desde localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('levelup-cart');
    const savedWishlist = localStorage.getItem('levelup-wishlist');
    
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Guardar carrito en localStorage
  useEffect(() => {
    localStorage.setItem('levelup-cart', JSON.stringify(cart));
  }, [cart]);

  // Guardar wishlist en localStorage
  useEffect(() => {
    localStorage.setItem('levelup-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Agregar producto al carrito
  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        showNotification(`Cantidad actualizada: ${product.name}`, 'success');
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        showNotification(`Agregado al carrito: ${product.name}`, 'success');
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // Eliminar producto del carrito
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    showNotification('Producto eliminado del carrito', 'info');
  };

  // Actualizar cantidad
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Vaciar carrito
  const clearCart = () => {
    setCart([]);
    showNotification('Carrito vaciado', 'info');
  };

  // Agregar a wishlist
  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist(prevWishlist => [...prevWishlist, product]);
      showNotification(`Agregado a favoritos: ${product.name}`, 'success');
    }
  };

  // Eliminar de wishlist
  const removeFromWishlist = (productId) => {
    setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== productId));
    showNotification('Eliminado de favoritos', 'info');
  };

  // Mover de wishlist a carrito
  const moveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  // Sistema de notificaciones
  const showNotification = (message, type = 'info') => {
    const id = Date.now();
    const notification = { id, message, type };
    
    setNotifications(prev => [...prev, notification]);
    
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  // Calcular total del carrito
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Calcular cantidad de items
  const getCartItemsCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  // Aplicar descuento
  const applyDiscount = (discountCode) => {
    // Simulación de códigos de descuento
    const discounts = {
      'LEVELUP10': 10,
      'GAMER20': 20,
      'FIRSTBUY15': 15,
    };

    const discount = discounts[discountCode.toUpperCase()];
    if (discount) {
      showNotification(`¡Descuento del ${discount}% aplicado!`, 'success');
      return discount;
    } else {
      showNotification('Código de descuento inválido', 'error');
      return 0;
    }
  };

  const value = {
    cart,
    wishlist,
    notifications,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    addToWishlist,
    removeFromWishlist,
    moveToCart,
    showNotification,
    getCartTotal,
    getCartItemsCount,
    applyDiscount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      {/* Toast de notificaciones */}
      <div className="toast-container">
        {notifications.map(notification => (
          <div key={notification.id} className={`toast toast-${notification.type}`}>
            {notification.message}
          </div>
        ))}
      </div>
    </CartContext.Provider>
  );
};

export default CartContext;
