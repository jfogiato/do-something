import React, { useState } from 'react';
import './ActivityCard.css';
import PropTypes from 'prop-types';

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
      className="material-symbols-outlined"
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
    <div className='activity'>
      <p className={done ? 'line-style' : null} data-cy='activity-name'>{activityData.activity}</p>
      {active ? didBtn : done ? doneIcon : pendingIcon}
    </div>
  );
}

export default ActivityCard;

ActivityCard.propTypes = {
  activityData: PropTypes.object.isRequired
}