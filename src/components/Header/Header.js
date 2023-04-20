import React from 'react';
import './Header.css';
import { Link, Route, Switch } from 'react-router-dom';

const Header = () => {
  return (
    <Switch>
      <Route exact path='/'></Route>
      <Route path='*'>
        <header data-cy='header'>
          <Link to='/' className='link'>Do Something.</Link>
          <Link to='/i-want-to' className='link'>Do Something Else.</Link>
        </header>
      </Route>
    </Switch>
  );
}

export default Header;