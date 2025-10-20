import { useState } from 'react';
import './Filters.css';

const Filters = ({ onFilterChange, products }) => {
  const [filters, setFilters] = useState({
    category: 'todas',
    priceRange: 'all',
    brand: 'todas',
    rating: 0,
    inStock: false,
    onSale: false,
  });

  const categories = ['todas', ...new Set(products.map(p => p.category))];
  const brands = ['todas', ...new Set(products.map(p => p.brand))];

  const handleFilterChange = (filterName, value) => {
    const newFilters = { ...filters, [filterName]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      category: 'todas',
      priceRange: 'all',
      brand: 'todas',
      rating: 0,
      inStock: false,
      onSale: false,
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="filters-container">
      <div className="filters-header">
        <h3>🎯 Filtros</h3>
        <button className="btn-reset" onClick={handleReset}>
          Limpiar
        </button>
      </div>

      {/* Categoría */}
      <div className="filter-group">
        <label className="filter-label">📦 Categoría</label>
        <select
          className="filter-select"
          value={filters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Marca */}
      <div className="filter-group">
        <label className="filter-label">🏷️ Marca</label>
        <select
          className="filter-select"
          value={filters.brand}
          onChange={(e) => handleFilterChange('brand', e.target.value)}
        >
          {brands.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Rango de precio */}
      <div className="filter-group">
        <label className="filter-label">💰 Precio</label>
        <select
          className="filter-select"
          value={filters.priceRange}
          onChange={(e) => handleFilterChange('priceRange', e.target.value)}
        >
          <option value="all">Todos los precios</option>
          <option value="0-50000">Hasta $50.000</option>
          <option value="50000-100000">$50.000 - $100.000</option>
          <option value="100000-200000">$100.000 - $200.000</option>
          <option value="200000-400000">$200.000 - $400.000</option>
          <option value="400000-999999">Más de $400.000</option>
        </select>
      </div>

      {/* Rating */}
      <div className="filter-group">
        <label className="filter-label">⭐ Calificación mínima</label>
        <div className="rating-filter">
          {[4, 3, 2, 1, 0].map(rating => (
            <button
              key={rating}
              className={`rating-btn ${filters.rating === rating ? 'active' : ''}`}
              onClick={() => handleFilterChange('rating', rating)}
            >
              {rating > 0 ? `${rating}★ o más` : 'Todas'}
            </button>
          ))}
        </div>
      </div>

      {/* Checkboxes */}
      <div className="filter-group">
        <label className="filter-checkbox">
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) => handleFilterChange('inStock', e.target.checked)}
          />
          <span>✓ Solo con stock</span>
        </label>
      </div>

      <div className="filter-group">
        <label className="filter-checkbox">
          <input
            type="checkbox"
            checked={filters.onSale}
            onChange={(e) => handleFilterChange('onSale', e.target.checked)}
          />
          <span>🔥 Solo en oferta</span>
        </label>
      </div>
    </div>
  );
};

export default Filters;
