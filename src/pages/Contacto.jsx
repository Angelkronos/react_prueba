import { useState } from 'react';
import './Contacto.css';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    setEnviado(true);
    
    // Resetear formulario después de 3 segundos
    setTimeout(() => {
      setFormData({ nombre: '', correo: '', mensaje: '' });
      setEnviado(false);
    }, 3000);
  };

  return (
    <div className="contacto-page">
      <div className="contacto-container">
        <div className="contacto-header">
          <h1 className="contacto-title">
            <span className="neon-text">CONTÁCTANOS</span>
          </h1>
          <p className="contacto-subtitle">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte
          </p>
        </div>

        <div className="contacto-content">
          {/* Formulario */}
          <div className="contacto-form-wrapper">
            {enviado ? (
              <div className="mensaje-exito">
                <div className="exito-icon">✓</div>
                <h2>¡Mensaje Enviado!</h2>
                <p>Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form className="contacto-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="correo">Correo Electrónico</label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <span>ENVIAR MENSAJE</span>
                  <span className="btn-icon">→</span>
                </button>
              </form>
            )}
          </div>

          {/* Opciones de contacto interactivas */}
          <div className="contacto-info">
            <a 
              href="https://wa.me/56912345678?text=Hola%2C%20necesito%20ayuda%20con..." 
              target="_blank" 
              rel="noopener noreferrer"
              className="info-card contact-card"
              aria-label="Contactar por WhatsApp - Chat en vivo disponible 24/7"
            >
              <div className="info-icon">💬</div>
              <h3>Chat en Vivo</h3>
              <p>WhatsApp</p>
              <span className="status success">DISPONIBLE 24/7</span>
            </a>

            <a 
              href="mailto:soporte@levelupgamer.com?subject=Consulta%20desde%20la%20web&body=Hola%2C%0A%0A" 
              className="info-card contact-card"
              aria-label="Enviar correo electrónico al equipo de soporte"
            >
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>soporte@levelupgamer.com</p>
              <span className="status success">RESPUESTA EN 24H</span>
            </a>

            <a 
              href="tel:+18001234567" 
              className="info-card contact-card"
              aria-label="Llamar al servicio de atención al cliente"
            >
              <div className="info-icon">�</div>
              <h3>Teléfono</h3>
              <p>+1 (800) 123-4567</p>
              <span className="status warning">LUN-VIE 9AM-6PM</span>
            </a>

            <a 
              href="https://discord.gg/levelupgamer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="info-card contact-card"
              aria-label="Unirse a nuestra comunidad oficial de Discord"
            >
              <div className="info-icon">🎮</div>
              <h3>Discord</h3>
              <p>Comunidad oficial</p>
              <span className="status success">SIEMPRE ACTIVO</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
