import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './../../assets/blogMtn.svg';
import './Header.css';

class Header extends Component{
  render() {
    return (
      <header className='Header__container'>
        <Link className="Header__link" to='/'>
          <img className='Header__logo' src={ logo } alt=""/>
        </Link>

        <Link className="Header__link" to='/search'>Search</Link>
        <Link className="Header__link" to='/add'>Add Post</Link>
        <Link className="Header__link" to="/user">New User</Link>
      </header>
    )
  }
}

export default Header;