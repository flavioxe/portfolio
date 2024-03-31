import "./global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
