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
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import ThemeContext from '../../Contexts/ThemeContext';

const App = () => {
  const [activities, setActivities] = useState([]);
  const [currentActivity, setCurrentActivity] = useState({});
  const [error, setError] = useState('');
  const [first, setFirst] = useState(true);
  const [typeFormValue, setTypeFormValue] = useState('');
  const [partFormValue, setPartFormValue] = useState('');
  const [costFormValue, setCostFormValue] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const localActivities = JSON.parse(window.localStorage.getItem('activities'));
    if (localActivities) {
      setActivities(localActivities);
      setFirst(false);
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

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const resetError = () => {
    setError('');
  }

  return (
    <ThemeContext.Provider value={theme}>
      <main>
        <Header />
        {error && <NotFound error={error} resetError={resetError}/>}
        <Switch>
          <Route exact path='/' render={() => <Home first={first}/>}/>
          <Route exact path='/i-want-to' render={() => 
            <FormPage 
              getActivity={getActivity} 
              typeFormValue={typeFormValue}
              setTypeFormValue={setTypeFormValue}
              costFormValue={costFormValue}
              setCostFormValue={setCostFormValue}
              partFormValue={partFormValue}
              setPartFormValue={setPartFormValue}
            />
          }/>
          <Route exact path='/you-could-do' render={() => !error && <YouCould addActivity={addActivity} activityObject={currentActivity} setFirst={setFirst}/>}/>
          <Route exact path='/you-did' render={() => <YouDid activitiesData={activities} removeActivity={removeActivity} setActivityStatus={setActivityStatus}/>}/>
          <Route exact path='/404'><NotFound /></Route>
          <Route path='*'><Redirect to='/404'/></Route>
        </Switch>
        <ThemeToggle toggleTheme={toggleTheme}/>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;