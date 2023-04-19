import React from 'react';
import './YouDid.css';
import ActivityCard from '../ActivityCard/ActivityCard';

const YouDid = ({ activitiesData }) => {
  
  const activities = activitiesData.map(activity => {
    return <ActivityCard activityData={activity} />
  });

  return (
    <section className='you-did'>
      <h2>Things you want to do.</h2>
      <section className='activities-container'>
        {activities}
      </section>
    </section>
  );
}

export default YouDid;