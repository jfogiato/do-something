import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import logoImage from '../../images/DoSomething.png'


const NotFound = ({error, resetError}) => {
  return (
    <section className='not-found'>
      <h1>Dang. The page you're looking for has either moved or doesn't exist.</h1>
      <div className='go-home-container'>
        <h2>Try <Link to='/' className='link home-link'>heading home.</Link></h2>
        <img className='mini-logo' src={logoImage}/>
      </div>
      {error?.message && <p>Error status: {error.message}</p>}
    </section>
  );
}

export default NotFound;