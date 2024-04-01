import "./global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Recommendations } from "./components/Recommendations";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Projects />
      <Recommendations />
      <About />
      <Experience />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
