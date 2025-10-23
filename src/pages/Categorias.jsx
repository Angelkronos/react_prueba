import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form, Badge } from 'react-bootstrap';
import { 
  categories, 
  filterProducts, 
  getAllBrands, 
  getPriceRange 
} from '../data/productsData';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import './Categorias.css';

function Categorias() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('categoria') || 'todas');
  const [selectedBrand, setSelectedBrand] = useState('todas');
  const [sortBy, setSortBy] = useState('name');
  const [showOnlyOffers, setShowOnlyOffers] = useState(false);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000 });
  
  const brands = getAllBrands();
  const { min, max } = getPriceRange();

  useEffect(() => {
    // Aplicar filtros
    const filters = {
      category: selectedCategory !== 'todas' ? selectedCategory : undefined,
      brand: selectedBrand !== 'todas' ? selectedBrand : undefined,
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
      onlyOffers: showOnlyOffers,
      inStock: showInStockOnly,
      sortBy: sortBy
    };
    
    const filtered = filterProducts(filters);
    setFilteredProducts(filtered);
  }, [selectedCategory, selectedBrand, priceRange, showOnlyOffers, showInStockOnly, sortBy]);

  useEffect(() => {
    // Actualizar URL cuando cambia la categoría
    if (selectedCategory !== 'todas') {
      setSearchParams({ categoria: selectedCategory });
    } else {
      setSearchParams({});
    }
  }, [selectedCategory, setSearchParams]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedBrand('todas'); // Reset brand filter
  };

  const handleResetFilters = () => {
    setSelectedCategory('todas');
    setSelectedBrand('todas');
    setSortBy('name');
    setShowOnlyOffers(false);
    setShowInStockOnly(false);
    setPriceRange({ min, max });
  };

  return (
    <div className="categorias-page">
      {/* Hero Section */}
      <section className="categorias-hero">
        <Container>
          <h1 className="hero-title">
            <span className="title-icon">🎯</span>
            EXPLORA POR CATEGORÍAS
          </h1>
          <p className="hero-subtitle">
            Encuentra exactamente lo que buscas con nuestros filtros avanzados
          </p>
        </Container>
      </section>

      <Container className="categorias-content">
        <Row>
          {/* Sidebar de Filtros */}
          <Col lg={3} md={4} className="filters-sidebar">
            <Card className="filter-card">
              <Card.Header className="filter-header">
                <h5>
                  <span className="icon">🔍</span> Filtros
                </h5>
                <Button 
                  variant="link" 
                  size="sm" 
                  onClick={handleResetFilters}
                  className="reset-btn"
                >
                  Limpiar
                </Button>
              </Card.Header>
              <Card.Body>
                {/* Categorías */}
                <div className="filter-section">
                  <h6 className="filter-title">Categoría</h6>
                  <div className="category-buttons">
                    <Button
                      variant={selectedCategory === 'todas' ? 'primary' : 'outline-secondary'}
                      className="w-100 mb-2 category-btn"
                      onClick={() => handleCategoryChange('todas')}
                    >
                      <span className="icon">🌟</span> Todas
                    </Button>
                    {categories.map(cat => (
                      <Button
                        key={cat.id}
                        variant={selectedCategory === cat.id ? 'primary' : 'outline-secondary'}
                        className="w-100 mb-2 category-btn"
                        onClick={() => handleCategoryChange(cat.id)}
                      >
                        <span className="icon">{cat.icon}</span> {cat.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Marcas */}
                <div className="filter-section">
                  <h6 className="filter-title">Marca</h6>
                  <Form.Select 
                    value={selectedBrand} 
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="brand-select"
                  >
                    <option value="todas">Todas las marcas</option>
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </Form.Select>
                </div>

                {/* Ordenar */}
                <div className="filter-section">
                  <h6 className="filter-title">Ordenar por</h6>
                  <Form.Select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-select"
                  >
                    <option value="name">Nombre (A-Z)</option>
                    <option value="price">Precio (menor a mayor)</option>
                    <option value="rating">Mejor valorados</option>
                    <option value="discount">Mayor descuento</option>
                    <option value="newest">Más recientes</option>
                  </Form.Select>
                </div>

                {/* Rango de Precio */}
                <div className="filter-section">
                  <h6 className="filter-title">
                    Precio: ${priceRange.min.toLocaleString()} - ${priceRange.max.toLocaleString()}
                  </h6>
                  <Form.Range
                    min={min}
                    max={max}
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                    className="price-range"
                  />
                </div>

                {/* Checkboxes */}
                <div className="filter-section">
                  <Form.Check
                    type="checkbox"
                    label="Solo ofertas 🔥"
                    checked={showOnlyOffers}
                    onChange={(e) => setShowOnlyOffers(e.target.checked)}
                    className="filter-checkbox"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Solo en stock ✓"
                    checked={showInStockOnly}
                    onChange={(e) => setShowInStockOnly(e.target.checked)}
                    className="filter-checkbox"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Productos */}
          <Col lg={9} md={8}>
            {/* Header de resultados */}
            <div className="results-header">
              <h2 className="results-title">
                {selectedCategory === 'todas' 
                  ? 'Todos los productos' 
                  : categories.find(c => c.id === selectedCategory)?.name
                }
                <Badge bg="primary" className="results-count ms-2">
                  {filteredProducts.length} productos
                </Badge>
              </h2>
            </div>

            {/* Grid de productos */}
            {filteredProducts.length > 0 ? (
              <Row className="products-grid">
                {filteredProducts.map(product => (
                  <Col key={product.id} lg={4} md={6} sm={12} className="mb-4">
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            ) : (
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <h3>No se encontraron productos</h3>
                <p>Intenta ajustar los filtros o explora otras categorías</p>
                <Button variant="primary" onClick={handleResetFilters}>
                  Ver todos los productos
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Categorias;
