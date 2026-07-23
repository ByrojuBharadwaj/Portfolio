import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import Certifications from './Certifications.jsx';
import Contact from './Contact.jsx';
import SideElements from './SideElements.jsx';
import CursorLines from './CursorLines.jsx';

function App() {
  const progressRef = useRef(null);

  useEffect(() => {
    document.title = "Bharadwaj Byroju | Portfolio";
    AOS.init({ duration: 1000, once: false });
    const updateScroll = () => {
      const scroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (progressRef.current) {
        progressRef.current.style.width = `${(scroll / height) * 100}%`;
      }
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <main className="bg-primaryBg min-h-screen">
      <div id="scroll-progress" ref={progressRef}></div>
      <CursorLines />
      <Header />
      <SideElements />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}

export default App;