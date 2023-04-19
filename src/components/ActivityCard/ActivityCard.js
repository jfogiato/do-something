import React, { useState } from 'react';
import './ActivityCard.css';

const ActivityCard = ({ activityData }) => {
  const [done, setDone] = useState(false);

  const pendingIcon = 
    <span 
      class="material-symbols-outlined"
    >
      pending
    </span>
  ;

  const doneIcon = 
    <span 
      class="material-symbols-outlined"
    >
      check_circle
    </span>
  ;

  return (
    <div className='activity' key={activityData.key}>
      <p>{activityData.activity}</p>
      {done ? doneIcon : pendingIcon}
    </div>
  );
}

export default ActivityCard;

// pending icon, when clicked, toggles "Did it button"
// Did It button, when clicked, changles styles