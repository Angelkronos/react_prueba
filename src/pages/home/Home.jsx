import { useEffect } from 'react';
import HeroSection from '../../components/ui/HeroSection';
import { NewsSection, SocialBar, Newsletter } from '../../components/marketing';
import { FeaturedProducts } from '../../components/products';
import CategoriesGrid from '../../components/categories';
import { QuickPanel } from '../../components/user';
import './Home.css';

function Home() {
  // Reset scroll al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="home-page">
      <HeroSection />
      <FeaturedProducts />
      <CategoriesGrid />
      <NewsSection />
      <SocialBar />
      <Newsletter />
      <QuickPanel />
    </main>
  );
}

export default Home;
