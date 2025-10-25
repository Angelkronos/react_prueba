import './Terminos.css';

function Terminos() {
  return (
    <div className="terminos-page">
      <div className="terminos-container">
        <div className="terminos-header">
          <h1 className="terminos-title">
            <span className="neon-text">TÉRMINOS Y CONDICIONES</span>
          </h1>
          <p className="terminos-subtitle">
            Última actualización: 25 de octubre de 2025
          </p>
        </div>

        <div className="terminos-content">
          <section className="terminos-section">
            <h2>1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar Level-Up Gamer, aceptas cumplir con estos términos y condiciones. 
              Si no estás de acuerdo con alguna parte de estos términos, no deberás utilizar nuestros servicios.
            </p>
          </section>

          <section className="terminos-section">
            <h2>2. Uso de la Plataforma</h2>
            <p>
              Level-Up Gamer es una plataforma de comercio electrónico especializada en productos gaming. 
              Al utilizar nuestros servicios, te comprometes a:
            </p>
            <ul>
              <li>Proporcionar información verdadera y actualizada</li>
              <li>Mantener la confidencialidad de tu cuenta</li>
              <li>No utilizar la plataforma para actividades ilegales</li>
              <li>Respetar los derechos de propiedad intelectual</li>
            </ul>
          </section>

          <section className="terminos-section">
            <h2>3. Productos y Precios</h2>
            <p>
              Todos los productos mostrados en nuestra plataforma están sujetos a disponibilidad. 
              Nos reservamos el derecho de:
            </p>
            <ul>
              <li>Modificar precios sin previo aviso</li>
              <li>Limitar cantidades de compra por usuario</li>
              <li>Rechazar pedidos en caso de error o fraude</li>
              <li>Actualizar el catálogo de productos</li>
            </ul>
          </section>

          <section className="terminos-section">
            <h2>4. Proceso de Compra</h2>
            <p>
              Al realizar una compra en Level-Up Gamer:
            </p>
            <ul>
              <li>Recibirás una confirmación por correo electrónico</li>
              <li>El pago se procesará de forma segura</li>
              <li>Los tiempos de entrega son estimados y pueden variar</li>
              <li>Deberás verificar el estado del producto al recibirlo</li>
            </ul>
          </section>

          <section className="terminos-section">
            <h2>5. Política de Devoluciones</h2>
            <p>
              Aceptamos devoluciones bajo las siguientes condiciones:
            </p>
            <ul>
              <li>Dentro de los 30 días posteriores a la compra</li>
              <li>Producto sin usar y en su empaque original</li>
              <li>Con comprobante de compra válido</li>
              <li>Productos digitales no son reembolsables</li>
            </ul>
          </section>

          <section className="terminos-section">
            <h2>6. Propiedad Intelectual</h2>
            <p>
              Todo el contenido de Level-Up Gamer, incluyendo logos, diseños, textos e imágenes, 
              está protegido por derechos de autor. No está permitido:
            </p>
            <ul>
              <li>Reproducir contenido sin autorización</li>
              <li>Utilizar nuestras marcas comerciales</li>
              <li>Modificar o distribuir nuestro contenido</li>
            </ul>
          </section>

          <section className="terminos-section">
            <h2>7. Limitación de Responsabilidad</h2>
            <p>
              Level-Up Gamer no será responsable por:
            </p>
            <ul>
              <li>Daños indirectos o consecuentes</li>
              <li>Pérdida de datos o información</li>
              <li>Interrupciones del servicio</li>
              <li>Errores u omisiones en el contenido</li>
            </ul>
          </section>

          <section className="terminos-section">
            <h2>8. Privacidad y Datos Personales</h2>
            <p>
              El uso de tus datos personales está regulado por nuestra Política de Privacidad. 
              Nos comprometemos a proteger tu información y utilizarla únicamente para los fines establecidos.
            </p>
          </section>

          <section className="terminos-section">
            <h2>9. Modificaciones de los Términos</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. 
              Los cambios serán efectivos inmediatamente después de su publicación. 
              Es tu responsabilidad revisar periódicamente estos términos.
            </p>
          </section>

          <section className="terminos-section">
            <h2>10. Contacto</h2>
            <p>
              Si tienes preguntas sobre estos términos y condiciones, puedes contactarnos en:
            </p>
            <ul>
              <li>Email: legal@levelupgamer.com</li>
              <li>Discord: Level-Up Gamer Community</li>
              <li>Horario: Lunes a Viernes, 9:00 - 18:00</li>
            </ul>
          </section>

          <div className="terminos-footer">
            <p>
              Al continuar usando Level-Up Gamer, confirmas que has leído, entendido y aceptado 
              estos términos y condiciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminos;
