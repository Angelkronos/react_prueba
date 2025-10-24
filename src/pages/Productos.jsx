import { useState, useEffect } from 'react';
import { productsData } from '../data/productsData';
import { ProductCard, Filters, Comparador } from '../components/products';
import { Pagination } from '../components/ui';
import './Productos.css';

const Productos = () => {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [sortBy, setSortBy] = useState('featured');
  const [showComparador, setShowComparador] = useState(false);
  const [compareProducts, setCompareProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    applyFiltersAndSearch();
  }, [searchTerm, sortBy]);

  const applyFiltersAndSearch = () => {
    let result = [...products];

    // Búsqueda
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(product =>
        product.name.toLowerCase().includes(lowerSearch) ||
        product.description.toLowerCase().includes(lowerSearch) ||
        product.brand.toLowerCase().includes(lowerSearch) ||
        product.tags.some(tag => tag.toLowerCase().includes(lowerSearch))
      );
    }

    setFilteredProducts(result);
  };

  const handleFilterChange = (filters) => {
    let result = [...products];

    // Filtro de categoría
    if (filters.category !== 'todas') {
      result = result.filter(p => p.category === filters.category);
    }

    // Filtro de marca
    if (filters.brand !== 'todas') {
      result = result.filter(p => p.brand === filters.brand);
    }

    // Filtro de precio
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && p.price <= max);
    }

    // Filtro de calificación
    if (filters.rating > 0) {
      result = result.filter(p => p.rating >= filters.rating);
    }

    // Filtro de stock
    if (filters.inStock) {
      result = result.filter(p => p.stock > 0);
    }

    // Filtro de ofertas
    if (filters.onSale) {
      result = result.filter(p => p.isOffer);
    }

    // Aplicar búsqueda sobre los resultados filtrados
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(product =>
        product.name.toLowerCase().includes(lowerSearch) ||
        product.description.toLowerCase().includes(lowerSearch) ||
        product.brand.toLowerCase().includes(lowerSearch) ||
        product.tags.some(tag => tag.toLowerCase().includes(lowerSearch))
      );
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  };

  const handleSort = (value) => {
    setSortBy(value);
    let sorted = [...filteredProducts];

    switch (value) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'discount':
        sorted.sort((a, b) => b.discount - a.discount);
        break;
      default:
        sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    setFilteredProducts(sorted);
  };

  const handleCompare = (product) => {
    if (compareProducts.find(p => p.id === product.id)) {
      setCompareProducts(compareProducts.filter(p => p.id !== product.id));
    } else if (compareProducts.length < 3) {
      setCompareProducts([...compareProducts, product]);
    } else {
      alert('Solo puedes comparar hasta 3 productos');
    }
  };

  // Paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Ofertas destacadas (primeros 4 productos en oferta)
  const featuredOffers = productsData.filter(p => p.isOffer).slice(0, 4);

  return (
    <div className="productos-page">
      {/* Banner de ofertas */}
      <section className="offers-banner">
        <h2>🔥 Ofertas Destacadas</h2>
        <div className="offers-grid">
          {featuredOffers.map(product => (
            <div key={product.id} className="offer-card">
              <img src={product.image} alt={product.name} />
              <div className="offer-info">
                <h4>{product.name}</h4>
                <span className="offer-discount">-{product.discount}%</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Barra de búsqueda y filtros */}
      <section className="search-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Buscar productos, marcas, categorías..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="btn-toggle-filters" onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? '✕ Ocultar filtros' : '🎛️ Mostrar filtros'}
          </button>
        </div>

        <div className="toolbar">
          <div className="results-count">
            {filteredProducts.length} productos encontrados
          </div>
          <div className="sort-controls">
            <label htmlFor="sort">Ordenar por:</label>
            <select id="sort" value={sortBy} onChange={(e) => handleSort(e.target.value)}>
              <option value="featured">Destacados</option>
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
              <option value="name">Nombre A-Z</option>
              <option value="rating">Mejor valorados</option>
              <option value="discount">Mayor descuento</option>
            </select>
          </div>
          {compareProducts.length > 0 && (
            <button
              className="btn-compare-show"
              onClick={() => setShowComparador(true)}
            >
              ⚖️ Comparar ({compareProducts.length})
            </button>
          )}
        </div>
      </section>

      {/* Contenido principal */}
      <section className="catalog-section">
        <div className="catalog-layout">
          {/* Sidebar de filtros */}
          {showFilters && (
            <aside className="filters-sidebar">
              <Filters onFilterChange={handleFilterChange} products={products} />
            </aside>
          )}

          {/* Grid de productos */}
          <div className="products-grid-container">
            {filteredProducts.length > 0 ? (
              <>
                <div className="products-grid">
                  {currentProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onCompare={handleCompare}
                    />
                  ))}
                </div>

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  itemsPerPage={itemsPerPage}
                  totalItems={filteredProducts.length}
                />
              </>
            ) : (
              <div className="no-results">
                <span className="no-results-icon">😕</span>
                <h3>No se encontraron productos</h3>
                <p>Intenta con otros términos de búsqueda o ajusta los filtros</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Comparador */}
      {showComparador && (
        <Comparador
          products={compareProducts}
          onClose={() => {
            setShowComparador(false);
            setCompareProducts([]);
          }}
        />
      )}
    </div>
  );
};

export default Productos;
