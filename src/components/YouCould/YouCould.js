import React from 'react';
import './YouCould.css';
import { Link } from 'react-router-dom';


const YouCould = ({ activityObject }) => {

  const { activity, link } = activityObject;

  return (
    <section className='you-could'>
      <h2>You could...</h2>
      <div className='activity-container'>
        <h3>{activity}</h3>
        {link !== '' && <p>{link}</p>}
        <form className='activity-choose-form'>
          <Link to='/you-did' className='uni-btn'>Do it.</Link>
          <Link to='/i-want-to' className='uni-btn'>Nah.</Link>
        </form>
      </div>
    </section>
  );
}

export default YouCould;
