import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Services from './components/Services';
import HowItsWork from './components/HowItsWork';

import Contact from './components/Contact';
import OurTeam from './components/OurTeam';
import Footer from './components/Footer';
import { Element } from 'react-scroll';
import  { useEffect, useState } from 'react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const targetOffsetTop = document.getElementById('targetElement').offsetTop;
      const windowHeight = window.innerHeight;

      if (scrollTop > targetOffsetTop - windowHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);





  return (
    <>
    
    <div >

    <Navbar/>
    <Element name="Home" className="h-screen">
      <HeroSection/>
    </Element>
    <div id="targetElement" className={`fade-in ${isVisible ? 'visible' : ''}`}>
    <Element name="About" className="h-screen">
      <About/>
    </Element>
    
    

      <Element name="Services" className="h-screen">
        <Services/>
      </Element>
    
    
    <HowItsWork />
   

      
      <Element name="Client" className="h-screen">
      <OurTeam />
      </Element>
      

      

      <Element name="Contact" className="h-screen">
        <Contact />
        <Footer/>
      </Element>
      </div>
    
    
    

    </div>
    
    
    
   
   
  
    </>
  );
}

export default App;
