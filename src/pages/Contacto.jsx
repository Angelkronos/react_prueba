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

          {/* Información de contacto */}
          <div className="contacto-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>soporte@levelupgamer.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon">💬</div>
              <h3>Discord</h3>
              <p>Level-Up Gamer Community</p>
            </div>

            <div className="info-card">
              <div className="info-icon">⏰</div>
              <h3>Horario</h3>
              <p>Lun - Vie: 9:00 - 18:00</p>
              <p>Sáb: 10:00 - 14:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
