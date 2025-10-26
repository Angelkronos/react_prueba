# 🎮 Guía de Pruebas - Sistema de Descuentos DUOC

## 📋 Descripción General
Este documento detalla el flujo completo del sistema de descuentos exclusivos para estudiantes DUOC UC.

---

## 🔐 Usuarios de Prueba

### Usuario DUOC (Acceso Completo)
- **Email:** estudiante@duoc.cl
- **Contraseña:** duoc123
- ✅ Puede acceder a todos los descuentos

### Usuario Regular (Acceso Denegado)
- **Email:** demo@levelup.cl
- **Contraseña:** demo123
- ❌ No puede acceder a descuentos DUOC

---

## 🚀 Flujo de Pruebas

### 1️⃣ Acceso a la Página de Ofertas
1. Navega a: `http://localhost:5174/ofertas`
2. Verás tres tarjetas de descuentos:
   - 🎮 20% OFF en Accesorios
   - 💻 Bundle Gamer 25% OFF
   - 📦 Envío Gratis DUOC

### 2️⃣ Validación de Autenticación

#### Caso A: Usuario NO autenticado
- **Acción:** Click en "Canjear Descuento" sin estar logueado
- **Resultado:** 
  - Alert: "⚠️ Debes iniciar sesión para ver los descuentos DUOC"
  - Redirección a `/login`

#### Caso B: Usuario sin correo @duoc.cl
- **Acción:** Login con `demo@levelup.cl`, luego click en "Canjear Descuento"
- **Resultado:**
  - Alert: "⚠️ Este beneficio es exclusivo para estudiantes DUOC UC con correo @duoc.cl"
  - Redirección a `/ofertas`

#### Caso C: Usuario con correo @duoc.cl ✅
- **Acción:** Login con `estudiante@duoc.cl`, luego click en "Canjear Descuento"
- **Resultado:**
  - Navegación exitosa a página de detalle

---

## 🎯 Páginas de Detalle de Descuentos

### Descuento 1: Accesorios
- **URL:** `/descuentos/accesorios`
- **Código:** `DUOC20ACC`
- **Beneficio:** 20% OFF en accesorios gaming
- **Categoría:** Accesorios

### Descuento 2: Bundle
- **URL:** `/descuentos/bundle`
- **Código:** `DUOCBUNDLE25`
- **Beneficio:** 25% OFF en bundles completos
- **Categoría:** Bundle

### Descuento 3: Envío Gratis
- **URL:** `/descuentos/envio-gratis`
- **Código:** `DUOCSHIP`
- **Beneficio:** Envío gratis sin monto mínimo
- **Categoría:** Todos

---

## 📄 Estructura de la Página de Detalle

### Hero Section
- Imagen de fondo del descuento
- Título con efecto neón verde
- Icono flotante (🛍️ o 🎓)

### Descripción
- Explicación detallada del beneficio
- Fondo oscuro con borde neón verde

### Código Promocional
- Cuadro destacado con el código
- Fuente monospace estilo terminal
- Efecto de glow neón

### Detalles del Beneficio
- Lista de características
- Checkmarks verdes animados
- Hover effect en cada ítem

### Botones de Acción
1. **"🛒 Usar Descuento"**
   - Copia el código al portapapeles
   - Muestra modal de éxito
   - Redirige a `/productos` después de 3 segundos

2. **"← Volver a Ofertas"**
   - Regresa a `/ofertas`

---

## ✨ Modal de Éxito

Aparece al presionar "Usar Descuento":

```
✅
¡Código Copiado!
Código aplicado correctamente a tu compra DUOC.
Código: [CÓDIGO]
[Loader animado]
Redirigiendo al catálogo...
```

- **Duración:** 3 segundos
- **Acción automática:** Redirección a productos
- **Animación:** Bounce + pulse en el ícono ✅

---

## 🎨 Elementos Visuales

### Colores
- **Neón Verde:** `#00ff9d`
- **Azul Eléctrico:** `#00b8ff`
- **Fondo Oscuro:** `#1a0033` a `#000000` (gradiente radial)

### Tipografía
- **Títulos:** Orbitron (Google Fonts)
- **Código:** Courier New (monospace)
- **Texto:** Segoe UI

### Efectos
- ✨ Glow neón en títulos y bordes
- 🎈 Animación float en iconos
- 🌟 Pulse en el modal de éxito
- 💫 Hover effects en botones y listas

---

## 🐛 Casos de Error

### URL Inválida
- **URL:** `/descuentos/invalido`
- **Resultado:**
  ```
  ❌ Descuento no encontrado
  El descuento que buscas no existe o ha sido removido.
  [Volver al inicio]
  ```

### Acceso sin Autenticación
- **Resultado:**
  - Alert + redirección a `/login`

### Acceso con Email Incorrecto
- **Resultado:**
  - Alert + redirección a `/ofertas`

---

## 📱 Responsive Design

### Desktop (> 768px)
- Hero: 60vh de altura
- Títulos: 3.5rem
- Código: 2.5rem
- Botones: Horizontal

### Tablet (768px)
- Hero: 50vh de altura
- Títulos: 2rem
- Código: 1.8rem
- Botones: Vertical (columna)

### Mobile (480px)
- Títulos: 1.5rem
- Código: 1.4rem
- Padding reducido
- Full width buttons

---

## 🔍 Verificaciones Técnicas

### Funcionalidad del Portapapeles
```javascript
navigator.clipboard.writeText(codigo)
```
- ✅ Funciona en navegadores modernos
- ⚠️ Requiere HTTPS o localhost

### useParams
```javascript
const { tipo } = useParams();
// Obtiene "accesorios", "bundle", o "envio-gratis"
```

### Validación de Usuario
```javascript
if (!user || !user.email.endsWith('@duoc.cl')) {
  // Redirección
}
```

---

## 🎯 Checklist de Pruebas

- [ ] Login con usuario DUOC funcional
- [ ] Login con usuario regular bloqueado
- [ ] Navegación desde /ofertas a /descuentos/:tipo
- [ ] Visualización correcta de los 3 tipos de descuentos
- [ ] Código copiado al portapapeles
- [ ] Modal de éxito aparece y desaparece
- [ ] Redirección automática después de 3 segundos
- [ ] Botón "Volver a Ofertas" funcional
- [ ] Página 404 para descuentos inválidos
- [ ] Responsive en mobile/tablet/desktop
- [ ] Animaciones y efectos neón funcionando

---

## 📝 Notas Adicionales

- **Tiempo de redirección:** 3 segundos después del modal
- **Categoría en productos:** Se agrega parámetro `?categoria=accesorios` al navegar
- **Seguridad:** Validación tanto en frontend como en cada carga de página
- **UX:** Mensajes claros y visuales para cada estado

---

**Última actualización:** 26 de octubre de 2025
**Versión:** 2.0 - Nueva arquitectura con páginas de detalle
