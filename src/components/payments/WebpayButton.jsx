/**
 * Ejemplo de uso del servicio de Webpay
 * 
 * Este componente demuestra cómo implementar un botón de pago
 * que consume la API de Webpay y redirige al formulario de tarjetas.
 */

import { useState } from 'react';
import { processWebpayPayment } from '../../services/webpayService';

function WebpayButton({ amount, userId, onError }) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePagar = async () => {
    setIsLoading(true);

    try {
      // Llamar al servicio de Webpay
      const result = await processWebpayPayment({
        amount,
        userId
      });

      // Los datos recibidos (url, token, orderId) se muestran en consola
      // y la redirección ocurre automáticamente
      console.log('✅ Pago iniciado exitosamente:', result);

    } catch (error) {
      console.error('❌ Error al procesar pago:', error.message);
      if (onError) {
        onError(error.message);
      }
      setIsLoading(false);
    }
  };

  return (
    <button 
      onClick={handlePagar} 
      disabled={isLoading}
      style={{
        padding: '12px 24px',
        fontSize: '16px',
        backgroundColor: isLoading ? '#ccc' : '#0066cc',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: isLoading ? 'not-allowed' : 'pointer'
      }}
    >
      {isLoading ? 'Procesando...' : `Pagar $${amount.toLocaleString()}`}
    </button>
  );
}

// Ejemplo de uso del componente
function EjemploWebpay() {
  const [error, setError] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Ejemplo de Pago con Webpay</h2>
      
      {error && (
        <div style={{ color: 'red', marginBottom: '10px' }}>
          Error: {error}
        </div>
      )}

      <WebpayButton 
        amount={15000}  // Monto en pesos chilenos
        userId="user-123"
        onError={setError}
      />

      <p style={{ marginTop: '10px', color: '#666' }}>
        Al hacer clic serás redirigido al formulario de Webpay
      </p>
    </div>
  );
}

export { WebpayButton, EjemploWebpay };
export default EjemploWebpay;
