import { useState } from 'react';
import './ShareButton.css';

const ShareButton = ({ product }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = `${window.location.origin}/productos/${product.id}`;
  const shareText = `¡Mira este producto en Level-Up Gamer! ${product.name} - ${product.price}`;

  const handleShare = (platform) => {
    const urls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      email: `mailto:?subject=${encodeURIComponent(product.name)}&body=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setShowMenu(false);
      }, 2000);
    } else if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
      setShowMenu(false);
    }
  };

  // Web Share API para móviles
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: shareText,
          url: shareUrl,
        });
        setShowMenu(false);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      setShowMenu(!showMenu);
    }
  };

  return (
    <div className="share-button-container">
      <button className="btn-share" onClick={handleNativeShare}>
        🔗 Compartir
      </button>

      {showMenu && (
        <div className="share-menu">
          <div className="share-menu-header">
            <span>Compartir producto</span>
            <button className="btn-close-share" onClick={() => setShowMenu(false)}>
              ✕
            </button>
          </div>

          <div className="share-options">
            <button className="share-option whatsapp" onClick={() => handleShare('whatsapp')}>
              <span className="share-icon">📱</span>
              <span>WhatsApp</span>
            </button>

            <button className="share-option facebook" onClick={() => handleShare('facebook')}>
              <span className="share-icon">📘</span>
              <span>Facebook</span>
            </button>

            <button className="share-option twitter" onClick={() => handleShare('twitter')}>
              <span className="share-icon">🐦</span>
              <span>Twitter</span>
            </button>

            <button className="share-option telegram" onClick={() => handleShare('telegram')}>
              <span className="share-icon">✈️</span>
              <span>Telegram</span>
            </button>

            <button className="share-option email" onClick={() => handleShare('email')}>
              <span className="share-icon">📧</span>
              <span>Email</span>
            </button>

            <button className="share-option copy" onClick={() => handleShare('copy')}>
              <span className="share-icon">{copied ? '✓' : '📋'}</span>
              <span>{copied ? '¡Copiado!' : 'Copiar enlace'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
