import { Navbar } from "./components";
import {
  Hero,
  Services,
  Philosophy,
  Pricing,
  Gallery,
  Contact,
  Footer,
  Testimonials
} from "./sections";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Philosophy />
        <Pricing />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
