import React, { useContext } from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import logoImage from '../../images/DoSomething.png'
import ThemeContext from '../../Contexts/ThemeContext';
import { FetchError } from '../../models';

interface NotFoundProps {
  error?: FetchError,
  resetError: () => void
};

const NotFound: React.FC<NotFoundProps> = ({ error, resetError }) => {
  const theme = useContext<string>(ThemeContext);

  return (
    <section className={`not-found ${theme}`}>
      <h1>Dang. The page you're looking for has either moved or doesn't exist.</h1>
      <div className='go-home-container'>
        <h2>Try <Link to='/' className='link home-link' onClick={resetError}>heading home.</Link></h2>
        <img className='mini-logo' alt='Do Something Logo' src={logoImage}/>
      </div>
      {error?.error && <p>Error status: {error.error}</p>}
    </section>
  );
}

export default NotFound;