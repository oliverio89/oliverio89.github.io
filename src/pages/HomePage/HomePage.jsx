import { LanguageProvider } from '../../contexts/LanguageContext.js';
import Navbar from '../../components/Navbar/navbar';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/about';
import Experience from '../../components/NewComponent/NewComponent';
import Stack from '../../components/Stack/stack';
import Projects from '../../components/Proyects/Proyects';
import DesignLab from '../../components/DesignLab/DesignLab';
import Contact from '../../components/Contact/contact';
import Footer from '../../components/Footer/footer';
import './HomePage.css';

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="homepage">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Stack />
          <DesignLab />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
