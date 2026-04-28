import React from 'react';

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  const navItems = [
    { label: 'HOME', href: '#' },
    { label: 'MY SELF', href: '#about' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PROJECTS', href: '#my-work' },
    { label: 'CERTIFICATIONS', href: '#certs' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNav = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = href === '#' ? document.documentElement : document.querySelector(href);
    if (!target) return;
    setTimeout(() => {
      const start = window.scrollY;
      const end = href === '#' ? 0 : target.getBoundingClientRect().top + window.scrollY;
      const duration = 600;
      const startTime = performance.now();
      const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, start + (end - start) * ease(progress));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, 150);
  };

  return (
    <div
      className={`absolute right-0 top-full mt-4 w-64 bg-white border border-dark/10 rounded-xl shadow-[0_20px_50px_rgba(249,218,127,0.3)] overflow-hidden transition-all duration-300 origin-top-right z-50 ${
        isOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-4 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className="flex flex-col py-3">
        {navItems.map((item, i) => (
          <a
            key={i}
            href={item.href}
            onClick={(e) => handleNav(e, item.href)}
            className="px-8 py-4 text-sm font-heading font-bold text-dark hover:bg-tealAccent hover:text-white transition-all uppercase tracking-[0.2em]"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
              transition: `opacity 0.3s ease ${i * 50}ms, transform 0.3s ease ${i * 50}ms, background-color 0.2s, color 0.2s`,
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HamburgerMenu;