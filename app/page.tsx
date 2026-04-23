import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Nosotros from '@/components/Nosotros';
import Servicios from '@/components/Servicios';
import PorQue from '@/components/PorQue';
import Faq from '@/components/Faq';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <PorQue />
        <Faq />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
