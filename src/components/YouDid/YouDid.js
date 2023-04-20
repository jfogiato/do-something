import React from 'react';
import './YouDid.css';
import ActivityCard from '../ActivityCard/ActivityCard';

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