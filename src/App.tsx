import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KanjiLayer from "./components/KanjiLayer";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="page">
        <KanjiLayer />
        <main>
          <Hero />
          <About />
          <Menu />
          <Gallery />
          <Testimonials />
          <Location />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;