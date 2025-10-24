import { useState } from 'react';
import './FAQWidget.css';

function FAQWidget() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      id: 1,
      category: '🛒 Compras',
      question: '¿Cómo puedo realizar una compra?',
      answer: 'Puedes comprar navegando por nuestro catálogo, agregando productos al carrito y siguiendo el proceso de checkout. Aceptamos tarjetas de crédito, débito y PayPal.'
    },
    {
      id: 2,
      category: '🛒 Compras',
      question: '¿Cuáles son los métodos de pago disponibles?',
      answer: 'Aceptamos tarjetas de crédito (Visa, Mastercard, American Express), débito, PayPal, transferencias bancarias y pagos en efectivo en tiendas afiliadas.'
    },
    {
      id: 3,
      category: '📦 Envíos',
      question: '¿Cuánto tarda en llegar mi pedido?',
      answer: 'Los envíos estándar tardan de 3-5 días hábiles. El envío express llega en 1-2 días hábiles. Los productos digitales están disponibles inmediatamente después de la compra.'
    },
    {
      id: 4,
      category: '📦 Envíos',
      question: '¿Hacen envíos internacionales?',
      answer: 'Sí, enviamos a más de 50 países. El tiempo de entrega internacional varía entre 7-15 días hábiles dependiendo del destino.'
    },
    {
      id: 5,
      category: '↩️ Devoluciones',
      question: '¿Cuál es la política de devoluciones?',
      answer: 'Aceptamos devoluciones dentro de los 30 días posteriores a la compra. Los productos deben estar en condiciones originales y sin usar. Los juegos digitales no son reembolsables una vez activados.'
    },
    {
      id: 6,
      category: '↩️ Devoluciones',
      question: '¿Cómo inicio un proceso de devolución?',
      answer: 'Ve a "Mis Pedidos" en tu perfil, selecciona el producto que deseas devolver y sigue las instrucciones. Recibirás una etiqueta de envío prepagada por email.'
    },
    {
      id: 7,
      category: '🎮 Cuenta',
      question: '¿Cómo creo una cuenta?',
      answer: 'Haz clic en "Registrarse" en la esquina superior derecha, completa el formulario con tu información y verifica tu email. También puedes registrarte usando tus cuentas de Google o Discord.'
    },
    {
      id: 8,
      category: '🎮 Cuenta',
      question: '¿Olvidé mi contraseña, qué hago?',
      answer: 'Haz clic en "¿Olvidaste tu contraseña?" en la página de inicio de sesión. Te enviaremos un enlace a tu email para restablecer tu contraseña.'
    },
    {
      id: 9,
      category: '💎 Recompensas',
      question: '¿Cómo funciona el programa de puntos?',
      answer: 'Ganas 1 punto por cada $1 gastado. Acumula 100 puntos para canjear $10 de descuento en tu próxima compra. Los puntos no expiran mientras tu cuenta esté activa.'
    },
    {
      id: 10,
      category: '💎 Recompensas',
      question: '¿Hay descuentos para miembros premium?',
      answer: 'Sí, los miembros premium obtienen 15% de descuento en todos los productos, acceso anticipado a ofertas, envío gratis y recompensas exclusivas.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="faq-widget">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">
            <span className="title-icon">💡</span>
            PREGUNTAS FRECUENTES
          </h2>
          <p className="faq-subtitle">
            Encuentra respuestas rápidas a las preguntas más comunes
          </p>

          {/* Buscador LG-015 */}
          <div className="faq-search">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Buscar en preguntas frecuentes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Buscar preguntas"
            />
            {searchTerm && (
              <button
                className="search-clear"
                onClick={() => setSearchTerm('')}
                aria-label="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className="faq-list">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div
                key={faq.id}
                className={`faq-item ${openIndex === index ? 'active' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="question-category">{faq.category}</span>
                  <span className="question-text">{faq.question}</span>
                  <span className="question-icon">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <span className="no-results-icon">😕</span>
              <p className="no-results-text">
                No se encontraron resultados para "{searchTerm}"
              </p>
              <button
                className="no-results-button"
                onClick={() => setSearchTerm('')}
              >
                Ver todas las preguntas
              </button>
            </div>
          )}
        </div>

        <div className="faq-footer">
          <p className="footer-text">¿No encuentras lo que buscas?</p>
          <a href="/contacto" className="footer-cta">
            Contacta con soporte
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQWidget;
