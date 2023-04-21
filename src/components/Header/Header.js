import React from 'react';
import './Header.css';
import { Link, Route, Switch } from 'react-router-dom';
import logoImage from '../../images/DoSomething.png';

const Header = () => {
  return (
    <Switch>
      <Route exact path='/'></Route>
      <Route path='*'>
        <header data-cy='header'>
          <Link to='/' className='link'><img className='logo-link'  src={logoImage}/></Link>
          <Link to='/i-want-to' className='link smthg-link'>Do Something Else.</Link>
        </header>
      </Route>
    </Switch>
  );
}

export default Header;