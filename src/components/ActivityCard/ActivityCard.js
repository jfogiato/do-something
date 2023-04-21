import React, { useState } from 'react';
import './ActivityCard.css';
import PropTypes from 'prop-types';

const ActivityCard = ({ activityData, setActivityStatus, removeActivity }) => {
  const [done, setDone] = useState(activityData.done);
  const [active, setActive] = useState(false);

  const searchLink = `https://www.google.com/search?q=${activityData.activity.split(" ").join("+")}`;

  const toggleDone = () => {
    setActivityStatus(activityData.key);
    setDone(!done); 
    setActive(!active);
  }

  const pendingIcon =
    <div className='btn-container'>
      <a
        href={activityData.link ? activityData.link : searchLink}
        className="material-symbols-outlined"
        >link
      </a>
      <span 
        className="material-symbols-outlined"
        data-cy='pending-button'
        onClick={() => setActive(!active)}
        >pending
      </span>
    </div>
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

  const deleteIcon =
  <span 
    class="material-symbols-outlined"
    onClick={() => removeActivity(activityData.key)}
    >delete_forever
  </span>

  const didBtn =
    <div className='did'>
      {cancelIcon}
      {deleteIcon}
      <button className='uni-btn' data-cy='done-button' onClick={toggleDone}>
        {done ? 'Didn\'t do it.' : 'Did it.'}
      </button>
    </div>
  ;

  return (
    <div className='activity'>
      <p className={done ? 'line-style title' : 'title'} data-cy='activity-name'>{activityData.activity}</p>
      {active ? didBtn : done ? doneIcon : pendingIcon}
    </div>
  );
}

export default ActivityCard;

ActivityCard.propTypes = {
  activityData: PropTypes.object.isRequired,
  setActivityStatus: PropTypes.func.isRequired
}