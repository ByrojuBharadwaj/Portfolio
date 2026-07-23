import React, { useEffect, useState } from 'react';

const CursorLines = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const isInteractive = !!e.target.closest('a, button, .mk-button, [role="button"], input, textarea, .cursor-pointer');
      setIsHoveringInteractive(isInteractive);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="cursor-line-h" style={{ top: position.y, opacity: isHoveringInteractive ? 0 : 1 }} />
      <div className="cursor-line-v" style={{ left: position.x, opacity: isHoveringInteractive ? 0 : 1 }} />
    </>
  );
};

export default CursorLines;