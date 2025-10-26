import React from 'react';
import './VideoPlayer.css';

export default function VideoPlayer({ src, poster, autoPlay = false, loop = false, muted = true, controls = true, className = '' }) {
  if (!src) return null;

  return (
    <div className={`video-player ${className}`}>
      <video
        src={src}
        poster={poster}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
      />
    </div>
  );
}
