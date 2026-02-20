import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechnologySection from '@/components/TechnologySection';
import CategorySection from '@/components/CategorySection';
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechnologySection />
        <CategorySection />
        <SupportSection />
      </main>
      <Footer />
    </>
  );
}
