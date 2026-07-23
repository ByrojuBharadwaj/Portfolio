import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const SideElements = () => (
  <>
    <div className="fixed bottom-0 left-10 z-50 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-dark"> {/* Adjusted for new links */}
      <a href="https://github.com/ByrojuBharadwaj" target="_blank" rel="noopener noreferrer"><FiGithub className="text-dark hover:text-tealAccent cursor-pointer transition-colors text-xl" /></a>
      <a href="https://www.linkedin.com/in/b-bharadwaj" target="_blank" rel="noopener noreferrer"><FiLinkedin className="text-dark hover:text-tealAccent cursor-pointer transition-colors text-xl" /></a>
      <FiInstagram className="text-dark hover:text-tealAccent cursor-pointer transition-colors text-xl" /> {/* No change to Instagram link */}
    </div>
    <div className="fixed bottom-0 right-10 z-50 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-dark">
      <a href="mailto:byrojubharadwaj@gmail.com" className="text-dark hover:text-tealAccent transition-colors [writing-mode:vertical-rl] tracking-widest font-mono text-[16.1px]">byrojubharadwaj@gmail.com</a>
    </div>
  </>
);

export default SideElements;