import { useState } from 'react';
import './Comparador.css';

const Comparador = ({ products, onClose }) => {
  const [selectedProducts, setSelectedProducts] = useState(
    products.slice(0, 3)
  );

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (!products || products.length === 0) {
    return (
      <div className="comparador-empty">
        <p>No hay productos para comparar</p>
        <button onClick={onClose} className="btn-close-compare">Cerrar</button>
      </div>
    );
  }

  return (
    <div className="comparador-overlay">
      <div className="comparador-container">
        <div className="comparador-header">
          <h2>⚖️ Comparador de Productos</h2>
          <button className="btn-close-comparador" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="comparison-table">
          <div className="comparison-row header-row">
            <div className="comparison-cell">Característica</div>
            {selectedProducts.map(product => (
              <div key={product.id} className="comparison-cell product-header">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
              </div>
            ))}
          </div>

          <div className="comparison-row">
            <div className="comparison-cell label">💰 Precio</div>
            {selectedProducts.map(product => (
              <div key={product.id} className="comparison-cell">
                <span className="price-compare">{formatPrice(product.price)}</span>
                {product.discount > 0 && (
                  <span className="discount-badge">-{product.discount}%</span>
                )}
              </div>
            ))}
          </div>

          <div className="comparison-row">
            <div className="comparison-cell label">⭐ Calificación</div>
            {selectedProducts.map(product => (
              <div key={product.id} className="comparison-cell">
                <div className="rating-display">
                  {product.rating} ★
                  <span className="reviews-count">({product.reviews})</span>
                </div>
              </div>
            ))}
          </div>

          <div className="comparison-row">
            <div className="comparison-cell label">📦 Stock</div>
            {selectedProducts.map(product => (
              <div key={product.id} className="comparison-cell">
                {product.stock > 0 ? (
                  <span className="stock-yes">✓ Disponible ({product.stock})</span>
                ) : (
                  <span className="stock-no">✗ Agotado</span>
                )}
              </div>
            ))}
          </div>

          <div className="comparison-row">
            <div className="comparison-cell label">🏷️ Marca</div>
            {selectedProducts.map(product => (
              <div key={product.id} className="comparison-cell">
                {product.brand}
              </div>
            ))}
          </div>

          <div className="comparison-row">
            <div className="comparison-cell label">📋 Categoría</div>
            {selectedProducts.map(product => (
              <div key={product.id} className="comparison-cell">
                {product.category}
              </div>
            ))}
          </div>

          <div className="comparison-row">
            <div className="comparison-cell label">🔥 En oferta</div>
            {selectedProducts.map(product => (
              <div key={product.id} className="comparison-cell">
                {product.isOffer ? (
                  <span className="offer-yes">✓ Sí</span>
                ) : (
                  <span className="offer-no">✗ No</span>
                )}
              </div>
            ))}
          </div>

          <div className="comparison-row">
            <div className="comparison-cell label">⚙️ Especificaciones</div>
            {selectedProducts.map(product => (
              <div key={product.id} className="comparison-cell">
                <ul className="specs-list">
                  {product.specs?.map((spec, idx) => (
                    <li key={idx}>{spec}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="comparison-row">
            <div className="comparison-cell label">📝 Descripción</div>
            {selectedProducts.map(product => (
              <div key={product.id} className="comparison-cell">
                <p className="description-text">{product.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="comparador-footer">
          <p>💡 Selecciona hasta 3 productos para comparar sus características</p>
        </div>
      </div>
    </div>
  );
};

export default Comparador;
