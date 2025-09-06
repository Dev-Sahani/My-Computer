'use client';
import { useRef, useEffect } from 'react';

export default function Cursor() {
  const innerCursorRef = useRef(null);
  const outerCursorRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (innerCursorRef.current) {
        innerCursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      if (outerCursorRef.current) {
        outerCursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div className="inner-cursor" ref={innerCursorRef}></div>
      <div className="outer-cursor" ref={outerCursorRef}></div>
    </>
  );
}
