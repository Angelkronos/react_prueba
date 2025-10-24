import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CompraFallida.css';
import { Container, Card, Button, Alert } from 'react-bootstrap';
import './CompraFallida.css';

function CompraFallida() {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate('/checkout');
  };

  return (
    <div className="compra-fallida-page">
      <Container>
        <Card className="failure-card">
          <div className="failure-icon">❌</div>
          <h1 className="failure-title">Pago Rechazado</h1>
          <p className="failure-subtitle">
            No pudimos procesar tu pago. Por favor, intenta nuevamente.
          </p>

          <Alert variant="danger" className="error-details">
            <h5>Posibles causas:</h5>
            <ul>
              <li>Fondos insuficientes</li>
              <li>Datos de tarjeta incorrectos</li>
              <li>Tarjeta bloqueada o vencida</li>
              <li>Problemas de conexión</li>
            </ul>
          </Alert>

          <div className="suggestions mt-4">
            <h5>¿Qué puedes hacer?</h5>
            <div className="suggestion-cards">
              <Card className="suggestion-card">
                <Card.Body>
                  <div className="suggestion-icon">💳</div>
                  <h6>Verifica tu tarjeta</h6>
                  <p>Revisa el número, fecha de vencimiento y CVV</p>
                </Card.Body>
              </Card>
              <Card className="suggestion-card">
                <Card.Body>
                  <div className="suggestion-icon">💰</div>
                  <h6>Verifica saldo</h6>
                  <p>Asegúrate de tener fondos suficientes</p>
                </Card.Body>
              </Card>
              <Card className="suggestion-card">
                <Card.Body>
                  <div className="suggestion-icon">📞</div>
                  <h6>Contacta tu banco</h6>
                  <p>Verifica que tu tarjeta esté activa</p>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="action-buttons mt-4">
            <Button variant="primary" size="lg" onClick={handleRetry}>
              🔄 Reintentar Pago
            </Button>
            <Link to="/carrito">
              <Button variant="outline-primary" size="lg">
                📋 Ver Carrito
              </Button>
            </Link>
            <Link to="/ayuda">
              <Button variant="outline-secondary" size="lg">
                💬 Ayuda
              </Button>
            </Link>
          </div>

          <div className="contact-support mt-4">
            <p>
              ¿Necesitas ayuda? Contáctanos en{' '}
              <a href="mailto:soporte@levelupgamer.com">soporte@levelupgamer.com</a>
            </p>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default CompraFallida;
