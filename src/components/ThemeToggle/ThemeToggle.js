import React, { useContext } from 'react';
import './ThemeToggle.css';
import ThemeContext from '../../Contexts/ThemeContext';

const ThemeToggle = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);

  const iconTheme = theme === 'dark' && 'toggle-icon-dark';

  return (
    <button onClick={toggleTheme} className={`toggle-icon ${theme}`}>
      <span className={`material-symbols-outlined ${iconTheme}`}>{theme === 'light' ? 'dark_mode' : 'light_mode'}</span>
    </button>
  );
}

export default ThemeToggle;