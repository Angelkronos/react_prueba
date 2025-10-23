import { Link } from 'react-router-dom';
import './CategoriesGrid.css';

function CategoriesGrid() {
  const categories = [
    {
      id: 1,
      name: 'Consolas',
      image: '/assets/images/hero.jpg',
      link: '/categorias?categoria=consolas',
      icon: '🎮'
    },
    {
      id: 2,
      name: 'PC Gamer',
      image: '/assets/images/hero2.jpg',
      link: '/categorias?categoria=pc',
      icon: '�'
    },
    {
      id: 3,
      name: 'Accesorios',
      image: '/assets/images/hero3.jpg',
      link: '/categorias?categoria=accesorios',
      icon: '⌨️'
    },
    {
      id: 4,
      name: 'Periféricos',
      image: '/assets/images/chica.jpg',
      link: '/categorias?categoria=perifericos',
      icon: '�️'
    },
    {
      id: 5,
      name: 'Headsets',
      image: '/assets/images/chico.jpg',
      link: '/categorias?categoria=audio',
      icon: '🎧'
    },
    {
      id: 6,
      name: 'Monitores',
      image: '/assets/images/hero.jpg',
      link: '/categorias?categoria=monitores',
      icon: '🖥️'
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
