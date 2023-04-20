import React, { useState } from 'react';
import './ActivityCard.css';

const ActivityCard = ({ activityData }) => {
  const [done, setDone] = useState(false);
  const [active, setActive] = useState(false);

  const toggleDone = () => {
    setDone(!done); 
    setActive(!active);
  }

  const pendingIcon = 
    <span 
      className="material-symbols-outlined"
      data-cy='pending-button'
      onClick={() => setActive(!active)}
    >pending
    </span>
  ;

  const doneIcon = 
    <span 
      className="material-symbols-outlined"
      data-cy='done-button'
      onClick={() => setActive(!active)}
    >check_circle
    </span>
  ;

  const cancelIcon =
    <span
      class="material-symbols-outlined"
      data-cy='cancel-button'
      onClick={() => setActive(!active)}
    >arrow_back
    </span>
  ;

  const didBtn =
    <div className='did'>
      {cancelIcon}
      <button className='uni-btn' data-cy='done-button' onClick={toggleDone}>
        {done ? 'Didn\'t do it.' : 'Did it.'}
      </button>
    </div>
  ;

  return (
    <div className='activity' key={activityData.key}>
      <p className={done && 'line-style'} data-cy='activity-name'>{activityData.activity}</p>
      {active ? didBtn : done ? doneIcon : pendingIcon}
    </div>
  );
}

export default ActivityCard;