import React, { useEffect, useRef, useState } from 'react';

const isDarkReaderActive = () =>
  document.documentElement.getAttribute('data-darkreader-scheme') === 'dark';

const CursorLines = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const hRef = useRef(null);
  const vRef = useRef(null);

  useEffect(() => {
    const applyLineColors = () => {
      const color = isDarkReaderActive() ? 'rgba(255, 255, 255, 0.35)' : '';
      [hRef.current, vRef.current].forEach((el) => {
        if (!el) return;
        if (color) el.style.setProperty('background-color', color, 'important');
        else el.style.removeProperty('background-color');
      });
    };

    applyLineColors();
    const observer = new MutationObserver(applyLineColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-darkreader-scheme'],
    });

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const isInteractive = !!e.target.closest('a, button, .mk-button, [role="button"], input, textarea, .cursor-pointer');
      setIsHoveringInteractive(isInteractive);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={hRef}
        className="cursor-line-h"
        style={{ top: position.y, opacity: isHoveringInteractive ? 0 : 1 }}
      />
      <div
        ref={vRef}
        className="cursor-line-v"
        style={{ left: position.x, opacity: isHoveringInteractive ? 0 : 1 }}
      />
    </>
  );
};

export default CursorLines;
