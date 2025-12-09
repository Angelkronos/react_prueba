/**
 * Servicio de Webpay para procesar pagos
 * 
 * Este servicio maneja la comunicación con la API de pagos
 * y la redirección al formulario de Webpay.
 */

// URL de la API desde variables de entorno
const API_URL = import.meta.env.VITE_API_URL || 'https://api.levelupgamer.lol';

/**
 * Genera un ID único para la orden de compra
 * @returns {string} ID de orden único
 */
export function generateBuyOrder() {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `ORDER-${timestamp}-${random}`;
}

/**
 * Genera un ID de sesión único
 * @returns {string} ID de sesión único
 */
export function generateSessionId() {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `SESSION-${timestamp}-${random}`;
}

/**
 * Crea una orden de pago en Webpay y redirige al formulario de tarjetas
 * 
 * @param {Object} params - Parámetros de la orden
 * @param {number} params.amount - Monto total a pagar
 * @param {string} params.userId - ID del usuario
 * @param {string} [params.buyOrder] - ID de la orden (se genera automáticamente si no se proporciona)
 * @param {string} [params.sessionId] - ID de sesión (se genera automáticamente si no se proporciona)
 * @returns {Promise<{url: string, token: string, orderId: string}>} Datos de la respuesta
 * @throws {Error} Si hay un error en la comunicación con la API
 */
export async function createWebpayOrder({ amount, userId, buyOrder, sessionId }) {
  try {
    // Generar IDs si no se proporcionan
    const finalBuyOrder = buyOrder || generateBuyOrder();
    const finalSessionId = sessionId || generateSessionId();

    console.log('📤 Enviando solicitud a Webpay:', {
      buyOrder: finalBuyOrder,
      sessionId: finalSessionId,
      amount,
      userId
    });

    // Realizar la petición a la API
    const response = await fetch(`${API_URL}/api/payments/webpay/create`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        buyOrder: finalBuyOrder,
        sessionId: finalSessionId,
        amount,
        userId,
      }),
    });

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Error HTTP: ${response.status}`);
    }

    // Parsear la respuesta
    const data = await response.json();

    console.log('📥 Respuesta de Webpay recibida:', {
      url: data.url,
      token: data.token,
      orderId: data.orderId
    });

    // Validar que la respuesta contenga los campos necesarios
    if (!data.url || !data.token) {
      throw new Error('Respuesta incompleta del servidor: faltan url o token');
    }

    return {
      url: data.url,
      token: data.token,
      orderId: data.orderId
    };

  } catch (error) {
    console.error('❌ Error al crear orden de Webpay:', error.message);
    throw error;
  }
}

/**
 * Redirige al usuario al formulario de pago de Webpay
 * Crea un formulario dinámico con el token y lo envía automáticamente
 * 
 * @param {string} url - URL de Webpay
 * @param {string} token - Token de la transacción
 */
export function redirectToWebpay(url, token) {
  console.log('🔄 Redirigiendo a Webpay...');
  console.log('   URL:', url);
  console.log('   Token:', token);

  // Crear el formulario dinámicamente
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = url;
  form.style.display = 'none';

  // Crear el campo oculto con el token
  const tokenInput = document.createElement('input');
  tokenInput.type = 'hidden';
  tokenInput.name = 'token_ws';
  tokenInput.value = token;
  form.appendChild(tokenInput);

  // Agregar el formulario al DOM y enviarlo
  document.body.appendChild(form);
  form.submit();
}

/**
 * Función principal que crea la orden y redirige a Webpay
 * Combina createWebpayOrder y redirectToWebpay en una sola llamada
 * 
 * @param {Object} params - Parámetros de la orden
 * @param {number} params.amount - Monto total a pagar
 * @param {string} params.userId - ID del usuario
 * @param {string} [params.buyOrder] - ID de la orden
 * @param {string} [params.sessionId] - ID de sesión
 * @returns {Promise<{url: string, token: string, orderId: string}>} Datos de la respuesta
 */
export async function processWebpayPayment({ amount, userId, buyOrder, sessionId }) {
  try {
    // Crear la orden en el backend
    const { url, token, orderId } = await createWebpayOrder({
      amount,
      userId,
      buyOrder,
      sessionId
    });

    // Guardar información de la orden en localStorage para recuperarla después
    localStorage.setItem('pending-webpay-order', JSON.stringify({
      orderId,
      amount,
      userId,
      timestamp: Date.now()
    }));

    // Redirigir al formulario de Webpay
    redirectToWebpay(url, token);

    return { url, token, orderId };

  } catch (error) {
    console.error('❌ Error en el proceso de pago:', error.message);
    throw error;
  }
}

export default {
  createWebpayOrder,
  redirectToWebpay,
  processWebpayPayment,
  generateBuyOrder,
  generateSessionId
};
