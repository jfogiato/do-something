import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Header/Header';
import FormPage from '../FormPage/FormPage';
import YouCould from '../YouCould/YouCould';
import YouDid from '../YouDid/YouDid';
import testData from '../../data/testData';
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
        setCurrentActivity(data);
      });
  }

  const addActivity = () => {
    const newActivities = [currentActivity, ...activities];
    window.localStorage.setItem('activities', JSON.stringify(newActivities))
    setActivities(newActivities);
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
        <Route exact path='/you-could-do' render={() => <YouCould addActivity={addActivity} activityObject={currentActivity}/>}/>
        <Route exact path='/you-did' render={() => <YouDid activitiesData={activities}/>}/>
        <Route exact path='/404'><NotFound /></Route>
        <Route path='*'><Redirect to='/404'/></Route>
      </Switch>
    </main>
  );
}

export default App;