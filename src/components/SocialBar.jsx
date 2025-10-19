import './SocialBar.css';

function SocialBar() {
  const socialLinks = [
    {
      id: 1,
      name: 'Discord',
      icon: '💬',
      url: 'https://discord.gg/levelupgamer',
      color: '#5865F2',
      followers: '25K'
    },
    {
      id: 2,
      name: 'Twitch',
      icon: '📺',
      url: 'https://twitch.tv/levelupgamer',
      color: '#9146FF',
      followers: '15K'
    },
    {
      id: 3,
      name: 'YouTube',
      icon: '▶️',
      url: 'https://youtube.com/@levelupgamer',
      color: '#FF0000',
      followers: '50K'
    },
    {
      id: 4,
      name: 'Twitter',
      icon: '𝕏',
      url: 'https://twitter.com/levelupgamer',
      color: '#1DA1F2',
      followers: '30K'
    },
    {
      id: 5,
      name: 'Instagram',
      icon: '📷',
      url: 'https://instagram.com/levelupgamer',
      color: '#E4405F',
      followers: '40K'
    },
    {
      id: 6,
      name: 'TikTok',
      icon: '🎵',
      url: 'https://tiktok.com/@levelupgamer',
      color: '#000000',
      followers: '35K'
    }
  ];

  return (
    <section className="social-bar">
      <div className="social-bar-container">
        <div className="social-bar-header">
          <h2 className="social-bar-title">
            <span className="title-icon">🌐</span>
            ÚNETE A NUESTRA COMUNIDAD
          </h2>
          <p className="social-bar-subtitle">
            Síguenos en redes sociales y mantente al día con las últimas novedades, 
            torneos y contenido exclusivo.
          </p>
        </div>

        <div className="social-grid">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              style={{ '--social-color': social.color }}
            >
              <div className="social-card-header">
                <span className="social-icon">{social.icon}</span>
                <span className="social-name">{social.name}</span>
              </div>
              <div className="social-card-body">
                <span className="social-followers">{social.followers}</span>
                <span className="social-label">seguidores</span>
              </div>
              <div className="social-card-footer">
                <span className="social-cta">Seguir</span>
                <span className="social-arrow">→</span>
              </div>
            </a>
          ))}
        </div>

        <div className="social-stats">
          <div className="stat-item">
            <span className="stat-value">195K+</span>
            <span className="stat-label">Total Seguidores</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">50K+</span>
            <span className="stat-label">Comunidad Activa</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">24/7</span>
            <span className="stat-label">Soporte Online</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialBar;
