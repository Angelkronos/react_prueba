import Banner from '../../components/banner';
import { HeroSection } from '../../components/layout';
import { NewsSection, SocialBar, Newsletter } from '../../components/marketing';
import { FeaturedProducts } from '../../components/products';
import CategoriesGrid from '../../components/categories';
import { QuickPanel } from '../../components/user';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Banner Superior */}
      <Banner />

      {/* Hero Section con Carrusel */}
      <HeroSection />

      {/* Productos Destacados */}
      <FeaturedProducts />

      {/* Grid de Categorías */}
      <CategoriesGrid />

      {/* Noticias y Eventos Gaming */}
      <NewsSection />

      {/* Redes Sociales */}
      <SocialBar />

      {/* Newsletter */}
      <Newsletter />

      {/* Panel Flotante */}
      <QuickPanel />
    </div>
  );
}

export default Home;
