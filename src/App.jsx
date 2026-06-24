import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import FeaturedProjects from './sections/FeaturedProjects';
import BeforeAfter from './sections/BeforeAfter';
import Services from './sections/Services';
import DesignProcess from './sections/DesignProcess';
import DesignGallery from './sections/DesignGallery';
import MaterialsFinishes from './sections/MaterialsFinishes';
import Testimonials from './sections/Testimonials';
import MeetDesigners from './sections/MeetDesigners';
import DesignInsights from './sections/DesignInsights';
import ConsultationCTA from './sections/ConsultationCTA';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <FeaturedProjects />
        <BeforeAfter />
        <Services />
        <DesignProcess />
        <DesignGallery />
        <MaterialsFinishes />
        <Testimonials />
        <MeetDesigners />
        <DesignInsights />
        <ConsultationCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
