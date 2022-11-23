import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Client from "./components/Client";
import PortFolio from "./components/portfolio";
import Feature from "./components/Feature";
import Testimonals from "./components/Testmonial";
import Faq from "./components/Faq";
import Blog from "./components/blog";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Client />
      <PortFolio />
      <Feature />
      <Testimonals />
      <Faq />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
