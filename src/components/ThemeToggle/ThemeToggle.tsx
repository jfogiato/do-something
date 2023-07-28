import { useContext } from 'react';
import './ThemeToggle.css';
import ThemeContext from '../../Contexts/ThemeContext';

const ThemeToggle: React.FC<{ toggleTheme: Function }> = ({ toggleTheme }) => {
  const theme = useContext<string>(ThemeContext);
  const body: HTMLElement = document.body;
  const iconTheme: string | boolean = theme === 'dark' && 'toggle-icon-dark';
  
  body.classList.add('light');

  const toggleThemeGlobal = () : void => {
    toggleTheme();
    toggleBody();
  }

  const toggleBody = () : void => {
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