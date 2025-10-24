import Banner from '../../components/banner';
import { HeroSection } from '../../components/layout';
// import { Hero } from '../../components/home'; // ← Este parecía duplicado
import { PromoCarousel, NewsSection, SocialBar, Newsletter } from '../../components/marketing';
import { FeaturedProducts } from '../../components/products';
import CategoriesGrid from '../../components/categories';
import { QuickPanel } from '../../components/user';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Banner Superior */}
      <Banner />

      {/* Hero Section con Carrusel - PRINCIPAL */}
      <HeroSection />

      {/* Carrusel de Promociones */}
      <PromoCarousel />

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

      {/* Hero duplicado COMENTADO - parecía repetido */}
      {/* <Hero /> */}
    </div>
  );
}

export default Home;
