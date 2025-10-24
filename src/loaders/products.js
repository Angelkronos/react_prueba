export async function productsLoader() {
  // Simulación de llamada a API: retorna una lista simple de productos
  const mockProducts = [
    { id: 1, name: 'Auricular Gamer X1', price: 79.99 },
    { id: 2, name: 'Teclado Mecánico K7', price: 129.99 },
    { id: 3, name: 'Monitor 144Hz M24', price: 249.99 },
  ]

  return Promise.resolve(mockProducts)
}
