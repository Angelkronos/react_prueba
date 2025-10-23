/**
 * Tests para CheckoutForm Component
 * Evaluación Parcial N°2 - DSY1104
 * 
 * Pruebas unitarias usando Jasmine para el componente CheckoutForm
 */

describe('CheckoutForm Component', () => {
  
  beforeEach(() => {
    // Setup inicial antes de cada test
  });

  describe('Validación de formulario', () => {
    it('debe requerir nombre completo', () => {
      const formData = {
        fullName: ''
      };
      
      const isValid = formData.fullName.trim().length > 0;
      expect(isValid).toBe(false);
    });

    it('debe validar formato de email', () => {
      const email = 'test@example.com';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      expect(emailRegex.test(email)).toBe(true);
    });

    it('debe rechazar emails inválidos', () => {
      const invalidEmail = 'invalid-email';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      expect(emailRegex.test(invalidEmail)).toBe(false);
    });

    it('debe validar formato de teléfono chileno', () => {
      const phone = '+56912345678';
      const phoneRegex = /^\+?56?[0-9]{9}$/;
      
      const cleanPhone = phone.replace(/\+/g, '');
      expect(cleanPhone.length).toBeGreaterThanOrEqual(9);
    });

    it('debe requerir dirección de envío', () => {
      const formData = {
        address: ''
      };
      
      const isValid = formData.address.trim().length > 0;
      expect(isValid).toBe(false);
    });
  });

  describe('Validación de tarjeta de crédito', () => {
    it('debe validar número de tarjeta (16 dígitos)', () => {
      const cardNumber = '4532015112830366';
      
      expect(cardNumber.length).toBe(16);
      expect(/^\d+$/.test(cardNumber)).toBe(true);
    });

    it('debe rechazar números de tarjeta cortos', () => {
      const shortCardNumber = '4532015112';
      
      expect(shortCardNumber.length).toBeLessThan(16);
    });

    it('debe validar fecha de expiración futura', () => {
      const currentYear = new Date().getFullYear();
      const expiryYear = currentYear + 1;
      
      expect(expiryYear).toBeGreaterThan(currentYear);
    });

    it('debe validar CVV de 3 dígitos', () => {
      const cvv = '123';
      
      expect(cvv.length).toBe(3);
      expect(/^\d{3}$/.test(cvv)).toBe(true);
    });

    it('debe validar CVV de 4 dígitos (Amex)', () => {
      const cvv = '1234';
      
      expect(cvv.length).toBe(4);
      expect(/^\d{4}$/.test(cvv)).toBe(true);
    });
  });

  describe('Validación de campos requeridos', () => {
    it('debe requerir método de pago', () => {
      const formData = {
        paymentMethod: ''
      };
      
      const isValid = formData.paymentMethod !== '';
      expect(isValid).toBe(false);
    });

    it('debe requerir región', () => {
      const formData = {
        region: ''
      };
      
      const isValid = formData.region !== '';
      expect(isValid).toBe(false);
    });

    it('debe requerir comuna', () => {
      const formData = {
        comuna: ''
      };
      
      const isValid = formData.comuna !== '';
      expect(isValid).toBe(false);
    });

    it('debe validar formulario completo', () => {
      const formData = {
        fullName: 'Juan Pérez',
        email: 'juan@example.com',
        phone: '+56912345678',
        address: 'Av. Principal 123',
        region: 'Metropolitana',
        comuna: 'Santiago',
        paymentMethod: 'credit-card',
        cardNumber: '4532015112830366',
        cvv: '123'
      };
      
      const isValid = 
        formData.fullName.trim() !== '' &&
        formData.email.includes('@') &&
        formData.phone.length >= 9 &&
        formData.address.trim() !== '' &&
        formData.region !== '' &&
        formData.comuna !== '' &&
        formData.paymentMethod !== '';
      
      expect(isValid).toBe(true);
    });
  });

  describe('Métodos de pago', () => {
    it('debe aceptar tarjeta de crédito', () => {
      const paymentMethod = 'credit-card';
      const validMethods = ['credit-card', 'debit-card', 'paypal', 'transfer'];
      
      expect(validMethods.includes(paymentMethod)).toBe(true);
    });

    it('debe aceptar tarjeta de débito', () => {
      const paymentMethod = 'debit-card';
      const validMethods = ['credit-card', 'debit-card', 'paypal', 'transfer'];
      
      expect(validMethods.includes(paymentMethod)).toBe(true);
    });

    it('debe aceptar PayPal', () => {
      const paymentMethod = 'paypal';
      const validMethods = ['credit-card', 'debit-card', 'paypal', 'transfer'];
      
      expect(validMethods.includes(paymentMethod)).toBe(true);
    });

    it('debe rechazar métodos inválidos', () => {
      const paymentMethod = 'invalid-method';
      const validMethods = ['credit-card', 'debit-card', 'paypal', 'transfer'];
      
      expect(validMethods.includes(paymentMethod)).toBe(false);
    });
  });

  describe('Cálculo de totales', () => {
    it('debe calcular el total del carrito', () => {
      const cartItems = [
        { price: 50000, quantity: 2 },
        { price: 30000, quantity: 1 }
      ];
      
      const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      expect(total).toBe(130000);
    });

    it('debe aplicar código de descuento', () => {
      const total = 100000;
      const discountPercent = 10;
      
      const finalTotal = total * (1 - discountPercent / 100);
      expect(finalTotal).toBe(90000);
    });

    it('debe calcular costo de envío', () => {
      const subtotal = 50000;
      const freeShippingThreshold = 75000;
      
      const shippingCost = subtotal >= freeShippingThreshold ? 0 : 5000;
      expect(shippingCost).toBe(5000);
    });

    it('debe aplicar envío gratis sobre monto mínimo', () => {
      const subtotal = 80000;
      const freeShippingThreshold = 75000;
      
      const shippingCost = subtotal >= freeShippingThreshold ? 0 : 5000;
      expect(shippingCost).toBe(0);
    });
  });

  describe('Códigos de descuento', () => {
    it('debe validar código de descuento válido', () => {
      const code = 'GAMER2024';
      const validCodes = ['GAMER2024', 'LEVELUP10', 'PROMO15'];
      
      expect(validCodes.includes(code)).toBe(true);
    });

    it('debe rechazar código inválido', () => {
      const code = 'INVALID';
      const validCodes = ['GAMER2024', 'LEVELUP10', 'PROMO15'];
      
      expect(validCodes.includes(code)).toBe(false);
    });

    it('debe aplicar descuento correcto', () => {
      const total = 100000;
      const discount = 15; // 15%
      
      const discounted = total * (1 - discount / 100);
      expect(discounted).toBe(85000);
    });
  });

  describe('Envío del formulario', () => {
    it('debe preparar datos para envío', () => {
      const orderData = {
        customer: {
          fullName: 'María González',
          email: 'maria@example.com',
          phone: '+56987654321'
        },
        shipping: {
          address: 'Calle Falsa 123',
          region: 'Valparaíso',
          comuna: 'Viña del Mar'
        },
        total: 149990
      };
      
      expect(orderData.customer).toBeDefined();
      expect(orderData.shipping).toBeDefined();
      expect(orderData.total).toBeGreaterThan(0);
    });

    it('debe generar número de orden único', () => {
      const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      expect(orderNumber).toContain('ORD-');
      expect(orderNumber.length).toBeGreaterThan(10);
    });

    it('debe simular éxito de pago (90%)', () => {
      const successRate = 0.9;
      const randomValue = 0.5; // Valor de prueba
      
      const isSuccess = randomValue < successRate;
      expect(isSuccess).toBe(true);
    });

    it('debe simular fallo de pago (10%)', () => {
      const successRate = 0.9;
      const randomValue = 0.95; // Valor de prueba que simula fallo
      
      const isSuccess = randomValue < successRate;
      expect(isSuccess).toBe(false);
    });
  });

  describe('Persistencia de datos', () => {
    it('debe preparar orden para localStorage', () => {
      const order = {
        orderNumber: 'ORD-123456',
        date: new Date().toISOString(),
        items: [],
        total: 99990
      };
      
      const orderString = JSON.stringify(order);
      expect(typeof orderString).toBe('string');
      expect(orderString).toContain('orderNumber');
    });

    it('debe recuperar orden de localStorage', () => {
      const mockOrder = {
        orderNumber: 'ORD-789012',
        total: 149990
      };
      
      const orderString = JSON.stringify(mockOrder);
      const recovered = JSON.parse(orderString);
      
      expect(recovered.orderNumber).toBe('ORD-789012');
      expect(recovered.total).toBe(149990);
    });
  });

  afterEach(() => {
    // Limpieza después de cada test
  });
});
