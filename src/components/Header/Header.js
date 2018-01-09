import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './../../assets/blogMtn.svg';

class Header extends Component{
  render() {
    return (
      <header className='app-header'>
        <Link className="nav-link" to='/'>
          <img className='logo' src={ logo } alt=""/>
        </Link>

        <Link className="nav-link" to='/search'>Search</Link>
        <Link className="nav-link" to='/add'>Add Post</Link>
        <Link className="nav-link" to="/user">New User</Link>
      </header>
    )
  }
}

export default Header;