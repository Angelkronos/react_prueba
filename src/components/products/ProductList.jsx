import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({ products = [] }){
  if(!products.length) return <p>No hay productos para mostrar.</p>

  return (
    <div className="product-list">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
