import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/footer";

// App
const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary w-full">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar hide={hide} />
          
        </div>
        <Hero />
        <Works />
        <Experience />
        <Tech />
        <StarsCanvas />
        {/* Contact */}
        <div className="relative z-0">
         <Contact /> 
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
