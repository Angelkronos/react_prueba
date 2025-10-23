import { Link } from 'react-router-dom';
import './NewsSection.css';

function NewsSection() {
  const news = [
    {
      id: 1,
      title: 'Nuevos lanzamientos confirmados para 2025',
      description: 'Los títulos AAA más esperados del año están por llegar. Descubre qué juegos dominarán la escena gaming.',
      image: '/assets/images/hero.jpg',
      date: '20 Oct 2025',
      category: 'Lanzamientos',
      link: '/productos'
    },
    {
      id: 2,
      title: 'Guía: Cómo armar tu setup gamer perfecto',
      description: 'Desde la silla hasta el monitor, te mostramos qué necesitas para crear el setup definitivo sin gastar de más.',
      image: '/assets/images/hero2.jpg',
      date: '18 Oct 2025',
      category: 'Guías',
      link: '/productos?categoria=accesorios'
    },
    {
      id: 3,
      title: 'Torneos y eventos gaming de octubre',
      description: 'Participa en nuestros torneos online y gana premios exclusivos. Revisa el calendario completo aquí.',
      image: '/assets/images/hero3.jpg',
      date: '15 Oct 2025',
      category: 'Eventos',
      link: '/ayuda'
    }
  ];

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
                  src={item.image} 
                  alt={item.title}
                  className="news-image"
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
