import Banner from '../components/Banner';
import HeroSection from '../components/HeroSection';
import PromoCarousel from '../components/PromoCarousel';
import FeaturedProducts from '../components/FeaturedProducts';
import CategoriesGrid from '../components/CategoriesGrid';
import QuickPanel from '../components/QuickPanel';
import Newsletter from '../components/Newsletter';
import SocialBar from '../components/SocialBar';
import FAQWidget from '../components/FAQWidget';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* LG-004: Banner Gamer Dinámico */}
      <Banner />

      {/* Hero Section - Componente independiente con imagen de fondo */}
      <HeroSection />

      {/* LG-013: Carrusel de Promociones con imágenes reales */}
      <PromoCarousel />

      {/* Productos Destacados con imágenes 600x400 */}
      <FeaturedProducts />

      {/* Categories Quick Access con hover neón */}
      <CategoriesGrid />

      {/* LG-018: Widget de Redes Sociales */}
      <SocialBar />

      {/* LG-019: Newsletter Gamer */}
      <Newsletter />

      {/* LG-009: FAQ / Centro de Ayuda con LG-015: Buscador Rápido */}
      <FAQWidget />

      {/* LG-014: Panel de Acceso Rápido Flotante */}
      <QuickPanel />
    </div>
  );
}

export default Home;
