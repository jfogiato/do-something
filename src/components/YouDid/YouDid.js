import React from 'react';
import './YouDid.css';
import ActivityCard from '../ActivityCard/ActivityCard';
import PropTypes, { object } from 'prop-types';

const YouDid = ({ activitiesData }) => {
  
  const activities = activitiesData.map((activity, i) => {
    return <ActivityCard activityData={activity} key={i}/>
  });

  return (
    <section className='you-did'>
      <h2 data-cy='things-header'>Things you want to do.</h2>
      <section className='activities-container'>
        {activities}
      </section>
    </section>  
  );
}

export default YouDid;

YouDid.propTypes = {
  activitiesData: PropTypes.arrayOf(object).isRequired
}