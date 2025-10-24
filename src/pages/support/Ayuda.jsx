import { FAQWidget } from '../../components/support';
import { Link } from 'react-router-dom';
import './Ayuda.css';

function Ayuda() {
  const supportCategories = [
    {
      id: 1,
      icon: '🛒',
      title: 'Compras y Pagos',
      description: 'Información sobre procesos de compra, métodos de pago y facturación',
      link: '#compras'
    },
    {
      id: 2,
      icon: '📦',
      title: 'Envíos y Entregas',
      description: 'Todo sobre tiempos de envío, rastreo y opciones de entrega',
      link: '#envios'
    },
    {
      id: 3,
      icon: '↩️',
      title: 'Devoluciones',
      description: 'Políticas de devolución, reembolsos y cambios de productos',
      link: '#devoluciones'
    },
    {
      id: 4,
      icon: '🎮',
      title: 'Cuenta y Perfil',
      description: 'Gestión de cuenta, configuración y seguridad',
      link: '#cuenta'
    },
    {
      id: 5,
      icon: '💎',
      title: 'Recompensas y Puntos',
      description: 'Programa de fidelidad, puntos y beneficios exclusivos',
      link: '#recompensas'
    },
    {
      id: 6,
      icon: '🛡️',
      title: 'Seguridad y Privacidad',
      description: 'Protección de datos y políticas de privacidad',
      link: '#seguridad'
    }
  ];

  const contactMethods = [
    {
      id: 1,
      icon: '💬',
      title: 'Chat en Vivo',
      description: 'Respuesta inmediata',
      status: 'Disponible 24/7',
      action: 'Iniciar Chat',
      available: true
    },
    {
      id: 2,
      icon: '📧',
      title: 'Email',
      description: 'soporte@levelupgamer.com',
      status: 'Respuesta en 24h',
      action: 'Enviar Email',
      available: true
    },
    {
      id: 3,
      icon: '📞',
      title: 'Teléfono',
      description: '+1 (800) 123-4567',
      status: 'Lun-Vie 9am-6pm',
      action: 'Llamar Ahora',
      available: true
    },
    {
      id: 4,
      icon: '💬',
      title: 'Discord',
      description: 'Comunidad oficial',
      status: 'Siempre activo',
      action: 'Unirse',
      available: true
    }
  ];

  return (
    <div className="ayuda-page">
      {/* Hero Header */}
      <section className="ayuda-hero">
        <div className="ayuda-hero-container">
          <h1 className="ayuda-title">
            <span className="title-icon">🆘</span>
            CENTRO DE AYUDA
          </h1>
          <p className="ayuda-subtitle">
            ¿Necesitas ayuda? Estamos aquí para ti. Encuentra respuestas rápidas 
            o contacta con nuestro equipo de soporte.
          </p>
          <Link to="/" className="back-btn">
            ← Volver al inicio
          </Link>
        </div>
      </section>

      {/* Support Categories */}
      <section className="support-categories">
        <div className="support-container">
          <h2 className="section-title">
            ¿En qué podemos ayudarte?
          </h2>
          <div className="categories-grid">
            {supportCategories.map((category) => (
              <a
                key={category.id}
                href={category.link}
                className="support-card"
              >
                <span className="support-icon">{category.icon}</span>
                <h3 className="support-title">{category.title}</h3>
                <p className="support-description">{category.description}</p>
                <span className="support-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Widget - LG-009 + LG-015 */}
      <FAQWidget />

      {/* Contact Methods */}
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="section-title">
            <span className="title-icon">📞</span>
            CONTACTA CON NOSOTROS
          </h2>
          <p className="section-subtitle">
            ¿No encontraste lo que buscabas? Nuestro equipo está listo para ayudarte
          </p>
          <div className="contact-grid">
            {contactMethods.map((method) => (
              <div
                key={method.id}
                className={`contact-card ${method.available ? 'available' : 'unavailable'}`}
              >
                <span className="contact-icon">{method.icon}</span>
                <h3 className="contact-title">{method.title}</h3>
                <p className="contact-description">{method.description}</p>
                <span className="contact-status">{method.status}</span>
                <button className="contact-btn">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="tips-section">
        <div className="tips-container">
          <h2 className="section-title">
            <span className="title-icon">💡</span>
            CONSEJOS RÁPIDOS
          </h2>
          <div className="tips-grid">
            <div className="tip-card">
              <span className="tip-icon">⚡</span>
              <h3 className="tip-title">Respuesta Rápida</h3>
              <p className="tip-text">
                Para una respuesta más rápida, incluye tu número de pedido 
                cuando contactes con soporte.
              </p>
            </div>
            <div className="tip-card">
              <span className="tip-icon">🔍</span>
              <h3 className="tip-title">Busca Primero</h3>
              <p className="tip-text">
                La mayoría de las preguntas ya tienen respuesta en nuestro 
                centro de ayuda. Usa el buscador.
              </p>
            </div>
            <div className="tip-card">
              <span className="tip-icon">📱</span>
              <h3 className="tip-title">App Móvil</h3>
              <p className="tip-text">
                Descarga nuestra app para rastrear pedidos y recibir 
                notificaciones en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ayuda;
