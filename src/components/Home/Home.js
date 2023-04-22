import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logoImage from '../../images/DoSomething.png';

const Home = () => {
  return (
    <div className='home' data-cy='home'>
      <div className='header-wrapper'>
        <img className='logo-image' alt='Do Something Logo' src={logoImage}/>
        <h1 className='logo' data-cy='home-logo'>Do Something.</h1>
      </div>
      <h2 className='blurb-one'>Feeling stuck, bored, unproductive, unmotivated or otherwise uninspired?</h2>
      <div>
        <h3 className='blurb-two'>Choose your constraints.</h3>
        <h3 className='blurb-two'>Select an activity.</h3>
        <Link to='/i-want-to' className='uni-btn' data-cy='go-to-form-btn'>Do Something.</Link>
      </div>
    </div>
  );
}

export default Home;