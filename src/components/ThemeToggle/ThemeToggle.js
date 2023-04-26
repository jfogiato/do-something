import React, { useContext } from 'react';
import './ThemeToggle.css';
import ThemeContext from '../../Contexts/ThemeContext';

const ThemeToggle = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);
  const body = document.body;
  const iconTheme = theme === 'dark' && 'toggle-icon-dark';
  
  body.classList.add('light');

  const toggleThemeGlobal = () => {
    toggleTheme();
    toggleBody();
  }

  const toggleBody = () => {
    if (theme === 'light') {
      body.classList.add('dark');
      body.classList.remove('light');
    } else {
      body.classList.add('light');
      body.classList.remove('dark');
    }
  }

  return (
    <button onClick={toggleThemeGlobal} className='toggle-icon'>
      <span className={`material-symbols-outlined ${iconTheme}`}>{theme === 'light' ? 'dark_mode' : 'light_mode'}</span>
    </button>
  );
}

export default ThemeToggle;