import './SocialBar.css';

function SocialBar() {
  const socialLinks = [
    {
      id: 1,
      name: 'Instagram',
      icon: '�',
      url: 'https://instagram.com/levelupgamer',
      color: '#E4405F',
      followers: '40K',
      gradient: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'
    },
    {
      id: 2,
      name: 'TikTok',
      icon: '🎵',
      url: 'https://tiktok.com/@levelupgamer',
      color: '#00f2ea',
      followers: '85K',
      gradient: 'linear-gradient(45deg, #00f2ea 0%, #ff0050 100%)'
    },
    {
      id: 3,
      name: 'YouTube',
      icon: '▶️',
      url: 'https://youtube.com/@levelupgamer',
      color: '#FF0000',
      followers: '120K',
      gradient: 'linear-gradient(45deg, #FF0000 0%, #c4302b 100%)'
    },
    {
      id: 4,
      name: 'Discord',
      icon: '💬',
      url: 'https://discord.gg/levelupgamer',
      color: '#5865F2',
      followers: '25K',
      gradient: 'linear-gradient(45deg, #5865F2 0%, #404eed 100%)'
    },
    {
      id: 5,
      name: 'Twitch',
      icon: '�',
      url: 'https://twitch.tv/levelupgamer',
      color: '#9146FF',
      followers: '35K',
      gradient: 'linear-gradient(45deg, #9146FF 0%, #772ce8 100%)'
    },
    {
      id: 6,
      name: 'Twitter/X',
      icon: '𝕏',
      url: 'https://twitter.com/levelupgamer',
      color: '#1DA1F2',
      followers: '50K',
      gradient: 'linear-gradient(45deg, #1DA1F2 0%, #0d8bd9 100%)'
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
              style={{ 
                '--social-color': social.color,
                '--social-gradient': social.gradient
              }}
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
