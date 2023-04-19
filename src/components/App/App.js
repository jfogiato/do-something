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
      {/* <Home /> */}
      <Header />
      {/* <FormPage /> */}
      <YouCould activityObject={testData[0]}/>
      {/* <YouDid /> */}
    </main>
  );
}

export default App;