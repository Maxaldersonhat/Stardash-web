import Hero from "../components/Hero.jsx";
import ServicesSection from '../components/ServicesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialCarousel from '../components/TestimonialCarousel';
import WhyChooseSection from '../components/WhyChooseSection';
import StatsSection      from '../components/StatsSection';
import QuoteSection      from '../components/QuoteSection';
import Footer            from '../components/Footer';

const Home = () => (
  <div className="min-h-screen">
    <main>
      <div id="Hero">
        <Hero />
      </div>
      <div id="ServicesSection">
        <ServicesSection />
      </div>
      <div id="HowItWorksSection">
        <HowItWorksSection />
      </div>
      <div id="TestimonialCarousel">
        <TestimonialCarousel />
      </div>
      <WhyChooseSection />
      <StatsSection />
      
      <div id="QuoteSection">
        <QuoteSection />
      </div>
    </main>
    <Footer />
  </div>
);

export default Home;