import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logoImage from '../../images/DoSomething.png';
import ThemeContext from '../../Contexts/ThemeContext';

const Home: React.FC<{ first: boolean }> = ({ first }) => {
  const theme = useContext<string>(ThemeContext);

  const logoStyle: string = `logo-image ${theme === 'dark' && 'logo-image-dark'}`;

  return (
    <div className={`home ${theme}`} data-cy='home'>
      <div className='header-wrapper'>
        <img className={logoStyle} alt='Do Something Logo' src={logoImage}/>
        <h1 className='logo' data-cy='home-logo'>Do Something.</h1>
      </div>
      <h2 className='blurb-one'>Feeling stuck, bored, unproductive, unmotivated or otherwise uninspired?</h2>
      <div>
        <Link to='/i-want-to' className='uni-btn' data-cy='go-to-form-btn'>Do Something.</Link>
      </div>
      {first &&
      <div className='instructions'>
        <p><b>Looks like this is your first time here.</b></p>
        <p>It's simple, really...</p>
        <p>1. Give some info on the type of activity you're looking for.</p>
        <p>2. Pick one that you'd like to do.</p>
        <p>3. Do it now, save it for later - it'll be saved for you regardless.</p>
        <p>4. Mark it done.</p>
        <p>5. Do something else.</p>
      </div>
      }
    </div>
  );
}

export default Home;
