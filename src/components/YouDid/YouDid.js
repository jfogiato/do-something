import React, { useContext } from 'react';
import './YouDid.css';
import ActivityCard from '../ActivityCard/ActivityCard';
import PropTypes, { object } from 'prop-types';
import ThemeContext from '../../Contexts/ThemeContext';

const YouDid = ({ activitiesData, setActivityStatus, removeActivity }) => {
  const theme = useContext(ThemeContext);

  const activities = activitiesData.map((activity, i) => {
    return <ActivityCard removeActivity={removeActivity} setActivityStatus={setActivityStatus} activityData={activity} key={i}/>
  });
  
  return (
    <section className={`you-did ${theme}`}>
      <h2 className={`you-did-title ${theme}`} data-cy='things-header'>Things you want to do.</h2>
      <section className='activities-container'>
        {activities}
      </section>
    </section>
  );
}

export default YouDid;

YouDid.propTypes = {
  activitiesData: PropTypes.arrayOf(object).isRequired,
  setActivityStatus: PropTypes.func.isRequired,
  removeActivity: PropTypes.func.isRequired
}