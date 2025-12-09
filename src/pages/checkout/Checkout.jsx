import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card, ListGroup, Badge, Alert } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import { CheckoutForm } from '../../components/products';
import { processWebpayPayment } from '../../services/webpayService';
import './Checkout.css';

function Checkout() {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const [discountCode, setDiscountCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [formData, setFormData] = useState({
    // Datos personales
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    // Dirección de envío
    address: '',
    city: '',
    region: '',
    zipCode: '',
    // Método de pago
    paymentMethod: 'credit-card',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCVV: ''
  });

  const subtotal = getCartTotal();
  const shipping = subtotal > 50000 ? 0 : 5000;
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal + shipping - discountAmount;

  const handleApplyDiscount = (e) => {
    e.preventDefault();
    const discounts = {
      'LEVELUP10': 10,
      'GAMER20': 20,
      'FIRSTBUY15': 15
    };
    
    const code = discountCode.toUpperCase();
    if (discounts[code]) {
      setDiscount(discounts[code]);
    } else {
      alert('Código de descuento inválido');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setPaymentError(null);

    try {
      // Guardar información del cliente antes del pago
      const orderInfo = {
        items: cart,
        customer: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          address: `${formData.address}, ${formData.city}, ${formData.region}`
        },
        totals: {
          subtotal,
          shipping,
          discount: discountAmount,
          total
        }
      };
      localStorage.setItem('pending-order-info', JSON.stringify(orderInfo));

      // Obtener userId (puedes obtenerlo del contexto de autenticación)
      const userId = localStorage.getItem('userId') || 'guest-user';

      // Procesar pago con Webpay
      await processWebpayPayment({
        amount: total,
        userId: userId
      });

      // Nota: La redirección ocurre automáticamente en processWebpayPayment
      // El usuario será redirigido a Webpay para completar el pago

    } catch (error) {
      console.error('Error al procesar el pago:', error);
      setPaymentError(error.message || 'Error al procesar el pago. Por favor, intenta nuevamente.');
      setIsProcessing(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (cart.length === 0) {
    return (
      <Container className="checkout-empty">
        <div className="empty-state">
          <div className="empty-icon">🛒</div>
          <h2>Tu carrito está vacío</h2>
          <p>Agrega productos antes de proceder al checkout</p>
          <Button variant="primary" onClick={() => navigate('/productos')}>
            Ir a comprar
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <div className="checkout-page">
      <Container>
        <div className="checkout-header">
          <h1 className="checkout-title">
            <span className="title-icon">💳</span>
            Finalizar Compra
          </h1>
          <div className="checkout-steps">
            <div className="step active">
              <span className="step-number">1</span>
              <span className="step-label">Información</span>
            </div>
            <div className="step active">
              <span className="step-number">2</span>
              <span className="step-label">Envío</span>
            </div>
            <div className="step active">
              <span className="step-number">3</span>
              <span className="step-label">Pago</span>
            </div>
          </div>
        </div>

        <Form onSubmit={handleSubmit}>
          <Row>
            {/* Formulario de Checkout */}
            <Col lg={8}>
              <CheckoutForm 
                formData={formData} 
                handleInputChange={handleInputChange}
              />
            </Col>

            {/* Resumen del Pedido */}
            <Col lg={4}>
              <Card className="order-summary sticky-summary">
                <Card.Header className="summary-header">
                  <h5>Resumen del Pedido</h5>
                </Card.Header>
                <Card.Body>
                  {/* Productos */}
                  <ListGroup variant="flush" className="mb-3">
                    {cart.map(item => (
                      <ListGroup.Item key={item.id} className="cart-item-summary">
                        <div className="item-info">
                          <img src={item.image} alt={item.name} className="item-image" />
                          <div className="item-details">
                            <div className="item-name">{item.name}</div>
                            <div className="item-quantity">Cantidad: {item.quantity}</div>
                          </div>
                        </div>
                        <div className="item-price">
                          ${(item.price * item.quantity).toLocaleString()}
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>

                  {/* Código de descuento */}
                  <div className="discount-section mb-3">
                    <Form.Group>
                      <Form.Label className="discount-label">Código de descuento</Form.Label>
                      <div className="discount-input-group">
                        <Form.Control
                          type="text"
                          placeholder="Ej: LEVELUP10"
                          value={discountCode}
                          onChange={(e) => setDiscountCode(e.target.value)}
                          className="discount-input"
                        />
                        <Button 
                          variant="outline-primary" 
                          onClick={handleApplyDiscount}
                          disabled={!discountCode}
                        >
                          Aplicar
                        </Button>
                      </div>
                    </Form.Group>
                    {discount > 0 && (
                      <Alert variant="success" className="mt-2 discount-alert">
                        ✅ Descuento del {discount}% aplicado
                      </Alert>
                    )}
                  </div>

                  {/* Totales */}
                  <div className="totals-section">
                    <div className="total-row">
                      <span>Subtotal:</span>
                      <span>${subtotal.toLocaleString()}</span>
                    </div>
                    <div className="total-row">
                      <span>Envío:</span>
                      <span>{shipping === 0 ? 'GRATIS' : `$${shipping.toLocaleString()}`}</span>
                    </div>
                    {discount > 0 && (
                      <div className="total-row discount-row">
                        <span>Descuento ({discount}%):</span>
                        <span>-${discountAmount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="total-row total-final">
                      <span>Total:</span>
                      <span>${total.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Mensaje de error de pago */}
                  {paymentError && (
                    <Alert variant="danger" className="mt-3" onClose={() => setPaymentError(null)} dismissible>
                      ❌ {paymentError}
                    </Alert>
                  )}

                  {/* Botón de pago */}
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-100 pay-button"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Procesando pago con Webpay...
                      </>
                    ) : (
                      <>Pagar con Webpay - ${total.toLocaleString()}</>
                    )}
                  </Button>

                  <div className="security-badges mt-3">
                    <Badge bg="success">🔒 Pago Seguro</Badge>
                    <Badge bg="info">✓ Webpay</Badge>
                    <Badge bg="secondary">💳 Transbank</Badge>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Checkout;
