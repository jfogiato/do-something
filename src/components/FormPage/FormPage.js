import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './FormPage.css';
import PropTypes from 'prop-types';
import ThemeContext from '../../Contexts/ThemeContext';

const FormPage = ({ getActivity, typeFormValue, setTypeFormValue, costFormValue, setCostFormValue, partFormValue, setPartFormValue }) => {
  const [type, setType] = useState(typeFormValue);
  const [participants, setParticipants] = useState(partFormValue);
  const [cost, setCost] = useState(costFormValue);
  const theme = useContext(ThemeContext);

  const activitiesDrop = 
    <select className={`${theme}`} data-cy='type-drop' name='type' value={type} onChange={e => setType(e.target.value)}>
      <option value=''>any</option>
      <option value='type=busywork'>a busywork</option>
      <option value='type=charity'>a charitable</option>
      <option value='type=cooking'>a cooking</option>
      <option value='type=diy'>a DIY</option>
      <option value='type=education'>an educational</option>
      <option value='type=music'>a musical</option>
      <option value='type=recreational'>a recreational</option>
      <option value='type=relaxation'>a relaxing</option>
      <option value='type=social'>a social</option>
    </select>
  ;

  const participantsDrop = 
    <select className={`${theme}`} data-cy='participants-drop' name='type' value={participants} onChange={e => setParticipants(e.target.value)}>
      <option value=''>solo or with others</option>
      <option value='participants=1'>solo</option>
      <option value='participants=2'>with someone else</option>
      <option value='minparticipants=3&maxpartcipants=100'>with a group of folks</option>
    </select>
  ;

  const costDrop = 
    <select className={`${theme}`} data-cy='cost-drop' name='type' value={cost} onChange={e => setCost(e.target.value)}>
      <option value=''>irrelevant</option>
      <option value='price=0'>free</option>
      <option value='minprice=0&maxprice=0.5'>cheap</option>
      <option value='minprice=.5'>pricey</option>
    </select>
  ;

  const submitPreferences = () => {
    setTypeFormValue(type);
    setPartFormValue(participants);
    setCostFormValue(cost);
    getActivity({type: type, participants: participants, cost: cost});
  }

  return (
    <form className={`form-page ${theme}`} data-cy='form-page'>
      <h2 data-cy='form-blurb'>I want {activitiesDrop} activity that I can do {participantsDrop} and the cost can be {costDrop}.</h2>
      <Link to='/you-could-do' data-cy='get-activity-btn' onClick={submitPreferences} className='uni-btn'>What can I do?</Link>
    </form>
  );
}

export default FormPage;

FormPage.propTypes = {
  getActivity: PropTypes.func.isRequired,
  typeFormValue: PropTypes.string.isRequired,
  setTypeFormValue: PropTypes.func.isRequired,
  costFormValue: PropTypes.string.isRequired,
  setCostFormValue: PropTypes.func.isRequired,
  partFormValue: PropTypes.string.isRequired,
  setPartFormValue: PropTypes.func.isRequired
}