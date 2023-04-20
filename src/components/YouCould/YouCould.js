import React from 'react';
import './YouCould.css';
import { Link } from 'react-router-dom';


const YouCould = ({ activityObject, addActivity }) => {

  const { activity, link } = activityObject;

  return (
    <section className='you-could'>
      <h2>You could...</h2>
      <div className='activity-container'>
        <h3 data-cy='activity-name'>{activity}</h3>
        {link && <a href={link}>Link</a>}
        <form className='activity-choose-form'>
          <Link data-cy='do-it-btn' to='/you-did' onClick={addActivity} className='uni-btn'>Do it.</Link>
          <Link data-cy='nah-btn' to='/i-want-to' className='uni-btn'>Nah.</Link>
        </form>
      </div>
    </section>
  );
}

export default YouCould;
