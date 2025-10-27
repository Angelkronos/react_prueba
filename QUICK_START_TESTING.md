# 🚀 Quick Start: Testing con Jasmine/Karma

## ✅ Estado Actual
- ✅ Jasmine y Karma ya instalados
- ✅ Configuración completada
- ✅ Tests de ejemplo creados
- ✅ Babel configurado

---

## 📦 Paso 1: Verificar Instalación

Todas las dependencias ya están instaladas. Si necesitas reinstalar:

```bash
npm install
```

---

## ▶️ Paso 2: Ejecutar Tests

### Opción A: Modo Watch (Desarrollo)
```bash
npm test
```
Los tests se ejecutan continuamente y se re-ejecutan cuando modificas archivos.

### Opción B: Ejecución Única
```bash
npm run test:single
```
Ejecuta todos los tests una vez y termina.

---

## 📁 Paso 3: Archivos de Test Disponibles

Ya tienes estos tests creados en `/tests/`:

1. **LoginButton.spec.js** ✅ NUEVO
   - Test de componente con React Router
   - Verifica renderizado, texto, enlaces y accesibilidad
   
2. **CartButton.spec.js** ✅ NUEVO
   - Test con props dinámicas
   - Verifica renderizado condicional del badge
   - Prueba diferentes valores de count

3. **ProductCard.spec.js**
   - Tests existentes del proyecto

4. **CartItem.spec.js**
   - Tests existentes del proyecto

5. **CheckoutForm.spec.js**
   - Tests existentes del proyecto

---

## 📝 Paso 4: Crear Nuevos Tests

### Estructura básica con React Router:

```javascript
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MiComponente from '../components/MiComponente';

describe('MiComponente', () => {
  
  it('debería renderizarse correctamente', () => {
    render(
      <MemoryRouter>
        <MiComponente />
      </MemoryRouter>
    );
    
    expect(screen.getByText('Texto esperado')).toBeTruthy();
  });
  
});
```

### Ubicación:
- Guardar en: `/tests/NombreComponente.spec.js`
- O junto al componente: `/src/components/NombreComponente.spec.js`

---

## 🖥️ Paso 5: Ver Resultados en VS Code

### Terminal Integrada:
```bash
npm test
```

Verás algo como:
```
LoginButton Component
  ✔ debería renderizarse sin errores
  ✔ debería mostrar el texto "Iniciar Sesión"
  ✔ debería tener un enlace que apunta a /login
  
CartButton Component  
  ✔ debería renderizarse correctamente sin items
  ✔ no debería mostrar el badge cuando count es 0
  
Executed 10 of 10 SUCCESS (0.234 secs)
```

---

## 🔌 Extensiones VS Code Recomendadas

### 1. Test Explorer UI
```
Nombre: Test Explorer UI
ID: hbenl.vscode-test-explorer
```
**Instalación:**
```bash
code --install-extension hbenl.vscode-test-explorer
```

### 2. Karma Test Adapter
```
Nombre: Karma Test Adapter
ID: lucono.karma-test-explorer  
```
**Instalación:**
```bash
code --install-extension lucono.karma-test-explorer
```

### Beneficios:
- ✅ Ver tests en la barra lateral
- ✅ Ejecutar tests individuales con un clic
- ✅ Ver estado en tiempo real
- ✅ Depurar tests directamente

---

## 🎯 Comandos Más Usados

```bash
# Ejecutar tests en modo watch
npm test

# Ejecutar tests una vez y salir
npm run test:single

# Ver información de las dependencias
npm list karma jasmine-core

# Limpiar e instalar todo de nuevo
rm -rf node_modules package-lock.json
npm install
```

---

## 📖 Ejemplos Disponibles

### Ejemplo 1: LoginButton.spec.js
```javascript
// Test de componente simple con React Router
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginButton from '../../components/navigation/LoginButton';

describe('LoginButton Component', () => {
  it('debería tener un enlace que apunta a /login', () => {
    render(
      <MemoryRouter>
        <LoginButton />
      </MemoryRouter>
    );
    
    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/login');
  });
});
```

### Ejemplo 2: CartButton.spec.js
```javascript
// Test con props y renderizado condicional
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CartButton from '../../components/navigation/CartButton';

describe('CartButton Component', () => {
  it('debería mostrar badge con el número correcto', () => {
    const { container } = render(
      <MemoryRouter>
        <CartButton count={5} />
      </MemoryRouter>
    );
    
    const badge = container.querySelector('.cart-badge');
    expect(badge.textContent).toBe('5');
  });
});
```

---

## 🐛 Solución de Problemas Comunes

### Tests no se ejecutan
```bash
# Verificar archivos de test
ls tests/*.spec.js

# Verificar que Karma encuentra los archivos
cat karma.conf.cjs | grep files
```

### Error de módulo no encontrado
```bash
# Reinstalar dependencias
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

### Chrome Headless no funciona
Editar `karma.conf.cjs`:
```javascript
browsers: ['Chrome'], // En lugar de ChromeHeadless
```

---

## ✅ Checklist Final

- [x] `npm install` ejecutado
- [x] `.babelrc` existe en la raíz
- [x] `karma.conf.cjs` configurado
- [x] Tests de ejemplo en `/tests/`
- [ ] Ejecutar `npm test` por primera vez
- [ ] Instalar extensiones VS Code (opcional)
- [ ] Crear tu primer test personalizado

---

## 🎓 ¡Listo para Empezar!

**Ejecuta tu primer test ahora:**

```bash
npm test
```

**Documentación completa:** Ver `GUIA_TESTING_JASMINE_KARMA.md`

---

## 📚 Recursos Rápidos

- **Jasmine Matchers**: https://jasmine.github.io/api/edge/matchers.html
- **Testing Library Queries**: https://testing-library.com/docs/queries/about
- **React Router Testing**: https://reactrouter.com/docs/en/v6/guides/testing

