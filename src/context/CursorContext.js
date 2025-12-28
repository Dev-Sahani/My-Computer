'use client';
import { createContext, useContext, useState } from 'react';

const CursorContext = createContext(null);

export function CursorProvider({ children }) {
  const [cursorContent, setCursorContent] = useState(false);

  return (
    <CursorContext.Provider value={{ cursorContent, setCursorContent }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within CursorProvider');
  }
  return context;
}

