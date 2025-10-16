import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Featured from './components/Featured';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import './styles/smooth-scroll.css';

function App() {
  return (
    <div className="min-h-screen scroll-smooth">
      <ScrollProgress />
      <Navbar />
      <main id="home">
        <Hero />
        <Gallery />
        <Featured />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
