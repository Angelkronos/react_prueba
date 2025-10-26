import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

export default function HeroSection() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Intentar reproducir el video una vez que esté listo
    const playVideo = async () => {
      try {
        await video.play();
        console.log('✅ Video reproduciéndose correctamente');
      } catch (error) {
        console.warn('⚠️ Autoplay bloqueado o error:', error);
        // El usuario deberá interactuar con la página para iniciar el video
      }
    };

    // Esperar a que el video esté listo
    if (video.readyState >= 3) {
      playVideo();
    } else {
      video.addEventListener('canplay', playVideo, { once: true });
    }

    return () => {
      video.removeEventListener('canplay', playVideo);
    };
  }, []);

  const handleVideoLoad = () => {
    console.log('📹 Video cargado exitosamente');
    setVideoLoaded(true);
    setHasError(false);
  };

  const handleVideoError = (e) => {
    console.error('❌ Error al cargar el video:', e);
    console.log('Verifica que exista: /public/assets/videos/hero-bg.mp4');
    setHasError(true);
    setVideoLoaded(true); // Mostrar fallback
  };

  return (
    <section 
      className="hero-section" 
      role="banner" 
      aria-label="Video promocional de Level-Up Gamer"
    >
      {/* Video de fondo con manejo de errores */}
      {!hasError && (
        <video
          ref={videoRef}
          className={`hero-video ${videoLoaded ? 'video-visible' : 'video-hidden'}`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
        >
          <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      )}

      {/* Fallback si hay error con el video */}
      {hasError && (
        <div className="hero-fallback-bg"></div>
      )}

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
