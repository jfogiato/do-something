import React, { useEffect, useState } from 'react';
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

  const checkAndActivate = e => {
    if (e.keyCode === 13 || e.type === 'click') {
      setActive(!active);
    }
  }

  const checkAndRemove = e => {
    if (e.keyCode === 13 || e.type === 'click') {
      if (window.confirm('This will delete the activity - continue?')) {
        removeActivity(activityData.key);
      }
    }
  }

  const pendingIcon =
    <div className='btn-container'>
      <a
        href={activityData.link ? activityData.link : searchLink}
        target="_blank"
        rel="noreferrer"
        className="material-symbols-outlined"
        >link
      </a>
      <span
        tabIndex='0'
        className="material-symbols-outlined"
        data-cy='pending-button'
        onClick={checkAndActivate}
        onKeyDown={checkAndActivate}
        >pending
      </span>
    </div>
  ;

  const doneIcon = 
    <span
      tabIndex='0'
      className="material-symbols-outlined"
      data-cy='done-button'
      onClick={checkAndActivate}
      onKeyDown={checkAndActivate}
      >check_circle
    </span>
  ;

  const cancelIcon =
    <span
      tabIndex='0'
      className="material-symbols-outlined"
      data-cy='cancel-button'
      onClick={checkAndActivate}
      onKeyDown={checkAndActivate}
      >arrow_back
    </span>
  ;

  const deleteIcon =
  <span
    tabIndex='0' 
    className="material-symbols-outlined"
    data-cy='delete-button'
    onClick={checkAndRemove}
    onKeyDown={checkAndRemove}
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
      <p className={done && active ? 'line-style title-expanded' : done ? 'line-style title' : active ? "title-expanded" : 'title'} data-cy='activity-name'>{activityData.activity}</p>
      {active ? didBtn : done ? doneIcon : pendingIcon}
    </div>
  );
}

export default ActivityCard;

ActivityCard.propTypes = {
  activityData: PropTypes.object.isRequired,
  setActivityStatus: PropTypes.func.isRequired,
  removeActivity: PropTypes.func.isRequired
}