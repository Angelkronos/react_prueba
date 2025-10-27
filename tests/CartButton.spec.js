/**
 * Test unitario para CartButton usando Jasmine + Karma
 * Ejemplo de prueba con props y renderizado condicional
 */

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CartButton from '../../components/navigation/CartButton';

describe('CartButton Component', () => {
  
  /**
   * Test 1: Renderizado básico sin items
   */
  it('debería renderizarse correctamente sin items', () => {
    const { container } = render(
      <MemoryRouter>
        <CartButton count={0} />
      </MemoryRouter>
    );
    
    expect(container).toBeTruthy();
  });

  /**
   * Test 2: No mostrar badge cuando count es 0
   */
  it('no debería mostrar el badge cuando count es 0', () => {
    const { container } = render(
      <MemoryRouter>
        <CartButton count={0} />
      </MemoryRouter>
    );
    
    const badge = container.querySelector('.cart-badge');
    expect(badge).toBeNull();
  });

  /**
   * Test 3: Mostrar badge cuando count > 0
   */
  it('debería mostrar el badge cuando hay productos en el carrito', () => {
    const { container } = render(
      <MemoryRouter>
        <CartButton count={5} />
      </MemoryRouter>
    );
    
    const badge = container.querySelector('.cart-badge');
    expect(badge).toBeTruthy();
    expect(badge.textContent).toBe('5');
  });

  /**
   * Test 4: Verificar el enlace al carrito
   */
  it('debería tener un enlace que apunta a /carrito', () => {
    render(
      <MemoryRouter>
        <CartButton count={3} />
      </MemoryRouter>
    );
    
    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/carrito');
  });

  /**
   * Test 5: Verificar atributo aria-label dinámico
   */
  it('debería tener el aria-label correcto según la cantidad', () => {
    render(
      <MemoryRouter>
        <CartButton count={7} />
      </MemoryRouter>
    );
    
    const link = screen.getByRole('link');
    expect(link.getAttribute('aria-label')).toBe('Ver carrito (7 productos)');
  });

  /**
   * Test 6: Verificar que muestra el emoji del carrito
   */
  it('debería mostrar el emoji del carrito', () => {
    const { container } = render(
      <MemoryRouter>
        <CartButton count={0} />
      </MemoryRouter>
    );
    
    const cartEmoji = container.querySelector('.cart-emoji');
    expect(cartEmoji).toBeTruthy();
    expect(cartEmoji.textContent).toBe('🛒');
  });

  /**
   * Test 7: Verificar valor por defecto de count
   */
  it('debería usar 0 como valor por defecto de count', () => {
    render(
      <MemoryRouter>
        <CartButton />
      </MemoryRouter>
    );
    
    const link = screen.getByRole('link');
    expect(link.getAttribute('aria-label')).toBe('Ver carrito (0 productos)');
  });

  /**
   * Test 8: Verificar que el badge muestra números grandes correctamente
   */
  it('debería mostrar números grandes en el badge', () => {
    const { container } = render(
      <MemoryRouter>
        <CartButton count={99} />
      </MemoryRouter>
    );
    
    const badge = container.querySelector('.cart-badge');
    expect(badge.textContent).toBe('99');
  });
});
