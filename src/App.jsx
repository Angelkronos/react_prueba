import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ayuda from './pages/Ayuda';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ayuda" element={<Ayuda />} />
            <Route path="/productos" element={<ProductosPlaceholder />} />
            <Route path="/perfil" element={<PerfilPlaceholder />} />
            <Route path="/carrito" element={<CarritoPlaceholder />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Placeholders temporales para rutas futuras
function ProductosPlaceholder() {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
      <h1 style={{ color: 'var(--neon-green)', fontFamily: 'var(--font-display)' }}>
        🎮 PRODUCTOS
      </h1>
      <p style={{ color: 'var(--gray-400)', fontSize: '1.2rem' }}>
        Esta página estará disponible próximamente
      </p>
    </div>
  );
}

function PerfilPlaceholder() {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
      <h1 style={{ color: 'var(--electric-blue)', fontFamily: 'var(--font-display)' }}>
        👤 MI PERFIL
      </h1>
      <p style={{ color: 'var(--gray-400)', fontSize: '1.2rem' }}>
        Esta página estará disponible próximamente
      </p>
    </div>
  );
}

function CarritoPlaceholder() {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
      <h1 style={{ color: 'var(--hot-pink)', fontFamily: 'var(--font-display)' }}>
        🛒 CARRITO
      </h1>
      <p style={{ color: 'var(--gray-400)', fontSize: '1.2rem' }}>
        Esta página estará disponible próximamente
      </p>
    </div>
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
