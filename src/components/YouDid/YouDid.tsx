import React, { useContext } from 'react';
import './YouDid.css';
import ActivityCard from '../ActivityCard/ActivityCard';
import ThemeContext from '../../Contexts/ThemeContext';
import { Activity } from '../../models';

type YouDidProps = {
  activitiesData: Array<object>,
  setActivityStatus: Function,
  removeActivity: Function
};

const YouDid: React.FC<YouDidProps> = ({ activitiesData, setActivityStatus, removeActivity }) => {
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