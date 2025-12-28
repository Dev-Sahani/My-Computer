'use client';
import { CursorProvider } from './CursorContext';
import Cursor from '../components/Cursor';

export default function CursorProviderWrapper({ children }) {
  return (
    <CursorProvider>
      {children}
      <Cursor />
    </CursorProvider>
  );
}

