import React, { useContext, useState } from 'react';
import './Header.css';
import { Link, Route, Switch } from 'react-router-dom';
import logoImage from '../../images/DoSomethingHeader.png';
import logoImagePoke from '../../images/DoSomethingHeaderPoke.png';
import ThemeContext from '../../Contexts/ThemeContext';

const Header = () => {
  const [hover, setHover] = useState(false);
  const theme = useContext(ThemeContext);

  const logoStyle = `logo-link ${theme === 'dark' && 'logo-image-dark'}`;

  const toggleHover = () => {
    setHover(!hover);
  }

  return (
    <Switch>
      <Route exact path='/'></Route>
      <Route exact path='/404'></Route>
      <Route path='/i-want-to'>
        <header data-cy='header' className={`${theme}`}>
          <Link to='/' className='link'><img alt='Do Something Logo' className={logoStyle}  src={hover ? logoImagePoke : logoImage} onMouseEnter={toggleHover} onMouseLeave={toggleHover} onTouchStart={toggleHover} onTouchEnd={toggleHover}/></Link>
          <Link to='/you-did' data-cy='you-did-btn' className={`link smthg-link ${theme}`}>To do.</Link>
        </header>
      </Route>
      <Route path='*'>
        <header data-cy='header' className={`${theme}`}>
          <Link to='/' className='link'><img alt='Do Something Logo' className={logoStyle}  src={hover ? logoImagePoke : logoImage} onMouseEnter={toggleHover} onMouseLeave={toggleHover} onTouchStart={toggleHover} onTouchEnd={toggleHover}/></Link>
          <Link to='/i-want-to' className={`link smthg-link ${theme}`}>Do Something Else.</Link>
        </header>
      </Route>
    </Switch>
  );
}

export default Header;