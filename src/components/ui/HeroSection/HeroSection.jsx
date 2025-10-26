import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

export default function HeroSection() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(true); // Cambiado a true para mostrar el video desde el inicio

  useEffect(() => {
    // Forzar reproducción del video cuando el componente se monta
    if (videoRef.current) {
      console.log('🎬 Intentando cargar video desde:', videoRef.current.src);
      
      // Esperar un momento para que el DOM esté listo
      const timer = setTimeout(() => {
        videoRef.current.play()
          .then(() => {
            console.log('✅ Video reproduciéndose correctamente');
            setVideoLoaded(true);
          })
          .catch(error => {
            console.error('❌ Error al reproducir video:', error);
            console.log('Verifica que el archivo exista en: /public/assets/videos/videeeo.mp4');
          });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleVideoLoad = () => {
    console.log('📹 Video cargado correctamente desde:', videoRef.current?.currentSrc);
    setVideoLoaded(true);
  };

  const handleVideoError = (e) => {
    console.error('❌ Error al cargar el video:', e);
    console.error('Ruta intentada:', videoRef.current?.currentSrc);
    console.log('Archivo esperado: /assets/videos/videeeo.mp4');
  };

  return (
    <section 
      className="hero-section" 
      role="banner" 
      aria-label="Video promocional de Level-Up Gamer"
    >
      {/* Video de fondo optimizado para rendimiento */}
      <video
        ref={videoRef}
        className={`hero-video ${videoLoaded ? 'video-visible' : 'video-hidden'}`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/images/hero.jpg"
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
      >
        <source src="/assets/videos/videeeo.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Overlay degradado radial */}
      <div className="hero-overlay"></div>

      {/* Contenido central */}
      <div className="hero-content">
        <h1 className="hero-title">LEVEL-UP GAMER</h1>
        <p className="hero-subtitle">
          Descubre los mejores accesorios y ofertas exclusivas.
        </p>
        <div className="hero-buttons">
          <button 
            className="hero-btn hero-btn-primary"
            onClick={() => navigate('/productos')}
            aria-label="Explorar catálogo de productos"
          >
            🎮 Explorar Catálogo
          </button>
          <button 
            className="hero-btn hero-btn-secondary"
            onClick={() => navigate('/ofertas')}
            aria-label="Ver descuentos DUOC"
          >
            💥 Ver Descuentos DUOC
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#featured-products" className="scroll-down" aria-label="Desplazarse al contenido principal">
        ⬇️
      </a>
    </section>
  );
}
