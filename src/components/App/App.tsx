import './App.css';
import { useEffect, useState } from 'react';
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
import { Activity, FetchError, ActivityPreferences } from '../../models';

const App: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [currentActivity, setCurrentActivity] = useState<Activity>();
  const [error, setError] = useState<FetchError>();
  const [first, setFirst] = useState<boolean>(true);
  const [typeFormValue, setTypeFormValue] = useState<string>('');
  const [partFormValue, setPartFormValue] = useState<string>('');
  const [costFormValue, setCostFormValue] = useState<string>('');
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const rawActivities = window.localStorage.getItem('activities');
    if (!rawActivities) return;
    const localActivities = JSON.parse(rawActivities) as Activity[];
    if (localActivities) {
      setActivities(localActivities);
      setFirst(false);
    }
  }, []);

  const getActivity = (activityPreferences: ActivityPreferences) : void => {
    fetchCall(activityPreferences)
      .then(data => {
        if (data.error) {
          setError(data);
          return;
        }
        setCurrentActivity({...data, done: false});
      });
  }

  const addActivity = () : void => {
    const existingActivity = activities.find(act => act.key === currentActivity?.key);
    if(!existingActivity) {
      const newActivities = [currentActivity, ...activities];
      setLocalActivites(newActivities);
      return;
    }
    window.alert('You have already saved that activity! Try another.');
  }

  const removeActivity = (key : string) => {
    const updatedActivites = activities.filter(act => act.key !== key);
    setLocalActivites(updatedActivites);
  }

  const setLocalActivites = (updatedActivities : any) => {
    window.localStorage.setItem('activities', JSON.stringify(updatedActivities));
    setActivities(updatedActivities);
  }

  const setActivityStatus = (key : string) => {
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
    setError(undefined);
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
          <Route exact path='/404'><NotFound error={error} resetError={resetError}/></Route>
          <Route path='*'><Redirect to='/404'/></Route>
        </Switch>
        <ThemeToggle toggleTheme={toggleTheme}/>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;