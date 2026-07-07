import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KanjiLayer from "./components/KanjiLayer";
import About from "./components/About";
import Menu from "./components/Menu";
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
        </main>
      </div>
    </>
  );
}

export default App;