import React from 'react'

export default function ProductModal({ product, onClose }){
  if(!product) return null

  return (
    <div className="product-modal">
      <div className="product-modal-inner">
        <button className="close" onClick={onClose}>×</button>
        <h2>{product.name}</h2>
        <p>Precio: ${product.price?.toFixed(2)}</p>
        <p>Descripción: {product.description ?? 'Excelente producto para gaming.'}</p>
      </div>
    </div>
  )
}
