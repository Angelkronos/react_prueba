# Testing de Descuentos DUOC

## 🔐 Usuarios de Prueba

### Usuario sin email DUOC (restringido)
- **Email:** `demo@levelup.cl`
- **Password:** `demo123`
- **Resultado:** No puede acceder a descuentos (modal de advertencia)

### Usuario con email DUOC (acceso completo) ✅
- **Email:** `estudiante@duoc.cl`
- **Password:** `duoc123`
- **Resultado:** Puede canjear todos los descuentos y acceder a páginas de detalle

## 📋 Cómo probar

### 1. Sin sesión iniciada
1. Ve a `/ofertas`
2. Haz clic en cualquier botón "🔐 Canjear Descuento"
3. **Resultado esperado:** Modal pidiendo iniciar sesión con opciones:
   - 🔐 Iniciar Sesión → Redirige a `/login`
   - 📝 Crear Cuenta → Redirige a `/registro`

### 2. Con usuario NO DUOC (demo@levelup.cl)
1. Inicia sesión con `demo@levelup.cl` / `demo123`
2. Ve a `/ofertas`
3. Verás un banner naranja: "⚠️ Sesión iniciada como: demo@levelup.cl"
4. Haz clic en "🔐 Canjear Descuento"
5. **Resultado esperado:** Modal de restricción:
   - Mensaje: "Este beneficio es exclusivo para estudiantes DUOC UC..."
   - Muestra credenciales de prueba de usuario DUOC
   - Opciones: Entendido | Ver Productos

### 3. Con usuario DUOC (estudiante@duoc.cl) ✅
1. Inicia sesión con `estudiante@duoc.cl` / `duoc123`
2. Ve a `/ofertas`
3. Verás un banner verde: "✅ Sesión iniciada como: estudiante@duoc.cl"
4. Botones mostrarán "🎓 Canjear Descuento"
5. Haz clic en cualquier botón
6. **Resultado esperado:** Redirige a página de detalle del descuento:
   - `/descuentos/accesorios` → Descuento 20% OFF
   - `/descuentos/bundles` → Bundle Gamer 25% OFF
   - `/descuentos/envio` → Envío Gratis

## 🎯 Páginas de Detalle de Descuentos

Cada página de detalle muestra:
- **Hero Section** con imagen y título del descuento
- **Código Promocional** con botón "Copiar Código"
- **Detalles del Beneficio** (lista de características)
- **Información** (validez, monto mínimo, restricciones)
- **Cómo Usar** (pasos numerados)
- **Botones de Acción:**
  - � Ir a Comprar Ahora → Redirige a `/productos?categoria=...`
  - Ver Más Ofertas → Vuelve a `/ofertas`

### Descuentos disponibles:

#### 1. Accesorios (20% OFF)
- **URL:** `/descuentos/accesorios`
- **Código:** `DUOC20`
- **Válido en:** Teclados, mouse, headsets, mousepads, controles
- **Botón "Ir a Comprar":** → `/productos?categoria=accesorios`

#### 2. Bundle Gamer (25% OFF)
- **URL:** `/descuentos/bundles`
- **Código:** `DUOCBUNDLE25`
- **Incluye:** Teclado mecánico + Mouse + Headset 7.1
- **Botón "Ir a Comprar":** → `/productos?categoria=bundles`

#### 3. Envío Gratis
- **URL:** `/descuentos/envio`
- **Código:** `DUOCSHIP`
- **Requisito:** Primera compra sobre $25.000
- **Botón "Ir a Comprar":** → `/productos?categoria=envio`

## 🐛 Debugging

Si los botones no funcionan:

1. **Abre la consola del navegador (F12)**
2. Haz clic en "Canjear Descuento"
3. Busca logs:
   ```
   🔍 Usuario actual: {email: "...", ...}
   🔍 Email del usuario: estudiante@duoc.cl
   ✅ Usuario válido, mostrando código
   ```

4. Si ves:
   - `❌ Usuario no autenticado` → Necesitas iniciar sesión
   - `❌ Email no es de DUOC: demo@levelup.cl` → Necesitas email @duoc.cl

## 🎯 Códigos Promocionales

- **DUOC20** → 20% descuento en accesorios
- **DUOCBUNDLE25** → 25% descuento en bundle gamer
- **DUOCSHIP** → Envío gratis con email @duoc.cl

## 🔄 Cambiar de usuario

1. Cierra sesión (si hay botón logout)
2. O borra localStorage en consola:
   ```javascript
   localStorage.removeItem('user');
   location.reload();
   ```
3. Inicia sesión con otro usuario
