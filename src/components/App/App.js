import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../Header/Header';
import { FormPage } from '../FormPage/FormPage';

export const App = () => {
  return (
    <main className="App">
      <Header />
      <Home />
      <FormPage />
    </main>
  );
}
