import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experiences from "./components/Experiences/Experiences";
import Work from "./components/Works/Work";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experiences />
      <Work />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
