import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu.jsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={`fixed top-0 w-full p-6 z-[60] backdrop-blur-[3px] flex justify-between items-center px-10 md:px-20 transition-all duration-500`}>
        <div className="w-12 h-12 rounded-full border-2 border-dark flex items-center justify-center overflow-hidden cursor-pointer bg-homeHeader">
          <img src="/assets/headerbarimageicon.png" alt="Logo" className="w-full h-full object-cover" />
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="#" 
            target="_blank" 
            className="mk-button px-6 py-2 border-2 border-grayAccent text-grayAccent font-heading font-bold hover:text-white transition-colors relative z-10 hidden sm:block"
          >
            Resume
          </a>

          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="z-[70] relative w-12 h-12 flex items-center justify-center focus:outline-none"
            >
              <div 
                className={`text-4xl transition-all duration-[500ms] ease-in-out font-mono ${isOpen ? 'rotate-90 text-redHighlight' : 'rotate-0 text-dark'}`}
              >
                {isOpen ? '✕' : '☰'}
              </div>
            </button>

            <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;