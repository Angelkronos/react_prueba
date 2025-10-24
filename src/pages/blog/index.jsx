import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import blogArticles from '../../data/blogData';
import './Blog.css';

function BlogList() {
  useEffect(() => {
    document.title = 'Blog Gamer | Level-Up Gamer';
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  return (
    <div className="blog-container">
      <div className="blog-hero">
        <h1 className="blog-title">Blog Gamer</h1>
        <p className="blog-subtitle">Noticias, guías, reviews y todo sobre el mundo del gaming</p>
      </div>

      <div className="blog-grid">
        {blogArticles.map((article) => (
          <article key={article.id} className="blog-card">
            <div className="blog-card-image-wrapper">
              <img 
                src={article.image} 
                alt={article.title}
                className="blog-card-image"
                loading="lazy"
              />
              <span className="blog-card-category">{article.category}</span>
            </div>
            
            <div className="blog-card-content">
              <div className="blog-card-meta">
                <time className="blog-card-date">{formatDate(article.date)}</time>
              </div>
              
              <h2 className="blog-card-title">
                <Link to={`/blog/${article.id}`} className="blog-card-title-link">
                  {article.title}
                </Link>
              </h2>
              
              <p className="blog-card-excerpt">{article.excerpt}</p>
              
              <Link to={`/blog/${article.id}`} className="blog-card-button">
                Leer más →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
