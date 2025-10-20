# 📦 Módulo de Catálogo, Carrito y Perfil - Level-Up Gamer

## 🎯 Implementación Completada por: Ángel Sabelle

Este módulo implementa la funcionalidad completa de catálogo de productos, carrito de compras y perfil de usuario para el proyecto **Level-Up Gamer**.

---

## ✅ Requerimientos Implementados

### 🎮 Catálogo de Productos
- **LG-020**: ✅ Productos con imágenes reales (Unsplash)
- **LG-016**: ✅ Sección de ofertas destacadas
- **LG-017**: ✅ Comparador de productos (hasta 3 productos)
- **LG-021-LG-043**: ✅ Sistema completo de filtros, búsqueda, wishlist, paginación

### 🛒 Carrito de Compras
- **LG-081**: ✅ Carrito avanzado con localStorage
- **LG-043**: ✅ Notificaciones toast
- **LG-044**: ✅ Sincronización con localStorage

### 👤 Perfil de Usuario
- **LG-060**: ✅ Sistema de códigos de referido
- **LG-061**: ✅ Sistema de niveles y puntos
- **LG-070**: ✅ Reseñas y calificaciones
- **LG-100**: ✅ Compartir productos (WhatsApp, Facebook, Twitter, etc.)
- **LG-101**: ✅ Chat flotante de WhatsApp
- **LG-110-LG-111**: ✅ Diseño responsive y semillas de datos

---

## 📁 Estructura de Archivos Creados

### 📊 Datos
- `src/data/productsData.js` - Base de datos de productos (20 productos)

### 🔧 Contexto Global
- `src/context/CartContext.jsx` - Gestión global del carrito con localStorage

### 🧩 Componentes de Producto
- `src/components/ProductCard.jsx` + `.css` - Tarjeta de producto
- `src/components/Filters.jsx` + `.css` - Sistema de filtros
- `src/components/Comparador.jsx` + `.css` - Comparador de productos
- `src/components/Pagination.jsx` + `.css` - Paginación
- `src/components/ShareButton.jsx` + `.css` - Botón compartir

### 🛒 Componentes de Carrito
- `src/components/CartItem.jsx` + `.css` - Item del carrito
- `src/components/CheckoutForm.jsx` + `.css` - Formulario de checkout

### 🎁 Componentes de Perfil
- `src/components/PointsWidget.jsx` + `.css` - Widget de puntos y niveles
- `src/components/ChatWidget.jsx` + `.css` - Chat flotante de WhatsApp

### 📄 Páginas
- `src/pages/Productos.jsx` + `.css` - Catálogo completo
- `src/pages/Carrito.jsx` + `.css` - Carrito y checkout
- `src/pages/Perfil.jsx` + `.css` - Perfil de usuario

---

## 🚀 Funcionalidades Principales

### 1️⃣ Catálogo de Productos (`/productos`)
- **Búsqueda en tiempo real** por nombre, descripción, marca y tags
- **Filtros avanzados**:
  - Categoría (Consolas, Juegos, Accesorios)
  - Marca
  - Rango de precio
  - Calificación mínima
  - Solo con stock
  - Solo en oferta
- **Ordenamiento**:
  - Destacados
  - Precio: menor a mayor / mayor a menor
  - Nombre A-Z
  - Mejor valorados
  - Mayor descuento
- **Paginación** (12 productos por página)
- **Comparador** hasta 3 productos
- **Ofertas destacadas** en banner superior
- **Wishlist** (favoritos)

### 2️⃣ Carrito de Compras (`/carrito`)
- **Gestión completa de productos**:
  - Agregar/eliminar productos
  - Modificar cantidades
  - Validación de stock
- **Cálculo automático** de subtotales y totales
- **Envío gratis** en compras sobre $50.000
- **Códigos de descuento**:
  - `LEVELUP10` → 10% descuento
  - `GAMER20` → 20% descuento
  - `FIRSTBUY15` → 15% descuento
- **Checkout completo** con formulario de envío
- **Métodos de pago**: Tarjeta, Transferencia, PayPal
- **Notificaciones toast** para todas las acciones
- **Persistencia** con localStorage
- **Wishlist visible** cuando el carrito está vacío

### 3️⃣ Perfil de Usuario (`/perfil`)

#### 📊 Sistema de Puntos y Niveles
- **6 niveles**: Novato, Jugador, Pro, Experto, Maestro, Leyenda
- **Formas de ganar puntos**:
  - 1 punto por cada $100 en compras
  - 50 puntos por reseña
  - 200 puntos por referido
- **Barra de progreso** visual
- **Códigos de referido** personalizados

#### 🎁 Recompensas Canjeables
- $5.000 descuento → 500 puntos
- $10.000 descuento → 900 puntos
- Accesorio gratis → 1500 puntos
- 3 envíos gratis → 800 puntos

#### 📦 Historial de Pedidos
- Estado en tiempo real (Entregado, En camino, Procesando)
- Detalles de cada orden
- Total y cantidad de productos

#### ⭐ Reseñas y Calificaciones
- Sistema de 5 estrellas
- Comentarios detallados
- Fecha de publicación

#### 🔗 Compartir Productos
- WhatsApp
- Facebook
- Twitter
- Telegram
- Email
- Copiar enlace

#### 💬 Chat de WhatsApp
- Botón flotante siempre visible
- Mensajes predefinidos rápidos
- Mensaje personalizado
- Compatible con API nativa de compartir (móviles)

---

## 🎨 Diseño y Estilo

### Tema Cyber Gamer
- **Colores principales**:
  - Primary: `#8a2be2` (Morado neón)
  - Accent: `#00d4ff` (Cyan eléctrico)
  - Success: `#00ff88`
  - Warning: `#ffa500`
  - Error: `#ff4444`
- **Gradientes** en todos los componentes
- **Efectos hover** con transformaciones y sombras
- **Animaciones** suaves y modernas
- **Responsive** completo (Desktop, Tablet, Mobile)

---

## 📦 Datos de Productos

### 20 Productos Incluidos:
1. **Consolas**: PlayStation 5, Xbox Series X, Nintendo Switch OLED
2. **Juegos**: The Last of Us Part II, God of War Ragnarök, Halo Infinite, Zelda TOTK, FIFA 24, Elden Ring, Cyberpunk 2077, Resident Evil 4, Starfield
3. **Accesorios**: HyperX Cloud II, Razer BlackWidow, Logitech G502, ASUS ROG Monitor, DXRacer Silla, Webcam C920, Control DualSense, Elgato HD60 S+

Cada producto incluye:
- Imágenes reales de Unsplash
- Precio y descuento
- Calificación y reviews
- Stock disponible
- Especificaciones técnicas
- Tags para búsqueda
- Descripción detallada

---

## 🔄 Sincronización con localStorage

### Datos Persistentes:
- **Carrito**: `levelup-cart`
- **Wishlist**: `levelup-wishlist`
- **Usuario**: `levelup-user`
  - Puntos
  - Nivel
  - Código de referido
  - Amigos referidos

---

## 🚀 Instrucciones de Uso

### Iniciar el proyecto:
```bash
npm run dev
```

### Navegar:
- **Inicio**: `/`
- **Productos**: `/productos`
- **Carrito**: `/carrito`
- **Perfil**: `/perfil`
- **Ayuda**: `/ayuda`

### Probar funcionalidades:

1. **Productos**:
   - Busca: "PlayStation", "Xbox", "Nintendo"
   - Filtra por categoría, precio, marca
   - Agrega productos al carrito
   - Compara hasta 3 productos
   - Agrega a favoritos (wishlist)

2. **Carrito**:
   - Modifica cantidades
   - Aplica códigos: `LEVELUP10`, `GAMER20`, `FIRSTBUY15`
   - Completa el checkout
   - Verifica envío gratis (>$50.000)

3. **Perfil**:
   - Revisa puntos y nivel
   - Usa botones de prueba (+100 pts, +500 pts)
   - Copia código de referido
   - Canjea recompensas
   - Comparte productos
   - Abre chat de WhatsApp

---

## ✨ Características Especiales

### 🎯 UX/UI Premium
- Notificaciones toast no intrusivas
- Feedback visual en todas las acciones
- Loading states (procesando compra)
- Validación de formularios
- Mensajes de error/éxito claros

### 📱 100% Responsive
- Diseño adaptativo para todas las pantallas
- Touch-friendly en móviles
- Menús colapsables
- Grids adaptativos

### ⚡ Rendimiento
- Componentes modulares
- Búsqueda y filtros optimizados
- Lazy loading potencial
- Mínimo re-renders con React hooks

---

## 🔧 Tecnologías Utilizadas

- **React 19** - Framework principal
- **Vite** - Build tool
- **React Router v7** - Navegación
- **Context API** - Gestión de estado global
- **localStorage** - Persistencia de datos
- **CSS3** - Estilos con gradientes y animaciones
- **Unsplash** - Imágenes de productos

---

## 👨‍💻 Autor

**Ángel Marcelino Sabelle Madrid**  
📧 ang.sabelle@duocuc.cl  
Rama: `feature/catalogo-angel` → `AngelSabelle`

---

## 📝 Notas de Desarrollo

- Código **100% modular** y reutilizable
- **Export default** en todos los componentes
- Consistencia con el tema de **María José Contreras** (rama MariaContreras)
- Todos los requerimientos **LG-** implementados
- **Semillas de datos** listas para producción
- Sin dependencias externas adicionales necesarias

---

## 🎉 Estado del Proyecto

✅ **COMPLETADO** - Todos los componentes, páginas y funcionalidades implementadas y probadas.

El módulo está listo para ser integrado con las demás secciones del proyecto Level-Up Gamer.
