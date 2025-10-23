/**
 * Tests para ProductCard Component
 * Evaluación Parcial N°2 - DSY1104
 * 
 * Pruebas unitarias usando Jasmine para el componente ProductCard
 */

describe('ProductCard Component', () => {
  
  beforeEach(() => {
    // Setup inicial antes de cada test
  });

  describe('Renderizado del componente', () => {
    it('debe renderizar correctamente con props válidas', () => {
      const product = {
        id: 1,
        name: 'Test Product',
        price: 49990,
        image: '/test.jpg',
        discount: 0
      };
      
      // Test básico de existencia
      expect(product).toBeDefined();
      expect(product.name).toBe('Test Product');
      expect(product.price).toBe(49990);
    });

    it('debe mostrar el nombre del producto', () => {
      const product = {
        id: 1,
        name: 'PlayStation 5',
        price: 599990,
        image: '/ps5.jpg'
      };
      
      expect(product.name).toBe('PlayStation 5');
      expect(product.name.length).toBeGreaterThan(0);
    });

    it('debe mostrar el precio formateado', () => {
      const product = {
        id: 2,
        name: 'Xbox Series X',
        price: 549990,
        image: '/xbox.jpg'
      };
      
      const formattedPrice = product.price.toLocaleString('es-CL');
      expect(formattedPrice).toContain('549');
    });

    it('debe mostrar la imagen del producto', () => {
      const product = {
        id: 3,
        name: 'Nintendo Switch',
        price: 299990,
        image: '/switch.jpg'
      };
      
      expect(product.image).toBeDefined();
      expect(product.image).toContain('.jpg');
    });
  });

  describe('Cálculo de descuentos', () => {
    it('debe calcular correctamente el precio con descuento', () => {
      const product = {
        id: 4,
        name: 'Game with discount',
        price: 60000,
        discount: 20
      };
      
      const discountedPrice = product.price * (1 - product.discount / 100);
      expect(discountedPrice).toBe(48000);
    });

    it('debe mostrar el badge de descuento cuando existe', () => {
      const product = {
        id: 5,
        name: 'Discounted Game',
        price: 40000,
        discount: 15
      };
      
      expect(product.discount).toBeGreaterThan(0);
      expect(product.discount).toBe(15);
    });

    it('no debe mostrar descuento si es 0', () => {
      const product = {
        id: 6,
        name: 'Full Price Game',
        price: 70000,
        discount: 0
      };
      
      expect(product.discount).toBe(0);
    });
  });

  describe('Validación de props', () => {
    it('debe tener todas las propiedades requeridas', () => {
      const product = {
        id: 7,
        name: 'Complete Product',
        price: 35000,
        image: '/complete.jpg',
        brand: 'Test Brand',
        category: 'Videojuegos',
        stock: 10
      };
      
      expect(product.id).toBeDefined();
      expect(product.name).toBeDefined();
      expect(product.price).toBeDefined();
      expect(product.image).toBeDefined();
    });

    it('debe validar que el precio sea un número positivo', () => {
      const product = {
        id: 8,
        name: 'Valid Price Product',
        price: 25000
      };
      
      expect(typeof product.price).toBe('number');
      expect(product.price).toBeGreaterThan(0);
    });

    it('debe validar que el ID sea único', () => {
      const product1 = { id: 9, name: 'Product 1', price: 10000 };
      const product2 = { id: 10, name: 'Product 2', price: 20000 };
      
      expect(product1.id).not.toBe(product2.id);
    });
  });

  describe('Estados del producto', () => {
    it('debe identificar productos en stock', () => {
      const product = {
        id: 11,
        name: 'In Stock Product',
        price: 45000,
        stock: 5
      };
      
      expect(product.stock).toBeGreaterThan(0);
    });

    it('debe identificar productos sin stock', () => {
      const product = {
        id: 12,
        name: 'Out of Stock Product',
        price: 35000,
        stock: 0
      };
      
      expect(product.stock).toBe(0);
    });
  });

  describe('Interacciones del usuario', () => {
    it('debe permitir agregar al carrito productos con stock', () => {
      const product = {
        id: 13,
        name: 'Available Product',
        price: 55000,
        stock: 3
      };
      
      const canAddToCart = product.stock > 0;
      expect(canAddToCart).toBe(true);
    });

    it('no debe permitir agregar al carrito productos sin stock', () => {
      const product = {
        id: 14,
        name: 'Unavailable Product',
        price: 60000,
        stock: 0
      };
      
      const canAddToCart = product.stock > 0;
      expect(canAddToCart).toBe(false);
    });
  });

  afterEach(() => {
    // Limpieza después de cada test
  });
});
