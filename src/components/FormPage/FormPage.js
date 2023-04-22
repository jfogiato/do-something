import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FormPage.css';
import PropTypes from 'prop-types';

const FormPage = ({ getActivity }) => {
  const [type, setType] = useState('');
  const [participants, setParticipants] = useState('');
  const [cost, setCost] = useState('');

  const activitiesDrop = 
    <select data-cy='type-drop' name='type' value={type} onChange={e => setType(e.target.value)}>
      <option value='' disabled selected>any</option>
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
    <select data-cy='participants-drop' name='type' value={participants} onChange={e => setParticipants(e.target.value)}>
      <option value='' disabled selected>solo or with others</option>
      <option value='participants=1'>solo</option>
      <option value='participants=2'>with someone else</option>
      <option value='minparticipants=3&maxpartcipants=100'>with a group of folks</option>
    </select>
  ;

  const costDrop = 
    <select data-cy='cost-drop' name='type' value={cost} onChange={e => setCost(e.target.value)}>
      <option value='' disabled selected>irrelevant</option>
      <option value='price=0'>free</option>
      <option value='minprice=0&maxprice=0.5'>cheap</option>
      <option value='minprice=.5'>pricey</option>
    </select>
  ;

  const submitPreferences = () => {
    getActivity({type: type, participants: participants, cost: cost});
  }

  return (
    <form className='form-page' data-cy='form-page'>
      <h2 data-cy='form-blurb'>I want {activitiesDrop} activity that I can do {participantsDrop} and the cost can be {costDrop}.</h2>
      <Link to='/you-could-do' data-cy='get-activity-btn' onClick={submitPreferences} className='uni-btn'>What can I do?</Link>
    </form>
  );
}

export default FormPage;

FormPage.propTypes = {
  getActivity: PropTypes.func.isRequired
}