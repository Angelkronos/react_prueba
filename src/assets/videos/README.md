# Carpeta de videos

Esta carpeta está destinada a contener metadatos y/o videos usados por la app.

Recomendaciones:

- Para archivos de video grandes (mp4/webm) es preferible colocarlos en `public/assets/videos/` y referenciarlos con rutas absolutas como `/assets/videos/mi-video.mp4`.
- Si prefieres importar videos desde `src/assets/videos/`, puedes importarlos directamente en componentes usando `import video from '../../assets/videos/mi-video.mp4'`. Ten en cuenta que Vite empaqueta archivos importados y puede aumentar el tamaño del bundle.

Estructura sugerida:

- `public/assets/videos/` -> vídeos públicos (recomendado para producción)
- `src/assets/videos/index.js` -> exporta un array con metadata de videos (id, src, poster, title, description)

Ejemplo en `src/assets/videos/index.js`:

```js
// const videos = [
//   {
//     id: 'trailer-1',
//     src: '/assets/videos/trailer-1.mp4', // o importado desde src
//     poster: '/assets/images/trailer-1-poster.jpg',
//     title: 'Trailer 1',
//   }
// ];
// export default videos;
```

Uso rápido (componente):

- Importa el componente `VideoPlayer` desde `src/components/ui/VideoPlayer.jsx` y pásale `src` y `poster`.

Si quieres que añada una entrada de ejemplo o un video de muestra (no puedo subir binarios), dime el nombre del archivo y la ruta que vas a usar y puedo añadir la metadata correspondiente en `index.js`.
