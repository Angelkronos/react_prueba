# 🎮 Hero Background Image

## 📁 Ubicación actual:
```
/public/assets/images/hero-bg.svg (✅ Creado - SVG temporal)
```

## ✅ **Imagen SVG temporal incluida**

Actualmente el proyecto usa un **SVG vectorial optimizado** que incluye:
- 🎨 Degradado de colores cyber (morado, negro)
- ✨ Círculos de luz neón (verde, azul, rosa)
- 🎮 Formas geométricas gaming (controlador, teclado)
- 🌐 Grid pattern cyber
- ⭐ Partículas flotantes
- 📟 Líneas de código abstractas
- **Peso:** Solo 4KB (súper ligero)

---

## 🔄 **Para reemplazar con imagen real (opcional):**

### Ubicación:
```
/public/assets/images/hero-bg.jpg
```

### Características técnicas:
- **Formato:** JPG o WebP
- **Dimensiones mínimas:** 1920x1080px (Full HD)
- **Peso:** Máximo 500KB (optimizado)
- **Aspecto:** 16:9

### Contenido visual sugerido:
1. **Gaming setup** con luces neón (verde/azul/rosa)
2. **Teclado mecánico RGB** o periféricos gaming
3. **Pantallas con juegos** de fondo
4. **Ambiente oscuro** con acentos luminosos
5. **Textura abstracta** cyber/futurista

## 🎨 Paleta de colores recomendada en la imagen:
- Tonos oscuros: Negro, morado oscuro, azul marino
- Acentos luminosos: Verde neón (#39ff14), Azul eléctrico (#1e90ff), Rosa (#ff00a8)

## 🔧 **Si quieres cambiar a imagen JPG:**

1. Descarga una imagen gaming de alta calidad
2. Renómbrala a `hero-bg.jpg`
3. Guárdala en esta carpeta
4. Actualiza `HeroSection.css` línea 17:
   ```css
   url('/assets/images/hero-bg.jpg');
   ```

### Opción 1: Usar solo degradado (sin imagen)
Cambia en `HeroSection.css` línea 16-18:
```css
background-image: 
  linear-gradient(135deg, rgba(26, 11, 46, 0.95) 0%, rgba(0, 0, 0, 0.85) 100%);
```

### Opción 2: Usar un servicio de imágenes placeholder
Crea `hero-bg.jpg` desde:
- https://unsplash.com/s/photos/gaming-setup
- https://www.pexels.com/search/gaming/
- https://pixabay.com/images/search/gaming%20room/

## ✅ Verificación:
Una vez agregada la imagen, verifica en:
```
http://localhost:5174/
```

El Hero debería mostrar:
- Imagen de fondo
- Overlay morado radial en esquina superior izquierda
- Texto "LEVEL-UP GAMER" con neón verde parpadeante
- Dos botones con efectos hover
