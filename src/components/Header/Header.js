import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link className='link'>Do Something.</Link>
      <Link className='link'>Do Something Else.</Link>
    </header>
  );
}

export default Header;