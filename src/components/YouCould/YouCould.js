import React from 'react';
import './YouCould.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const YouCould = ({ activityObject, addActivity }) => {

  const { activity, link } = activityObject;

  const match =
    <>
      <h2>You could...</h2>
      <div className='activity-container'>
        <h3 data-cy='activity-name'>{activity}</h3>
        {link && <a href={link}>Link</a>}
        <form className='activity-choose-form'>
          <Link data-cy='do-it-btn' to='/you-did' onClick={addActivity} className='uni-btn'>Do it.</Link>
          <Link data-cy='nah-btn' to='/i-want-to' className='uni-btn'>Nah.</Link>
        </form>
      </div>
    </>
  ;

  const noMatch = 
    <section className='activity-container'>
      <p>Nothing to do given those contraints.</p>
      <Link data-cy='back-btn' to='/i-want-to' className='uni-btn'>Try something else.</Link>
    </section>
  ;

  return (
    <section className='you-could'>
        {activity ? match : noMatch}
    </section>
  );
}

export default YouCould;

YouCould.propTypes = {
  activityObject: PropTypes.object.isRequired,
  addActivity: PropTypes.func.isRequired
};
