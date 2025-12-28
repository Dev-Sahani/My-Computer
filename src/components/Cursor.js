'use client';
import { useRef, useEffect } from 'react';
import { useCursor } from '../context/CursorContext';

export default function Cursor() {
  const innerCursorRef = useRef(null);
  const outerCursorRef = useRef(null);
  const customCursorRef = useRef(null);
  const { cursorContent } = useCursor();

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
      if (customCursorRef.current) {
        customCursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  if(cursorContent) {
    console.log(cursorContent);
  }

  return (
    <>
      <div 
        className="inner-cursor" 
        ref={innerCursorRef}
        style={{ opacity: cursorContent ? 0 : 1 }}
      ></div>
      <div 
        className="outer-cursor" 
        ref={outerCursorRef}
        style={{ opacity: cursorContent ? 0 : 1 }}
      ></div>
      {cursorContent && 
        <div
          ref={customCursorRef}
          className='custom-cursor'
        >
            {cursorContent}
        </div>
      }
    </>
  );
}
