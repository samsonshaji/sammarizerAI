import React from "react";
import { useTheme } from "./ThemeContext"; 

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`w-full flex justify-center items-center flex-col ${theme}`}>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <button onClick={toggleTheme} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </nav>

      <h1 className='head_text'>
        <span className='orange_gradient'>Sammarizer AI</span>
      </h1>
      <h2 className='desc'>
        Make your reading easier with Sammarizer, the tool that turns long articles into short and clear summaries.
      </h2>
    </header>
  );
};

export default Hero;
