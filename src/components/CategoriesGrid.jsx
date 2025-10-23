import { Link } from 'react-router-dom';
import './CategoriesGrid.css';

function CategoriesGrid() {
  const categories = [
    {
      id: 1,
      name: 'PlayStation 5',
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop',
      link: '/productos?plataforma=ps5',
      icon: '🎮'
    },
    {
      id: 2,
      name: 'Xbox Series',
      image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=400&fit=crop',
      link: '/productos?plataforma=xbox',
      icon: '🟢'
    },
    {
      id: 3,
      name: 'Nintendo Switch',
      image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=400&fit=crop',
      link: '/productos?plataforma=nintendo',
      icon: '🔴'
    },
    {
      id: 4,
      name: 'PC Gaming',
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=400&fit=crop',
      link: '/productos?plataforma=pc',
      icon: '💻'
    },
    {
      id: 5,
      name: 'Periféricos',
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop',
      link: '/productos?categoria=accesorios',
      icon: '⌨️'
    },
    {
      id: 6,
      name: 'Headsets',
      image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop',
      link: '/productos?categoria=audio',
      icon: '🎧'
    }
  ];

  return (
    <section className="categories-grid-section">
      <div className="categories-container-grid">
        <div className="section-header-cat">
          <h2 className="section-title-cat">
            <span className="title-icon-cat">🎯</span>
            CATEGORÍAS PRINCIPALES
          </h2>
          <p className="section-subtitle-cat">
            Explora nuestro catálogo por plataforma y accesorios
          </p>
        </div>

        <div className="categories-grid-layout">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={category.link} 
              className="category-card-grid"
            >
              <div className="category-image-wrapper">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="category-image"
                />
                <div className="category-overlay">
                  <span className="category-icon-large">{category.icon}</span>
                </div>
              </div>
              <h3 className="category-name-grid">{category.name}</h3>
              <div className="category-shine"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesGrid;
