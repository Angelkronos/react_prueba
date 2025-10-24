import React from 'react'
import { useLoaderData } from 'react-router'
import ProductList from '../../components/products/ProductList'

export default function Products(){
  const products = useLoaderData()

  return (
    <div style={{padding:'1rem'}}>
      <h2>Productos</h2>
      <ProductList products={products} />
    </div>
  )
}
