/**
 * Test unitario para LoginButton usando Jasmine + Karma
 * Ejemplo de prueba con React Router (MemoryRouter)
 */

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginButton from '../../components/navigation/LoginButton';

describe('LoginButton Component', () => {
  
  /**
   * Test 1: Verificar que el componente se renderiza correctamente
   */
  it('debería renderizarse sin errores', () => {
    const { container } = render(
      <MemoryRouter>
        <LoginButton />
      </MemoryRouter>
    );
    
    expect(container).toBeTruthy();
  });

  /**
   * Test 2: Verificar que muestra el texto "Iniciar Sesión"
   */
  it('debería mostrar el texto "Iniciar Sesión"', () => {
    render(
      <MemoryRouter>
        <LoginButton />
      </MemoryRouter>
    );
    
    const linkText = screen.getByText('Iniciar Sesión');
    expect(linkText).toBeTruthy();
    expect(linkText.textContent).toBe('Iniciar Sesión');
  });

  /**
   * Test 3: Verificar que el enlace apunta a /login
   */
  it('debería tener un enlace que apunta a /login', () => {
    render(
      <MemoryRouter>
        <LoginButton />
      </MemoryRouter>
    );
    
    const link = screen.getByRole('link', { name: /iniciar sesión/i });
    expect(link).toBeTruthy();
    expect(link.getAttribute('href')).toBe('/login');
  });

  /**
   * Test 4: Verificar que tiene la clase CSS correcta
   */
  it('debería tener la clase CSS "login-btn"', () => {
    render(
      <MemoryRouter>
        <LoginButton />
      </MemoryRouter>
    );
    
    const link = screen.getByRole('link', { name: /iniciar sesión/i });
    expect(link.classList.contains('login-btn')).toBe(true);
  });

  /**
   * Test 5: Verificar que contiene un SVG (ícono)
   */
  it('debería contener un ícono SVG', () => {
    const { container } = render(
      <MemoryRouter>
        <LoginButton />
      </MemoryRouter>
    );
    
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg.classList.contains('login-icon')).toBe(true);
  });

  /**
   * Test 6: Verificar atributo de accesibilidad
   */
  it('debería tener el atributo aria-label correcto', () => {
    render(
      <MemoryRouter>
        <LoginButton />
      </MemoryRouter>
    );
    
    const link = screen.getByRole('link', { name: /iniciar sesión/i });
    expect(link.getAttribute('aria-label')).toBe('Iniciar Sesión');
  });
});
