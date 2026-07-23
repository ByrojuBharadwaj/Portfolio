import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-start justify-center px-10 md:px-24 relative overflow-hidden bg-[#F8F6F6]">
      {/* SVG Gooey Filter */}
      <svg className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="z-10 text-left max-w-4xl mt-[40vh] md:mt-0">
        <p className="font-openSans text-dark mb-4 text-[2.15em]" data-aos="fade-up">G'day I'm..</p>
        <h1 className="text-5xl md:text-7xl font-openSans font-bold text-dark mb-4" data-aos="fade-up" data-aos-delay="100">
          Bharadwaj Byroju.
        </h1>
        <h2 className="text-3xl md:text-5xl font-openSans font-bold text-accent mb-6" data-aos="fade-up" data-aos-delay="200">
          I build Software Driven Experience
        </h2>
        <p className="text-dark/80 max-w-xl mb-10 font-openSans text-lg" data-aos="fade-up" data-aos-delay="300">
          Every system has a design decision buried in it that determines how the next six months go, and I've learned to look for that decision first. What draws me to software is the product problem underneath it: the discipline of making complexity invisible to the people using it, figuring out what a system needs to do, why it needs to do it that way, and where the current design will eventually break. I'm less interested in technologies for their own sake and more interested in the moment when an architecture decision either saves a team three weeks or costs them three months. I've spent my time working on products and the craft that connects all of its components is backend engineering, software architecture, and AI systems
        </p>
        <a href="#my-work" className="mk-button inline-block px-8 py-4 border-2 border-grayAccent text-grayAccent font-heading font-bold hover:text-white transition-colors relative z-10 -mt-[4vh] md:mt-[5vh]" data-aos="fade-up" data-aos-delay="400">
          Check out my work!
        </a>
      </div>

      {/* Animated Gooey Blobs */}
      <div className="absolute inset-0 pointer-events-none" style={{ filter: 'url(#goo)' }}>
        {/* Blob 1 */}
        <div 
          className="absolute top-0 left-0 w-[22.4rem] h-[22.4rem] bg-tealAccent/80 rounded-full blur-xl transition-transform duration-[0.8s]"
          style={{ 
            transform: `translate(${mousePos.x}px, ${mousePos.y}px) translate(-50%, -50%)`,
            transitionTimingFunction: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)'
          }}
        ></div>
        {/* Blob 2 - resized -30% */}
        <div 
          className="absolute top-0 left-0 w-[15.4rem] h-[15.4rem] bg-[#83c3cc]/85 rounded-full blur-xl transition-transform duration-[1.1s]"
          style={{ 
            transform: `translate(${mousePos.x}px, ${mousePos.y}px) translate(-50%, -50%)`,
            transitionTimingFunction: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)'
          }}
        ></div>
        {/* Blob 3 */}
        <div 
          className="absolute top-0 left-0 w-[19.6rem] h-[19.6rem] bg-tealAccent/75 rounded-full blur-xl transition-transform duration-[1.4s]"
          style={{ 
            transform: `translate(${mousePos.x}px, ${mousePos.y}px) translate(-50%, -50%)`,
            transitionTimingFunction: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)'
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;





