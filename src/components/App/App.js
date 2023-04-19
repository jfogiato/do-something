import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Header/Header';
import FormPage from '../FormPage/FormPage';
import YouCould from '../YouCould/YouCould';
import YouDid from '../YouDid/YouDid';
import testData from '../../data/testData';

const App = () => {
  return (
    <main>
      <Header />
      <Route exact path='/' component={Home}/>
      <Route exact path='/i-want-to' component={FormPage}/>
      <Route exact path='/you-could-do' render={() => <YouCould activityObject={testData[0]}/>}/>
      <Route exact path='/you-did' render={() => <YouDid activitiesData={testData}/>}/>
    </main>
  );
}

export default App;