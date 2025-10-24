import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import blogArticles from '../../data/blogData';
import './Blog.css';

function BlogPost() {
  const { id } = useParams();
  const article = blogArticles.find(article => article.id === parseInt(id));

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Blog Gamer | Level-Up Gamer`;
    }
  }, [article]);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  return (
    <div className="blog-post-container">
      <article className="blog-post">
        <Link to="/blog" className="blog-post-back">
          ← Volver al blog
        </Link>

        <div className="blog-post-header">
          <img 
            src={article.image} 
            alt={article.title}
            className="blog-post-image"
          />
          
          <div className="blog-post-meta">
            <span className="blog-post-category">{article.category}</span>
            <time className="blog-post-date">{formatDate(article.date)}</time>
          </div>

          <h1 className="blog-post-title">{article.title}</h1>
        </div>

        <div className="blog-post-content">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="blog-post-paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="blog-post-footer">
          <Link to="/blog" className="blog-post-back-button">
            ← Volver al blog
          </Link>
        </div>
      </article>

      <aside className="blog-post-sidebar">
        <h3 className="sidebar-title">Artículos relacionados</h3>
        <div className="sidebar-articles">
          {blogArticles
            .filter(a => a.id !== article.id && a.category === article.category)
            .slice(0, 3)
            .map(relatedArticle => (
              <Link 
                key={relatedArticle.id}
                to={`/blog/${relatedArticle.id}`}
                className="sidebar-article"
              >
                <img 
                  src={relatedArticle.image} 
                  alt={relatedArticle.title}
                  className="sidebar-article-image"
                />
                <div className="sidebar-article-info">
                  <span className="sidebar-article-category">{relatedArticle.category}</span>
                  <h4 className="sidebar-article-title">{relatedArticle.title}</h4>
                </div>
              </Link>
            ))}
          
          {blogArticles.filter(a => a.id !== article.id && a.category === article.category).length === 0 && (
            blogArticles
              .filter(a => a.id !== article.id)
              .slice(0, 3)
              .map(relatedArticle => (
                <Link 
                  key={relatedArticle.id}
                  to={`/blog/${relatedArticle.id}`}
                  className="sidebar-article"
                >
                  <img 
                    src={relatedArticle.image} 
                    alt={relatedArticle.title}
                    className="sidebar-article-image"
                  />
                  <div className="sidebar-article-info">
                    <span className="sidebar-article-category">{relatedArticle.category}</span>
                    <h4 className="sidebar-article-title">{relatedArticle.title}</h4>
                  </div>
                </Link>
              ))
          )}
        </div>
      </aside>
    </div>
  );
}

export default BlogPost;
