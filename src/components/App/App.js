import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Header/Header';
import FormPage from '../FormPage/FormPage';
import YouCould from '../YouCould/YouCould';
import YouDid from '../YouDid/YouDid';
import fetchCall from '../../utilities/apiCalls';
import NotFound from '../NotFound/NotFound';

const App = () => {
  const [activities, setActivities] = useState([]);
  const [currentActivity, setCurrentActivity] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const localActivities = JSON.parse(window.localStorage.getItem('activities'));
    if (localActivities) {
      setActivities(localActivities);
    }
  }, []);

  const getActivity = activityPreferences => {
    fetchCall(activityPreferences)
      .then(data => {
        if (data instanceof Error) {
          setError(data);
          return;
        }
        setCurrentActivity({...data, done: false});
      });
  }

  const addActivity = () => {
    const existingActivity = activities.find(act => act.key === currentActivity.key);
    if(!existingActivity) {
      const newActivities = [currentActivity, ...activities];
      setLocalActivites(newActivities);
      return;
    }
    window.alert('You have already saved that activity! Try another.');
  }

  const removeActivity = key => {
    const updatedActivites = activities.filter(act => act.key !== key);
    setLocalActivites(updatedActivites);
  }

  const setLocalActivites = updatedActivities => {
    window.localStorage.setItem('activities', JSON.stringify(updatedActivities));
    setActivities(updatedActivities);
  }

  const setActivityStatus = key => {
    const updatedActivities = activities.map(act => {
      if (parseInt(act.key) === parseInt(key)) {
        return {
          ...act,
          done: !act.done
        };
      }
      return act;
    });
    setLocalActivites(updatedActivities);
  }

  const resetError = () => {
    setError('');
  }

  return (
    <main>
      <Header />
      {error && <NotFound error={error} resetError={resetError}/>}
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/i-want-to' render={() => <FormPage getActivity={getActivity}/>}/>
        <Route exact path='/you-could-do' render={() => !error && <YouCould addActivity={addActivity} activityObject={currentActivity}/>}/>
        <Route exact path='/you-did' render={() => <YouDid activitiesData={activities} removeActivity={removeActivity} setActivityStatus={setActivityStatus}/>}/>
        <Route exact path='/404'><NotFound /></Route>
        <Route path='*'><Redirect to='/404'/></Route>
      </Switch>
    </main>
  );
}

export default App;