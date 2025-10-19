import { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación simple de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
      setError('Por favor ingresa tu email');
      return;
    }
    
    if (!emailRegex.test(email)) {
      setError('Por favor ingresa un email válido');
      return;
    }

    // Simulación de suscripción exitosa
    setIsSubscribed(true);
    setError('');
    setEmail('');

    // Resetear después de 5 segundos
    setTimeout(() => {
      setIsSubscribed(false);
    }, 5000);
  };

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-icon">📬</div>
          <h2 className="newsletter-title">
            <span className="title-main">ÚNETE A LA COMUNIDAD</span>
            <span className="title-accent">GAMER</span>
          </h2>
          <p className="newsletter-description">
            Recibe ofertas exclusivas, noticias de los últimos lanzamientos 
            y contenido especial directamente en tu inbox.
          </p>

          {!isSubscribed ? (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className={`newsletter-input ${error ? 'error' : ''}`}
                  placeholder="tu-email@gamer.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  aria-label="Email"
                />
                <button type="submit" className="newsletter-button">
                  <span className="button-text">Suscribirse</span>
                  <span className="button-icon">→</span>
                </button>
              </div>
              {error && <p className="error-message">{error}</p>}
              <p className="newsletter-disclaimer">
                🔒 No spam. Cancela cuando quieras. Tus datos están seguros.
              </p>
            </form>
          ) : (
            <div className="success-message">
              <span className="success-icon">✓</span>
              <p className="success-text">
                ¡Gracias por suscribirte! Revisa tu email para confirmar.
              </p>
            </div>
          )}
        </div>

        <div className="newsletter-benefits">
          <h3 className="benefits-title">¿Por qué suscribirte?</h3>
          <ul className="benefits-list">
            <li>
              <span className="benefit-icon">🎁</span>
              <span>Ofertas exclusivas para suscriptores</span>
            </li>
            <li>
              <span className="benefit-icon">⚡</span>
              <span>Acceso anticipado a nuevos lanzamientos</span>
            </li>
            <li>
              <span className="benefit-icon">🎮</span>
              <span>Contenido y tips de gaming</span>
            </li>
            <li>
              <span className="benefit-icon">🏆</span>
              <span>Participa en sorteos y concursos</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
