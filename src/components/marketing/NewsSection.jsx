import { Link } from 'react-router-dom';
import blogArticles from '../../data/blogData';
import './NewsSection.css';

function NewsSection() {
  // Mostrar los 3 artículos más recientes del blog
  const news = blogArticles.slice(0, 3).map(article => ({
    id: article.id,
    title: article.title,
    description: article.excerpt,
    image: article.image,
    date: new Date(article.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }),
    category: article.category,
    link: `/blog/${article.id}`
  }));

  return (
    <section className="news-section">
      <div className="news-container">
        <div className="news-header">
          <h2 className="news-title">
            <span className="title-icon">📰</span>
            NOVEDADES DEL MUNDO GAMER
          </h2>
          <p className="news-subtitle">
            Mantente al día con las últimas noticias, guías y eventos
          </p>
        </div>

        <div className="news-grid">
          {news.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-image-wrapper">
                <img 
                  src={item.image || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80'} 
                  alt={item.title}
                  className="news-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80';
                  }}
                />
                <div className="news-category-badge">{item.category}</div>
              </div>

              <div className="news-content">
                <div className="news-meta">
                  <span className="news-date">📅 {item.date}</span>
                </div>

                <h3 className="news-card-title">{item.title}</h3>
                
                <p className="news-description">{item.description}</p>

                <Link to={item.link} className="news-link">
                  Leer más <span className="news-arrow">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
