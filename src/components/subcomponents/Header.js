import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './../../img/blogMtn.svg';

class Header extends Component{
    
    render(){
        return(
            <header className='app-header'>
                <Link className="nav-link" to='/'>
                    <img className='logo' src={logo} alt=""/>
                </Link>
                <Link className="nav-link" to='/search'>Search</Link>
                <Link className="nav-link" to='/add'>Add Post</Link>
            </header>
        )
    }
}
export default Header;