import React, { useState } from 'react';
import './FormPage.css';

const FormPage = () => {
  const [type, setType] = useState('');
  const [participants, setParticipants] = useState('');
  const [cost, setCost] = useState('');

  const activitiesDrop = 
    <select name='type' value={type} onChange={e => setType(e.target.value)}>
      <option value="busywork">a busywork</option>
      <option value="charity">a charitable</option>
      <option value="cooking">a cooking</option>
      <option value="diy">a DIY</option>
      <option value="education">an educational</option>
      <option value="music">a musical</option>
      <option value="recreational">a recreational</option>
      <option value="relaxation">a relaxing</option>
      <option value="social">a social</option>
    </select>
  ;

  const participantsDrop = 
    <select name='type' value={participants} onChange={e => setParticipants(e.target.value)}>
      <option value="1">solo</option>
      <option value="2">with someone else</option>
      <option value="minparticipants=3&maxpartcipants=100">with a group of folks</option>
    </select>
  ;

  const costDrop = 
    <select name='type' value={cost} onChange={e => setCost(e.target.value)}>
      <option value="0">free</option>
      <option value="minprice=0&maxprice=0.5">on the cheap</option>
      <option value="minprice=.5">cost unprohibitive</option>
    </select>
  ;

  return (
    <form className='form-page'>
      <h2>I want {activitiesDrop} activity that I can do {participantsDrop} and it should be {costDrop}.</h2>
      <button type='submit' className='uni-btn'>What can I do?</button>
    </form>
  );
}

export default FormPage;