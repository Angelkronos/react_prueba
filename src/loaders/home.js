export async function homeLoader() {
  // Simulación de llamada a API: retorna texto de bienvenida y un pequeño resumen
  return Promise.resolve({
    welcome: 'Bienvenido a Level-Up Gamer',
    highlight: 'Ofertas neon y equipos de alto rendimiento para gamers.'
  })
}
