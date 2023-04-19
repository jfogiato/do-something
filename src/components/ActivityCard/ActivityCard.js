import React, { useState } from 'react';
import './ActivityCard.css';

const ActivityCard = ({ activityData }) => {
  const [done, setDone] = useState(false);
  const [active, setActive] = useState(false);

  const pendingIcon = 
    <span 
      className="material-symbols-outlined"
      onClick={() => setActive(!active)}
    >pending
    </span>
  ;

  const doneIcon = 
    <span 
      className="material-symbols-outlined"
      onClick={() => setActive(!active)}
    >check_circle
    </span>
  ;

  const cancelIcon =
    <span
      class="material-symbols-outlined"
      onClick={() => setActive(!active)}
    >arrow_back
    </span>
  ;

  const didBtn =
    <div className='did'>
      {cancelIcon}
      <button className='uni-btn' onClick={() => {setDone(!done); setActive(!active);}}>
        {done ? 'Didn\'t do it.' : 'Did it.'}
      </button>
    </div>
  ;

  return (
    <div className='activity' key={activityData.key}>
      <p>{activityData.activity}</p>
      {active ? didBtn : done ? doneIcon : pendingIcon}
    </div>
  );
}

export default ActivityCard;