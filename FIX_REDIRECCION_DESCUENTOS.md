# 🔧 FIX: Redirección de Descuentos

## ❌ Problema Identificado
Las categorías en `PromoDuoc.jsx` no coincidían con las claves del objeto `descuentos` en `DescuentoDetalle.jsx`.

## ✅ Solución Aplicada

### Antes:
```javascript
// PromoDuoc.jsx
category: 'bundles'  ❌
category: 'envio'    ❌

// DescuentoDetalle.jsx
descuentos = {
  bundle: { ... }        ← No coincide
  'envio-gratis': { ... } ← No coincide
}
```

### Después:
```javascript
// PromoDuoc.jsx
category: 'bundle'       ✅
category: 'envio-gratis' ✅

// DescuentoDetalle.jsx
descuentos = {
  bundle: { ... }        ← ✅ Coincide
  'envio-gratis': { ... } ← ✅ Coincide
}
```

## 🎯 URLs Correctas

Ahora las redirecciones funcionan correctamente:

| Botón | Redirección | Estado |
|-------|-------------|--------|
| 20% OFF Accesorios | `/descuentos/accesorios` | ✅ |
| Bundle 25% OFF | `/descuentos/bundle` | ✅ |
| Envío Gratis | `/descuentos/envio-gratis` | ✅ |

## 🧪 Cómo Probar

1. Login con: `estudiante@duoc.cl` / `duoc123`
2. Ve a: `/ofertas`
3. Click en cualquier botón "Canjear Descuento"
4. **Resultado esperado:** Redirección exitosa a la página de detalle

## 📝 Archivos Modificados

- ✅ `/src/pages/ofertas/PromoDuoc.jsx` - Categorías corregidas

---

**Fecha:** 26 de octubre de 2025
**Fix:** Categorías sincronizadas entre PromoDuoc y DescuentoDetalle
