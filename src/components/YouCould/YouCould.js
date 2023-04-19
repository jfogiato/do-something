import React from 'react';
import './YouCould.css';


const YouCould = ({ activityObject }) => {

  const { activity, link } = activityObject;

  return (
    <section className='you-could'>
      <h2>You could...</h2>
      <div className='activity-container'>
        <h3>{activity}</h3>
        {link !== '' && <p>{link}</p>}
        <form className='activity-choose-form'>
          <button className='uni-btn'>Do it.</button>
          <button className='uni-btn'>Nah.</button>
        </form>
      </div>
    </section>
  );
}

export default YouCould;
