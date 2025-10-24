import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/navigation';
import { Footer } from './components/layout';
import { Home } from './pages/home';
import { Ayuda } from './pages/support';
import { Productos, Categorias, Ofertas } from './pages/products';
import { Carrito } from './pages/cart';
import { Perfil } from './pages/user';
import { Checkout, CompraExitosa, CompraFallida } from './pages/checkout';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ayuda" element={<Ayuda />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/categorias" element={<Categorias />} />
              <Route path="/ofertas" element={<Ofertas />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/compra-exitosa" element={<CompraExitosa />} />
              <Route path="/compra-fallida" element={<CompraFallida />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

function NotFound() {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
      <h1 style={{ color: 'var(--error)', fontFamily: 'var(--font-display)', fontSize: '4rem' }}>
        404
      </h1>
      <p style={{ color: 'var(--gray-400)', fontSize: '1.2rem' }}>
        Página no encontrada
      </p>
      <a href="/" style={{ color: 'var(--neon-green)', textDecoration: 'underline' }}>
        Volver al inicio
      </a>
    </div>
  );
}

export default App;
