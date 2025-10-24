import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button, ListGroup, Badge } from 'react-bootstrap';
import './CompraExitosa.css';

function CompraExitosa() {
  const order = JSON.parse(localStorage.getItem('last-order') || '{}');

  useEffect(() => {
    // Confetti effect (opcional)
    document.body.classList.add('success-animation');
    return () => document.body.classList.remove('success-animation');
  }, []);

  return (
    <div className="compra-exitosa-page">
      <Container>
        <Card className="success-card">
          <div className="success-icon">✅</div>
          <h1 className="success-title">¡Compra Exitosa!</h1>
          <p className="success-subtitle">
            Tu pedido ha sido procesado correctamente
          </p>

          <div className="order-number">
            <span className="label">Número de Orden:</span>
            <span className="number">{order.id || 'N/A'}</span>
          </div>

          <Card className="order-details-card mt-4">
            <Card.Header>
              <h5>📦 Detalles del Pedido</h5>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {order.items?.map(item => (
                  <ListGroup.Item key={item.id} className="order-item">
                    <div className="item-info">
                      <img src={item.image} alt={item.name} className="item-img" />
                      <div>
                        <div className="item-name">{item.name}</div>
                        <div className="item-qty">Cantidad: {item.quantity}</div>
                      </div>
                    </div>
                    <div className="item-price">
                      ${(item.price * item.quantity).toLocaleString()}
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>

              <div className="totals mt-3">
                <div className="total-row">
                  <span>Subtotal:</span>
                  <span>${order.totals?.subtotal.toLocaleString()}</span>
                </div>
                <div className="total-row">
                  <span>Envío:</span>
                  <span>${order.totals?.shipping.toLocaleString()}</span>
                </div>
                <div className="total-row total-final">
                  <span>Total Pagado:</span>
                  <span>${order.totals?.total.toLocaleString()}</span>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card className="shipping-info-card mt-3">
            <Card.Header>
              <h5>🚚 Información de Envío</h5>
            </Card.Header>
            <Card.Body>
              <p><strong>Nombre:</strong> {order.customer?.name}</p>
              <p><strong>Email:</strong> {order.customer?.email}</p>
              <p><strong>Teléfono:</strong> {order.customer?.phone}</p>
              <p><strong>Dirección:</strong> {order.customer?.address}</p>
            </Card.Body>
          </Card>

          <div className="next-steps mt-4">
            <h5>📧 Próximos Pasos</h5>
            <ul>
              <li>✅ Recibirás un email de confirmación</li>
              <li>📦 Preparamos tu pedido en 24-48 horas</li>
              <li>🚚 Envío estimado: 3-5 días hábiles</li>
              <li>📱 Seguimiento disponible vía email</li>
            </ul>
          </div>

          <div className="action-buttons mt-4">
            <Link to="/productos">
              <Button variant="primary" size="lg">
                Seguir Comprando
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline-secondary" size="lg">
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default CompraExitosa;
