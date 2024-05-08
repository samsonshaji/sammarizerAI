import React from 'react';
import Hero from "./components/Hero";
import Demo from "./components/Demo";
import { ThemeProvider, useTheme } from './components/ThemeContext';

import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};


const AppContent = () => {
  const { theme } = useTheme(); 

  return (
    <main className={theme}> 
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
