import './App.css';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Header/Header';
import FormPage from '../FormPage/FormPage';
import YouCould from '../YouCould/YouCould';
import YouDid from '../YouDid/YouDid';
import testData from '../../data/testData';
import fetchCall from '../../utilities/apiCalls';

const App = () => {
  const [activities, setActivities] = useState([]);
  const [currentActivity, setCurrentActivity] = useState({});

  useEffect(() => {
    setActivities(testData);
  }, []);

  const getActivity = activityPreferences => {
    fetchCall(activityPreferences)
      .then(data => {
        setCurrentActivity(data)
      });
  }

  const addActivity = () => {
    const newActivities = [currentActivity, ...activities];
    setActivities(newActivities);
  }

  return (
    <main>
      <Header />
      <Route exact path='/' component={Home}/>
      <Route exact path='/i-want-to' render={() => <FormPage getActivity={getActivity}/>}/>
      <Route exact path='/you-could-do' render={() => <YouCould addActivity={addActivity} activityObject={currentActivity}/>}/>
      <Route exact path='/you-did' render={() => <YouDid activitiesData={activities}/>}/>
    </main>
  );
}

export default App;