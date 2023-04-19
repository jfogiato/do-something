import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <h1 className='logo'>Do Something.</h1>
      <h2 className='blurb-one'>Feeling stuck, bored, unproductive, unmotivated or otherwise uninspired?</h2>
      <p className='blurb-two'>Choose your constraints.</p>
      <p className='blurb-two'>Select an activity.</p>
      <Link className='uni-btn'>Do Something.</Link>
    </div>
  );
}

export default Home;