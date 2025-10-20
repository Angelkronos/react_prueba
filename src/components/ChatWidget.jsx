import { useState } from 'react';
import './ChatWidget.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const whatsappNumber = '+56912345678'; // Reemplazar con número real
  const predefinedMessages = [
    '¡Hola! Quiero información sobre productos',
    '¿Cuál es el estado de mi pedido?',
    '¿Tienen stock de este producto?',
    'Necesito ayuda con una compra',
  ];

  const sendWhatsAppMessage = (text) => {
    const encodedMessage = encodeURIComponent(text);
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
    window.open(url, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  const handleSendCustomMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendWhatsAppMessage(message);
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <button 
        className={`chat-widget-button ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat de WhatsApp"
      >
        <span className="chat-icon">💬</span>
        <span className="chat-badge">WhatsApp</span>
      </button>

      {/* Panel del chat */}
      {isOpen && (
        <div className="chat-widget-panel">
          <div className="chat-header">
            <div className="chat-header-info">
              <span className="chat-title">💬 Chat de WhatsApp</span>
              <span className="chat-status">
                <span className="status-dot"></span>
                En línea
              </span>
            </div>
            <button 
              className="btn-close-chat"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="chat-body">
            <div className="chat-welcome">
              <div className="welcome-avatar">🎮</div>
              <h3>¡Hola, Gamer!</h3>
              <p>¿En qué podemos ayudarte hoy?</p>
            </div>

            <div className="quick-messages">
              <p className="quick-messages-label">Mensajes rápidos:</p>
              {predefinedMessages.map((msg, index) => (
                <button
                  key={index}
                  className="quick-message-btn"
                  onClick={() => sendWhatsAppMessage(msg)}
                >
                  {msg}
                </button>
              ))}
            </div>

            <div className="custom-message-section">
              <p className="custom-message-label">O escribe tu mensaje:</p>
              <form onSubmit={handleSendCustomMessage} className="message-form">
                <textarea
                  className="message-input"
                  placeholder="Escribe tu mensaje aquí..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="3"
                />
                <button type="submit" className="btn-send-message">
                  📱 Enviar por WhatsApp
                </button>
              </form>
            </div>
          </div>

          <div className="chat-footer">
            <span>🔒 Tus datos están seguros</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
