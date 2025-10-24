import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import './CheckoutForm.css';

const CheckoutForm = ({ total, onComplete }) => {
  const { applyDiscount, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    region: '',
    paymentMethod: 'credit',
  });

  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  const regions = [
    'Arica y Parinacota', 'Tarapacá', 'Antofagasta', 'Atacama', 'Coquimbo',
    'Valparaíso', 'Metropolitana', 'O\'Higgins', 'Maule', 'Ñuble',
    'Biobío', 'Araucanía', 'Los Ríos', 'Los Lagos', 'Aysén', 'Magallanes'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpiar error del campo
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleApplyDiscount = () => {
    const discount = applyDiscount(discountCode);
    setAppliedDiscount(discount);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es requerido';
    if (!formData.address.trim()) newErrors.address = 'La dirección es requerida';
    if (!formData.city.trim()) newErrors.city = 'La ciudad es requerida';
    if (!formData.region) newErrors.region = 'Selecciona una región';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setProcessing(true);
    
    // Simulación de procesamiento de pago
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Limpiar carrito y completar compra
    clearCart();
    setProcessing(false);
    
    if (onComplete) {
      onComplete({
        ...formData,
        total: finalTotal,
        discount: appliedDiscount,
      });
    }
  };

  const shippingCost = total > 50000 ? 0 : 5000;
  const discountAmount = (total * appliedDiscount) / 100;
  const finalTotal = total - discountAmount + shippingCost;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>📦 Información de Envío</h2>

      <div className="form-section">
        <div className="form-group">
          <label htmlFor="name">Nombre completo *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Teléfono *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={errors.phone ? 'error' : ''}
              placeholder="+56 9 1234 5678"
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Dirección *</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className={errors.address ? 'error' : ''}
          />
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">Ciudad *</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className={errors.city ? 'error' : ''}
            />
            {errors.city && <span className="error-message">{errors.city}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="region">Región *</label>
            <select
              id="region"
              name="region"
              value={formData.region}
              onChange={handleInputChange}
              className={errors.region ? 'error' : ''}
            >
              <option value="">Seleccionar región</option>
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
            {errors.region && <span className="error-message">{errors.region}</span>}
          </div>
        </div>
      </div>

      <h2>💳 Método de Pago</h2>
      <div className="payment-methods">
        <label className="payment-option">
          <input
            type="radio"
            name="paymentMethod"
            value="credit"
            checked={formData.paymentMethod === 'credit'}
            onChange={handleInputChange}
          />
          <span>💳 Tarjeta de Crédito/Débito</span>
        </label>

        <label className="payment-option">
          <input
            type="radio"
            name="paymentMethod"
            value="transfer"
            checked={formData.paymentMethod === 'transfer'}
            onChange={handleInputChange}
          />
          <span>🏦 Transferencia Bancaria</span>
        </label>

        <label className="payment-option">
          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={formData.paymentMethod === 'paypal'}
            onChange={handleInputChange}
          />
          <span>💰 PayPal</span>
        </label>
      </div>

      <div className="discount-section">
        <h3>🎟️ Código de Descuento</h3>
        <div className="discount-input-group">
          <input
            type="text"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            placeholder="Ingresa tu código"
          />
          <button type="button" onClick={handleApplyDiscount} className="btn-apply-discount">
            Aplicar
          </button>
        </div>
        <p className="discount-hint">💡 Códigos válidos: LEVELUP10, GAMER20, FIRSTBUY15</p>
      </div>

      <div className="order-summary">
        <h3>📋 Resumen del Pedido</h3>
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>{formatPrice(total)}</span>
        </div>
        {appliedDiscount > 0 && (
          <div className="summary-row discount">
            <span>Descuento ({appliedDiscount}%):</span>
            <span>-{formatPrice(discountAmount)}</span>
          </div>
        )}
        <div className="summary-row">
          <span>Envío:</span>
          <span>{shippingCost === 0 ? 'GRATIS' : formatPrice(shippingCost)}</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>{formatPrice(finalTotal)}</span>
        </div>
        {total > 50000 && (
          <p className="free-shipping-message">🎉 ¡Envío gratis en compras sobre $50.000!</p>
        )}
      </div>

      <button type="submit" className="btn-checkout" disabled={processing}>
        {processing ? '⏳ Procesando...' : '🛒 Finalizar Compra'}
      </button>
    </form>
  );
};

export default CheckoutForm;
