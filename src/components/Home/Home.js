import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='home' data-cy='home'>
      <h1 className='logo' data-cy='home-logo'>Do Something.</h1>
      <h2 className='blurb-one'>Feeling stuck, bored, unproductive, unmotivated or otherwise uninspired?</h2>
      <p className='blurb-two'>Choose your constraints.</p>
      <p className='blurb-two'>Select an activity.</p>
      <Link to='/i-want-to' className='uni-btn' data-cy='go-to-form-btn'>Do Something.</Link>
    </div>
  );
}

export default Home;