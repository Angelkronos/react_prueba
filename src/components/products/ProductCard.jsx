import React from 'react'

export default function ProductCard({ product }){
  return (
    <article className="product-card">
      <h3>{product.name}</h3>
      <p className="price">${product.price?.toFixed(2) ?? '—'}</p>
      <button className="btn">Ver</button>
    </article>
  )
}
