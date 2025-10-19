# 🎮 Level-Up Gamer - Proyecto React

## 📋 Descripción

Level-Up Gamer es una tienda online de videojuegos con una interfaz moderna y temática gamer. Este proyecto implementa la sección Home y páginas informativas con React 19 + Vite y React Router v7.

## ✨ Características Implementadas

### Requerimientos Cumplidos

- ✅ **LG-001**: Paleta cyber gamer (neon-green, electric-blue, cyber-black)
- ✅ **LG-002**: Tipografías Roboto + Orbitron
- ✅ **LG-003**: Breakpoints responsivos y foco visible
- ✅ **LG-004**: Banner gamer dinámico con carrusel
- ✅ **LG-009**: FAQ / Centro de ayuda
- ✅ **LG-013**: Carrusel de promociones
- ✅ **LG-014**: Panel de acceso rápido flotante
- ✅ **LG-015**: Buscador rápido en FAQ
- ✅ **LG-018**: Widget de redes sociales
- ✅ **LG-019**: Newsletter gamer

## 🗂️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Banner.jsx       # Banner dinámico con carrusel
│   ├── Navbar.jsx       # Navegación principal
│   ├── Footer.jsx       # Pie de página
│   ├── QuickPanel.jsx   # Panel flotante de acceso rápido
│   ├── Newsletter.jsx   # Suscripción newsletter
│   ├── SocialBar.jsx    # Widget de redes sociales
│   └── FAQWidget.jsx    # Centro de ayuda con buscador
├── pages/               # Páginas principales
│   ├── Home.jsx         # Página de inicio
│   └── Ayuda.jsx        # Centro de ayuda
├── styles/
│   └── variables.css    # Variables CSS globales
├── App.jsx              # Configuración de rutas
└── index.css            # Estilos globales
```

## 🎨 Componentes Principales

### 🏠 Home.jsx
Página principal que incluye:
- Banner dinámico con 3 slides
- Sección hero con CTAs
- Carrusel de promociones
- Categorías populares
- Widget de redes sociales
- Newsletter
- FAQ Widget
- Panel de acceso rápido flotante

### 🆘 Ayuda.jsx
Centro de ayuda que incluye:
- Hero con navegación
- Categorías de soporte
- FAQ Widget con buscador
- Métodos de contacto
- Consejos rápidos

### 🎯 Componentes Interactivos

#### Banner.jsx
- Carrusel automático (5 segundos)
- Navegación manual (flechas + indicadores)
- 3 slides con diferentes promociones
- Animaciones smooth y efectos neon

#### QuickPanel.jsx
- Panel flotante en esquina inferior derecha
- Botón con animación pulse
- 5 enlaces de acceso rápido
- Overlay para cerrar
- Responsive mobile

#### Newsletter.jsx
- Formulario de suscripción
- Validación de email
- Mensaje de éxito animado
- Lista de beneficios
- Diseño atractivo con gradientes

#### SocialBar.jsx
- 6 redes sociales principales
- Contador de seguidores
- Hover effects únicos
- Estadísticas totales
- Cards con colores temáticos

#### FAQWidget.jsx
- 10 preguntas frecuentes
- Buscador en tiempo real
- Acordeón expandible
- Categorías organizadas
- Sin resultados UX

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Angelkronos/react_prueba.git
cd react_prueba

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

### Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye para producción
npm run preview  # Vista previa de la build
npm run lint     # Ejecuta ESLint
```

## 🎨 Paleta de Colores

```css
--neon-green: #00ff41      /* Color principal */
--electric-blue: #00d9ff   /* Acento secundario */
--cyber-black: #0a0e27     /* Fondo principal */
--dark-purple: #1a0b2e     /* Fondo secundario */
--hot-pink: #ff006e        /* Acento terciario */
--cyber-yellow: #ffea00    /* Acento especial */
```

## 📱 Responsive Design

El proyecto es 100% responsive con breakpoints en:
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🔧 Tecnologías Utilizadas

- **React 19**: Framework principal
- **Vite**: Build tool y dev server
- **React Router v7**: Enrutamiento
- **CSS3**: Estilos con variables CSS y animaciones
- **Google Fonts**: Roboto + Orbitron

## 🎯 Características Destacadas

### Animaciones
- Pulse effects en botones
- Neon glow en títulos
- Slide transitions en carrusel
- Hover effects únicos
- Loading states

### Accesibilidad
- Focus visible en todos los elementos interactivos
- Labels ARIA en componentes
- Navegación por teclado
- Contraste de colores AAA
- Semantic HTML

### UX/UI
- Dark mode gamer theme
- Micro-interacciones
- Feedback visual inmediato
- Estados de carga
- Mensajes de error amigables

## 🗺️ Rutas Disponibles

- `/` - Home (página principal)
- `/ayuda` - Centro de ayuda
- `/productos` - Catálogo (placeholder)
- `/perfil` - Perfil de usuario (placeholder)
- `/carrito` - Carrito de compras (placeholder)

## 📝 Próximos Pasos

- [ ] Implementar página de Productos con filtros
- [ ] Crear sistema de autenticación
- [ ] Integrar carrito de compras funcional
- [ ] Añadir pasarela de pago
- [ ] Implementar backend API
- [ ] Agregar tests unitarios
- [ ] Optimizar performance

## 👥 Autor

María Contreras - Rama: `MariaContreras`

## 📄 Licencia

Este proyecto es parte de Level-Up Gamer © 2025
