import { createContext, useContext, useState, useEffect, useRef } from 'react';

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
  const [appliedDiscount, setAppliedDiscount] = useState(null);
  const lastNotificationRef = useRef({ message: '', timestamp: 0 });

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
    setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== product.id));
    // No llamamos a removeFromWishlist para evitar doble notificación
  };

  // Sistema de notificaciones con prevención de duplicados
  const showNotification = (message, type = 'info') => {
    const now = Date.now();
    
    // Prevenir notificaciones duplicadas en los últimos 500ms
    if (lastNotificationRef.current.message === message && 
        now - lastNotificationRef.current.timestamp < 500) {
      return;
    }
    
    lastNotificationRef.current = { message, timestamp: now };
    
    const id = now;
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

  // Aplicar descuento mejorado con códigos DUOC
  const applyDiscount = (discountCode, userEmail = null) => {
    // Códigos de descuento generales
    const discounts = {
      'LEVELUP10': { percent: 10, type: 'general', minAmount: 0, category: null },
      'GAMER20': { percent: 20, type: 'general', minAmount: 0, category: null },
      'FIRSTBUY15': { percent: 15, type: 'general', minAmount: 0, category: null },
    };

    // Códigos DUOC exclusivos
    const duocDiscounts = {
      'DUOC20ACC': { 
        percent: 20, 
        type: 'duoc', 
        minAmount: 0, 
        category: 'accesorios',
        description: '20% OFF en Accesorios'
      },
      'DUOCBUNDLE25': { 
        percent: 25, 
        type: 'duoc', 
        minAmount: 50000, 
        category: 'bundle',
        description: '25% OFF en Bundles'
      },
      'DUOCSHIP': { 
        percent: 0, 
        type: 'duoc', 
        minAmount: 0, 
        category: null,
        freeShipping: true,
        description: 'Envío Gratis DUOC'
      },
    };

    const code = discountCode.toUpperCase();
    let discountData = discounts[code] || duocDiscounts[code];

    if (!discountData) {
      showNotification('❌ Código de descuento inválido', 'error');
      return { success: false, error: 'invalid_code' };
    }

    // Validar si es código DUOC
    if (discountData.type === 'duoc') {
      if (!userEmail || !userEmail.endsWith('@duoc.cl')) {
        showNotification('⚠️ Este código es exclusivo para estudiantes DUOC UC', 'error');
        return { success: false, error: 'duoc_only' };
      }
    }

    // Validar monto mínimo
    const cartTotal = getCartTotal();
    if (discountData.minAmount > 0 && cartTotal < discountData.minAmount) {
      showNotification(
        `⚠️ Monto mínimo requerido: $${discountData.minAmount.toLocaleString('es-CL')}`,
        'error'
      );
      return { success: false, error: 'min_amount' };
    }

    // Validar categoría si aplica
    if (discountData.category) {
      const hasCategory = cart.some(item => 
        item.category?.toLowerCase() === discountData.category.toLowerCase()
      );
      if (!hasCategory) {
        showNotification(
          `⚠️ Este descuento solo aplica para productos de categoría: ${discountData.category}`,
          'error'
        );
        return { success: false, error: 'category_mismatch' };
      }
    }

    // Aplicar descuento
    setAppliedDiscount({
      code: code,
      ...discountData,
    });

    if (discountData.freeShipping) {
      showNotification('✅ Envío gratis aplicado a tu compra', 'success');
    } else {
      showNotification(
        `✅ ¡Descuento del ${discountData.percent}% aplicado!`,
        'success'
      );
    }

    return { success: true, discount: discountData };
  };

  // Validar código sin aplicarlo (para preview)
  const validateDiscountCode = (discountCode, userEmail = null) => {
    const code = discountCode.toUpperCase();
    
    const allDiscounts = {
      'LEVELUP10': { percent: 10, type: 'general', minAmount: 0, category: null },
      'GAMER20': { percent: 20, type: 'general', minAmount: 0, category: null },
      'FIRSTBUY15': { percent: 15, type: 'general', minAmount: 0, category: null },
      'DUOC20ACC': { percent: 20, type: 'duoc', minAmount: 0, category: 'accesorios' },
      'DUOCBUNDLE25': { percent: 25, type: 'duoc', minAmount: 50000, category: 'bundle' },
      'DUOCSHIP': { percent: 0, type: 'duoc', minAmount: 0, category: null, freeShipping: true },
    };

    const discountData = allDiscounts[code];

    if (!discountData) {
      return { valid: false, message: 'Código inválido' };
    }

    if (discountData.type === 'duoc' && (!userEmail || !userEmail.endsWith('@duoc.cl'))) {
      return { valid: false, message: 'Exclusivo para estudiantes DUOC UC' };
    }

    const cartTotal = getCartTotal();
    if (discountData.minAmount > 0 && cartTotal < discountData.minAmount) {
      return { 
        valid: false, 
        message: `Monto mínimo: $${discountData.minAmount.toLocaleString('es-CL')}` 
      };
    }

    if (discountData.category) {
      const hasCategory = cart.some(item => 
        item.category?.toLowerCase() === discountData.category.toLowerCase()
      );
      if (!hasCategory) {
        return { 
          valid: false, 
          message: `Solo para productos de: ${discountData.category}` 
        };
      }
    }

    return { 
      valid: true, 
      message: discountData.freeShipping 
        ? 'Envío gratis' 
        : `${discountData.percent}% de descuento`,
      data: discountData
    };
  };

  // Remover descuento aplicado
  const removeDiscount = () => {
    setAppliedDiscount(null);
    showNotification('Descuento removido', 'info');
  };

  // Calcular total con descuento
  const getCartTotalWithDiscount = () => {
    const subtotal = getCartTotal();
    
    if (!appliedDiscount) {
      return subtotal;
    }

    if (appliedDiscount.category) {
      // Aplicar descuento solo a items de la categoría
      const categoryTotal = cart
        .filter(item => item.category?.toLowerCase() === appliedDiscount.category.toLowerCase())
        .reduce((total, item) => total + (item.price * item.quantity), 0);
      
      const discount = (categoryTotal * appliedDiscount.percent) / 100;
      return subtotal - discount;
    } else {
      // Aplicar descuento al total
      const discount = (subtotal * appliedDiscount.percent) / 100;
      return subtotal - discount;
    }
  };

  const value = {
    cart,
    wishlist,
    notifications,
    appliedDiscount,
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
    validateDiscountCode,
    removeDiscount,
    getCartTotalWithDiscount,
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
