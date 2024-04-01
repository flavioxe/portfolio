import "./global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Recommendations } from "./components/Recommendations";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Projects />
      <Recommendations />
      <About />
      <Footer />
    </>
  );
}

export default App;
