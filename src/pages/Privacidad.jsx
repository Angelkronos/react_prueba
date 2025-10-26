import './Privacidad.css';

function Privacidad() {
  return (
    <div className="privacidad-page">
      <div className="privacidad-container">
        <div className="privacidad-header">
          <h1 className="privacidad-title">
            <span className="neon-text">POLÍTICA DE PRIVACIDAD</span>
          </h1>
          <p className="privacidad-subtitle">
            Tu privacidad es nuestra prioridad | Última actualización: 25 de octubre de 2025
          </p>
        </div>

        <div className="privacidad-content">
          <section className="privacidad-section">
            <h2>1. Introducción</h2>
            <p>
              En Level-Up Gamer, nos comprometemos a proteger tu privacidad y tus datos personales. 
              Esta política explica cómo recopilamos, usamos, almacenamos y protegemos tu información 
              cuando utilizas nuestra plataforma.
            </p>
          </section>

          <section className="privacidad-section">
            <h2>2. Información que Recopilamos</h2>
            <p>
              Recopilamos diferentes tipos de información para brindarte el mejor servicio:
            </p>
            <h3>Información Personal</h3>
            <ul>
              <li>Nombre completo y apellidos</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Dirección de envío y facturación</li>
              <li>Información de pago (procesada de forma segura)</li>
            </ul>
            <h3>Información de Uso</h3>
            <ul>
              <li>Historial de navegación en nuestra plataforma</li>
              <li>Productos visualizados y comprados</li>
              <li>Preferencias y configuraciones</li>
              <li>Interacciones con el servicio de atención al cliente</li>
            </ul>
          </section>

          <section className="privacidad-section">
            <h2>3. Cómo Usamos tu Información</h2>
            <p>
              Utilizamos tu información para:
            </p>
            <ul>
              <li>Procesar y gestionar tus pedidos</li>
              <li>Mejorar tu experiencia de usuario</li>
              <li>Enviar confirmaciones y actualizaciones de pedidos</li>
              <li>Proporcionar soporte al cliente</li>
              <li>Personalizar recomendaciones de productos</li>
              <li>Cumplir con obligaciones legales</li>
              <li>Prevenir fraudes y garantizar la seguridad</li>
            </ul>
          </section>

          <section className="privacidad-section">
            <h2>4. Compartir Información</h2>
            <p>
              No vendemos tu información personal. Solo compartimos datos con:
            </p>
            <ul>
              <li><strong>Proveedores de servicios:</strong> Para procesar pagos y entregas</li>
              <li><strong>Cumplimiento legal:</strong> Cuando sea requerido por ley</li>
              <li><strong>Socios comerciales:</strong> Con tu consentimiento explícito</li>
            </ul>
          </section>

          <section className="privacidad-section">
            <h2>5. Seguridad de los Datos</h2>
            <p>
              Implementamos medidas de seguridad avanzadas para proteger tu información:
            </p>
            <ul>
              <li>Encriptación SSL/TLS en todas las transacciones</li>
              <li>Servidores seguros con protección contra intrusiones</li>
              <li>Autenticación de dos factores disponible</li>
              <li>Monitoreo constante de actividades sospechosas</li>
              <li>Auditorías de seguridad regulares</li>
            </ul>
          </section>

          <section className="privacidad-section">
            <h2>6. Cookies y Tecnologías Similares</h2>
            <p>
              Utilizamos cookies y tecnologías similares para:
            </p>
            <ul>
              <li>Mantener tu sesión activa</li>
              <li>Recordar tus preferencias</li>
              <li>Analizar el uso de la plataforma</li>
              <li>Personalizar contenido y anuncios</li>
            </ul>
            <p>
              Puedes gestionar tus preferencias de cookies en la configuración de tu navegador.
            </p>
          </section>

          <section className="privacidad-section">
            <h2>7. Tus Derechos</h2>
            <p>
              Tienes derecho a:
            </p>
            <ul>
              <li><strong>Acceso:</strong> Solicitar una copia de tus datos personales</li>
              <li><strong>Rectificación:</strong> Corregir información inexacta</li>
              <li><strong>Eliminación:</strong> Solicitar la eliminación de tus datos</li>
              <li><strong>Portabilidad:</strong> Recibir tus datos en formato transferible</li>
              <li><strong>Oposición:</strong> Oponerte al procesamiento de tus datos</li>
              <li><strong>Limitación:</strong> Restringir el uso de tu información</li>
            </ul>
          </section>

          <section className="privacidad-section">
            <h2>8. Retención de Datos</h2>
            <p>
              Conservamos tu información personal solo durante el tiempo necesario para:
            </p>
            <ul>
              <li>Cumplir con los fines establecidos en esta política</li>
              <li>Cumplir con requisitos legales y fiscales</li>
              <li>Resolver disputas y hacer cumplir nuestros acuerdos</li>
            </ul>
          </section>

          <section className="privacidad-section">
            <h2>9. Privacidad de Menores</h2>
            <p>
              Nuestra plataforma no está dirigida a menores de 13 años. 
              No recopilamos intencionalmente información de menores sin el consentimiento parental.
            </p>
          </section>

          <section className="privacidad-section">
            <h2>10. Cambios en esta Política</h2>
            <p>
              Podemos actualizar esta política periódicamente. Te notificaremos sobre cambios 
              significativos a través de correo electrónico o mediante un aviso destacado en nuestra plataforma.
            </p>
          </section>

          <section className="privacidad-section">
            <h2>11. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política de privacidad o deseas ejercer tus derechos, contáctanos:
            </p>
            <ul>
              <li>Email: privacidad@levelupgamer.com</li>
              <li>Discord: Level-Up Gamer Community</li>
              <li>Horario: Lunes a Viernes, 9:00 - 18:00</li>
            </ul>
          </section>

          <div className="privacidad-footer">
            <div className="security-badge">
              <span className="badge-icon">🔒</span>
              <div className="badge-text">
                <strong>Tus datos están protegidos</strong>
                <p>Cumplimos con las regulaciones internacionales de protección de datos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacidad;
