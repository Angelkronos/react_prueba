# 🧪 Guía Completa: Testing con Jasmine/Karma en React

## 📋 Índice
1. [Instalación y Configuración](#instalación)
2. [Archivos de Configuración](#configuración)
3. [Estructura de Tests](#estructura)
4. [Ejecutar Tests](#ejecutar)
5. [Extensiones VS Code](#extensiones)
6. [Ejemplos de Tests](#ejemplos)

---

## 1. 📦 Instalación y Configuración

### Paso 1: Instalar dependencias necesarias

```bash
# Dependencias principales ya instaladas:
# - jasmine-core
# - karma
# - karma-jasmine
# - karma-chrome-launcher
# - karma-webpack
# - karma-spec-reporter

# Instalar dependencias adicionales necesarias:
npm install --save-dev style-loader css-loader @testing-library/react @testing-library/jest-dom webpack webpack-cli

# Verificar instalación:
npm list jasmine-core karma karma-jasmine
```

### Paso 2: Verificar package.json

Ya tienes los scripts configurados:
```json
{
  "scripts": {
    "test": "karma start",
    "test:single": "karma start --single-run"
  }
}
```

---

## 2. ⚙️ Archivos de Configuración

### .babelrc
Archivo creado en la raíz del proyecto:

```json
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "browsers": ["last 2 versions"]
      },
      "modules": false
    }],
    ["@babel/preset-react", {
      "runtime": "automatic"
    }]
  ],
  "env": {
    "test": {
      "presets": [
        ["@babel/preset-env", {
          "targets": {
            "node": "current"
          }
        }],
        ["@babel/preset-react", {
          "runtime": "automatic"
        }]
      ]
    }
  }
}
```

### karma.conf.cjs
Configuración ya existente y actualizada:

```javascript
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    
    // Archivos de test a ejecutar
    files: [
      'src/**/*.spec.js',
      'src/**/*.spec.jsx',
      'tests/**/*.spec.js'
    ],
    
    // Pre-procesadores
    preprocessors: {
      'src/**/*.spec.js': ['webpack'],
      'src/**/*.spec.jsx': ['webpack'],
      'tests/**/*.spec.js': ['webpack']
    },
    
    // Configuración de Webpack para procesar JSX
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      }
    },
    
    webpackMiddleware: {
      stats: 'errors-only'
    },
    
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity
  })
}
```

---

## 3. 📁 Estructura de Tests

### Ubicación de archivos de test:
```
/workspaces/react_prueba/
├── tests/                          # Tests principales
│   ├── LoginButton.spec.js         ✅ NUEVO
│   ├── CartButton.spec.js          ✅ NUEVO
│   ├── ProductCard.spec.js         (ya existe)
│   ├── CartItem.spec.js            (ya existe)
│   └── CheckoutForm.spec.js        (ya existe)
├── src/
│   └── components/
│       └── **/*.spec.js            # Tests junto al componente
└── karma.conf.cjs
```

### Convenciones de nomenclatura:
- **Archivos**: `NombreComponente.spec.js` o `NombreComponente.spec.jsx`
- **Describe blocks**: Nombre del componente + "Component"
- **Test cases**: Usar "debería" o "debe" para describir comportamiento

---

## 4. ▶️ Ejecutar Tests

### Opción 1: Modo Watch (Desarrollo)
```bash
npm test
```
- ✅ Ejecuta continuamente
- ✅ Re-ejecuta cuando cambias archivos
- ✅ Útil durante desarrollo

### Opción 2: Ejecución única (CI/CD)
```bash
npm run test:single
```
- ✅ Ejecuta una sola vez
- ✅ Sale automáticamente
- ✅ Perfecto para integración continua

### Opción 3: Ejecutar con mayor detalle
```bash
# Con logs completos
npm test -- --log-level debug

# Solo tests específicos (modificar karma.conf.cjs temporalmente)
npm test
```

### Ver resultados en terminal:

El reporter 'spec' muestra:
```
LoginButton Component
  ✔ debería renderizarse sin errores
  ✔ debería mostrar el texto "Iniciar Sesión"
  ✔ debería tener un enlace que apunta a /login
  ✔ debería tener la clase CSS "login-btn"
  ✔ debería contener un ícono SVG
  ✔ debería tener el atributo aria-label correcto

CartButton Component
  ✔ debería renderizarse correctamente sin items
  ✔ no debería mostrar el badge cuando count es 0
  ✔ debería mostrar el badge cuando hay productos en el carrito
  ...

Executed 15 of 15 SUCCESS (0.234 secs / 0.187 secs)
```

---

## 5. 🔌 Extensiones VS Code Recomendadas

### Extensiones esenciales:

1. **Test Explorer UI** + **Karma Test Adapter**
   ```
   ID: hbenl.vscode-test-explorer
   ID: lucono.karma-test-explorer
   ```
   - ✅ Muestra tests en la barra lateral
   - ✅ Ejecuta tests individuales con un clic
   - ✅ Muestra estado de tests en tiempo real

2. **JavaScript and TypeScript Nightly**
   ```
   ID: ms-vscode.vscode-typescript-next
   ```
   - ✅ Mejor soporte para JSX
   - ✅ IntelliSense mejorado

3. **ESLint**
   ```
   ID: dbaeumer.vscode-eslint
   ```
   - ✅ Detecta errores en tests
   - ✅ Formatea código de test

4. **Code Spell Checker**
   ```
   ID: streetsidesoftware.code-spell-checker
   ```
   - ✅ Evita errores de tipeo en tests

### Instalación rápida:
```bash
# Desde terminal
code --install-extension hbenl.vscode-test-explorer
code --install-extension lucono.karma-test-explorer
```

### Configuración VS Code (settings.json):
```json
{
  "testExplorer.useNativeTesting": true,
  "karmaTestExplorer.projectWorkspace": "${workspaceFolder}",
  "karmaTestExplorer.karmaConfFilePath": "karma.conf.cjs"
}
```

---

## 6. 📝 Ejemplos de Tests

### Ejemplo 1: Test básico con MemoryRouter

**Archivo**: `tests/LoginButton.spec.js`

```javascript
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginButton from '../components/navigation/LoginButton';

describe('LoginButton Component', () => {
  
  it('debería renderizarse sin errores', () => {
    const { container } = render(
      <MemoryRouter>
        <LoginButton />
      </MemoryRouter>
    );
    
    expect(container).toBeTruthy();
  });

  it('debería mostrar el texto "Iniciar Sesión"', () => {
    render(
      <MemoryRouter>
        <LoginButton />
      </MemoryRouter>
    );
    
    const linkText = screen.getByText('Iniciar Sesión');
    expect(linkText).toBeTruthy();
  });

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

### Ejemplo 2: Test con Props

**Archivo**: `tests/CartButton.spec.js`

```javascript
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CartButton from '../components/navigation/CartButton';

describe('CartButton Component', () => {
  
  it('no debería mostrar badge cuando count es 0', () => {
    const { container } = render(
      <MemoryRouter>
        <CartButton count={0} />
      </MemoryRouter>
    );
    
    const badge = container.querySelector('.cart-badge');
    expect(badge).toBeNull();
  });

  it('debería mostrar badge con el número correcto', () => {
    const { container } = render(
      <MemoryRouter>
        <CartButton count={5} />
      </MemoryRouter>
    );
    
    const badge = container.querySelector('.cart-badge');
    expect(badge).toBeTruthy();
    expect(badge.textContent).toBe('5');
  });
});
```

### Ejemplo 3: Test con datos Mock

```javascript
describe('ProductCard Component', () => {
  const mockProduct = {
    id: 1,
    name: 'PlayStation 5',
    price: 499990,
    discount: 9,
    image: 'https://example.com/ps5.jpg'
  };

  it('debería mostrar el nombre del producto', () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    );
    
    expect(screen.getByText('PlayStation 5')).toBeTruthy();
  });
});
```

---

## 7. 🎯 Mejores Prácticas

### ✅ DO (Hacer):
1. **Usar MemoryRouter** para componentes con react-router
2. **Mockear datos** para tests predecibles
3. **Testear comportamiento**, no implementación
4. **Usar selectores semánticos** (getByRole, getByText)
5. **Describir claramente** qué hace cada test
6. **Mantener tests simples** y enfocados

### ❌ DON'T (No hacer):
1. ❌ No testear detalles de implementación CSS
2. ❌ No usar selectores frágiles (.class1.class2.class3)
3. ❌ No crear tests que dependan de otros tests
4. ❌ No testear bibliotecas externas
5. ❌ No ignorar warnings del navegador

---

## 8. 🚀 Comandos Rápidos

```bash
# Ejecutar todos los tests en modo watch
npm test

# Ejecutar tests una sola vez
npm run test:single

# Ver versiones de dependencias
npm list jasmine-core karma

# Limpiar cache de Karma
rm -rf .karma-cache

# Ejecutar con Chrome visible (modificar karma.conf.cjs: browsers: ['Chrome'])
npm test

# Ver coverage (requiere configuración adicional)
# Agregar karma-coverage a karma.conf.cjs
```

---

## 9. 🐛 Troubleshooting

### Problema: "Cannot find module '@testing-library/react'"
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

### Problema: "Webpack compilation errors"
```bash
# Verificar que babel está configurado
cat .babelrc

# Reinstalar dependencias
npm install
```

### Problema: Tests no se ejecutan
```bash
# Verificar que los archivos terminan en .spec.js
ls tests/*.spec.js

# Verificar karma.conf.cjs files pattern
```

### Problema: "ChromeHeadless not found"
```bash
# Instalar Chrome o usar otro navegador
# Modificar karma.conf.cjs: browsers: ['Firefox']
```

---

## 10. 📚 Recursos Adicionales

- **Jasmine Docs**: https://jasmine.github.io/
- **Karma Docs**: https://karma-runner.github.io/
- **Testing Library**: https://testing-library.com/docs/react-testing-library/intro/
- **React Router Testing**: https://reactrouter.com/docs/en/v6/guides/testing

---

## ✅ Checklist Final

- [x] Dependencias instaladas (jasmine, karma, webpack, babel)
- [x] .babelrc configurado
- [x] karma.conf.cjs actualizado
- [x] Tests de ejemplo creados
- [x] Scripts npm configurados
- [ ] Extensiones VS Code instaladas (opcional)
- [ ] Primer test ejecutado exitosamente

---

## 🎓 Siguiente Paso

**Ejecuta tu primer test:**
```bash
npm test
```

¡Deberías ver los tests de LoginButton y CartButton ejecutándose correctamente! 🎉
