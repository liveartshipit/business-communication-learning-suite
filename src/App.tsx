import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <BrowserRouter>
      <AppShell />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
