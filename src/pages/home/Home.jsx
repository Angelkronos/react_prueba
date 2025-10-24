import Banner from '../../components/banner';
import { HeroSection } from '../../components/layout';
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

      {/* 1. Hero Section - Sin espacios negros */}
      <HeroSection />

      {/* 2. Carrusel de Promociones - 5 slides con imágenes locales */}
      <PromoCarousel />

      {/* 3. Productos Destacados - 4 productos con ofertas reales */}
      <FeaturedProducts />

      {/* 4. Grid de Categorías - 6 categorías con hover neón */}
      <CategoriesGrid />

      {/* 5. Noticias y Eventos Gaming - 3 cards con fade-in */}
      <NewsSection />

      {/* 6. Redes Sociales - Instagram, TikTok, YouTube, Discord */}
      <SocialBar />

      {/* Newsletter */}
      <Newsletter />

      {/* Panel Flotante */}
      <QuickPanel />

      {/* 7. Footer - No modificar, se mantiene del layout principal */}
    </div>
  );
}

export default Home;
