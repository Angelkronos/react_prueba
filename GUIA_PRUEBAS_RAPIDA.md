# 🧪 GUÍA RÁPIDA DE PRUEBAS - Nuevas Funcionalidades

## 🚀 Inicio Rápido

### 1. Preparación
```bash
# Asegúrate de que el servidor esté corriendo
npm run dev
```

### 2. Login como Estudiante DUOC
```
URL: http://localhost:5174/login
Email: estudiante@duoc.cl
Password: duoc123
```

---

## ✅ PRUEBA 1: Validación en Tiempo Real

### Objetivo: Ver la validación automática del código

**Pasos:**
1. Login con estudiante DUOC
2. Ve a: `http://localhost:5174/ofertas`
3. Click en cualquier botón "Canjear Descuento"

**Qué observar:**
- ⟳ Spinner de validación (aparece 300ms)
- ✅ Mensaje verde: "20% de descuento" (o similar)
- 📊 Si tienes items: "🛒 Tienes X producto(s) en tu carrito"

**Resultado esperado:**
```
┌────────────────────────────────┐
│  ⟳ Validando código...        │  ← Por 300ms
└────────────────────────────────┘

Luego se convierte en:

┌────────────────────────────────┐
│  ✅ 20% de descuento          │  ← Verde neón
└────────────────────────────────┘
```

---

## 🛒 PRUEBA 2: Aplicar Descuento con Carrito Vacío

### Objetivo: Ver cómo funciona cuando no hay productos

**Pasos:**
1. Asegúrate de tener el carrito vacío
2. Ve a: `http://localhost:5174/descuentos/accesorios`

**Qué observar:**
- ✅ Validación muestra código válido
- 🔘 Botón principal dice "🛍️ Ir a Comprar"
- 📋 Hay un botón adicional "Copiar Código"

**Acción:**
- Click en "Ir a Comprar"

**Resultado esperado:**
- ✅ Código copiado al portapapeles
- ✅ Redirección a `/productos?categoria=accesorios`
- ✅ Puedes pegar (Ctrl+V) y ver el código: DUOC20ACC

---

## 🎯 PRUEBA 3: Aplicar Descuento con Items en Carrito

### Objetivo: Probar la integración completa con el carrito

**Pasos:**
1. Ve a: `http://localhost:5174/productos`
2. Agrega 2-3 accesorios al carrito (teclado, mouse, etc.)
3. Ve a: `http://localhost:5174/descuentos/accesorios`

**Qué observar:**
```
┌────────────────────────────────────┐
│  ✅ 20% de descuento              │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│  🛒 Tienes 3 producto(s) en tu    │
│     carrito                        │
│  Subtotal: $85.000                 │
└────────────────────────────────────┘

[🛒 Aplicar al Carrito]  ← Botón verde brillante
```

**Acción:**
- Click en "Aplicar al Carrito"

**Resultado esperado:**
1. Modal aparece:
   ```
   ✅
   ¡Descuento Aplicado!
   El descuento se ha aplicado correctamente a tu carrito.
   Código: DUOC20ACC
   [Loader girando]
   Redirigiendo al carrito...
   ```
2. Después de 2.5 segundos:
   - ✅ Redirección a `/carrito`
   - ✅ Descuento visible en el carrito

---

## ⚠️ PRUEBA 4: Validación de Monto Mínimo

### Objetivo: Ver cómo se valida el monto mínimo

**Pasos:**
1. Vacía el carrito
2. Agrega 1 producto de $20.000
3. Ve a: `http://localhost:5174/descuentos/bundle`

**Qué observar:**
```
⚠️ Monto mínimo: $50.000

[🛒 Aplicar al Carrito]  ← GRIS (deshabilitado)
```

**Acción:**
1. Agrega más productos hasta superar $50.000
2. Vuelve a la página de descuento

**Resultado esperado:**
```
✅ 25% de descuento  ← VERDE (habilitado)

🛒 Tienes 4 producto(s) en tu carrito
Subtotal: $65.000

[🛒 Aplicar al Carrito]  ← VERDE (habilitado)
```

---

## 🔄 PRUEBA 5: Descuento Ya Aplicado

### Objetivo: Ver cómo cambia la interfaz con descuento activo

**Pasos:**
1. Aplica un descuento exitosamente (ver PRUEBA 3)
2. Desde el carrito, vuelve a: `/descuentos/accesorios`

**Qué observar:**
```
✅ Descuento ya aplicado al carrito  ← Mensaje verde pulsante

[✅ Ver Carrito]  ← Botón azul (cambió de "Aplicar")
```

**Acción:**
- Click en "Ver Carrito"

**Resultado esperado:**
- ✅ Redirección directa a `/carrito`
- ✅ Descuento sigue aplicado

---

## 📋 PRUEBA 6: Copiar Código Manualmente

### Objetivo: Probar el botón de copiar

**Pasos:**
1. Ve a cualquier página de descuento
2. Click en el ícono 📋 junto al código

**Resultado esperado:**
- ✅ Alert: "📋 Código copiado al portapapeles: DUOC20ACC"
- ✅ Código en el portapapeles (puedes pegarlo)

**Alternativa:**
- Click en el botón "📋 Copiar Código" (botón independiente)
- ✅ Mismo resultado

---

## 🚫 PRUEBA 7: Usuario No DUOC

### Objetivo: Ver validación de email

**Pasos:**
1. Cierra sesión
2. Login con: `demo@levelup.cl` / `demo123`
3. Intenta ir a: `/ofertas`
4. Click en "Canjear Descuento"

**Resultado esperado:**
- ⚠️ Alert: "Este beneficio es exclusivo para estudiantes DUOC UC con correo @duoc.cl"
- ✅ Redirección a `/ofertas`

---

## 🎮 PRUEBA 8: Flujo Completo End-to-End

### Objetivo: Probar todo el flujo desde cero

**Pasos:**
1. **Inicio:** `http://localhost:5174`
2. **Login:** estudiante@duoc.cl / duoc123
3. **Navegar:** Click en "Ofertas" en el navbar
4. **Ver descuentos:** Observa las 3 tarjetas
5. **Elegir:** Click "Canjear" en "20% OFF Accesorios"
6. **Validación:** Observa la validación en tiempo real
7. **Comprar:** Click "Ir a Comprar"
8. **Agregar productos:** Agrega 3 accesorios
9. **Volver:** Regresa a `/descuentos/accesorios`
10. **Aplicar:** Click "Aplicar al Carrito"
11. **Modal:** Observa el modal de éxito
12. **Carrito:** Verifica el descuento en el carrito
13. **Checkout:** Procede con la compra

**Tiempo estimado:** 30-45 segundos
**Resultado esperado:** ✅ Todo funciona sin errores

---

## 📊 CHECKLIST DE VERIFICACIÓN

Marca cada elemento al probarlo:

### Validación en Tiempo Real
- [ ] Spinner aparece al cargar
- [ ] Mensaje de validación correcto
- [ ] Validación actualiza al cambiar carrito
- [ ] Estados visuales correctos (verde/rojo)

### Integración con Carrito
- [ ] Info del carrito se muestra
- [ ] Botón cambia según estado
- [ ] Descuento se aplica correctamente
- [ ] Redirección al carrito funciona
- [ ] Estado "ya aplicado" se muestra

### Validaciones
- [ ] Email @duoc.cl requerido
- [ ] Monto mínimo validado
- [ ] Categoría verificada
- [ ] No permite duplicados

### Funcionalidad
- [ ] Copiar código funciona
- [ ] Modal aparece y desaparece
- [ ] Navegación entre páginas fluida
- [ ] Botones responden correctamente

### Visual
- [ ] Animaciones suaves
- [ ] Colores neón correctos
- [ ] Responsive en mobile
- [ ] Sin errores en consola

---

## 🐛 TROUBLESHOOTING

### Problema: Validación no aparece
**Solución:** Espera 300ms, el spinner debe aparecer primero

### Problema: Botón deshabilitado
**Solución:** Verifica:
- Email es @duoc.cl ✓
- Monto suficiente ✓
- Categoría correcta ✓

### Problema: Descuento no se aplica
**Solución:** Verifica en consola:
```javascript
// Abre DevTools (F12)
// Pestaña Console
// Busca mensajes del sistema
```

### Problema: Modal no cierra
**Solución:** Espera 2.5 segundos, cierra automáticamente

---

## 🎯 CASOS EDGE A PROBAR

1. **Carrito vacío completo** → Botón "Ir a Comprar"
2. **1 producto, pero categoría incorrecta** → Error específico
3. **Múltiples descuentos sucesivos** → Solo uno a la vez
4. **Navegar rápido entre páginas** → Sin crashes
5. **Cerrar sesión con descuento aplicado** → Se limpia

---

## 📱 PRUEBA EN DIFERENTES DISPOSITIVOS

### Desktop (1920x1080)
- [ ] Layout correcto
- [ ] Botones horizontales
- [ ] Hero 60vh

### Tablet (768px)
- [ ] Botones verticales
- [ ] Hero 50vh
- [ ] Código legible

### Mobile (480px)
- [ ] Todo stacked verticalmente
- [ ] Código más pequeño pero visible
- [ ] Botones full width

---

## ⏱️ TIEMPOS ESPERADOS

| Acción | Tiempo | Estado |
|--------|--------|--------|
| Validación inicial | 300ms | ⟳ |
| Aplicar descuento | 2.5s | ✅ |
| Copiar código | Instant | 📋 |
| Redirección | Instant | 🚀 |
| Modal visible | 2.5s | ⏱️ |

---

## 🎉 RESULTADO EXITOSO

Si todo funciona, deberías poder:
1. ✅ Ver validación en tiempo real
2. ✅ Aplicar descuentos con un click
3. ✅ Ver info del carrito en vivo
4. ✅ Recibir feedback claro de errores
5. ✅ Completar el flujo en <10 segundos

---

**🎮 ¡Disfruta probando el sistema mejorado!**

Para reportar bugs o sugerencias, documenta:
- URL donde ocurrió
- Usuario usado
- Pasos para reproducir
- Screenshot o video (opcional)
