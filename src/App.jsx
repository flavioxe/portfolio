import "./global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Projects />
    </>
  );
}

export default App;
