import React, { useContext } from 'react';
import './ThemeToggle.css';
import ThemeContext from '../../Contexts/ThemeContext';

const ThemeToggle = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className={`toggle-icon ${theme}`}>
      <span className="material-symbols-outlined">{theme === 'light' ? 'toggle_on' : 'toggle_off'}</span>
    </button>
  );
}

export default ThemeToggle;