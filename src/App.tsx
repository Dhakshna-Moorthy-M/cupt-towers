import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Location from './components/Location';
import FloorPlans from './components/FloorPlans';
import Amenities from './components/Amenities';
import Specifications from './components/Specifications';
import Interiors from './components/Interiors';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import WhyChoose from './components/WhyChoose';
import Builder from './components/Builder';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Highlights />
      <About />
      <Location />
      <FloorPlans />
      <Amenities />
      <Specifications />
      <Interiors />
      <Gallery />
      <Pricing />
      <WhyChoose />
      <Builder />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
