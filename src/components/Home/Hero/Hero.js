import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Hero.css';

class Hero extends Component{
  render(){
    const { blog } = this.props;

    return (
      <Link to={ `/blog/${blog.id}` }>
        <div className='Hero__container' style={ { backgroundImage: `url(${ blog.image })` } }>
          <h1>{ blog.title }</h1>
          <h3>{ blog.subTitle }</h3>
        </div>
      </Link>
    )
  }
}

export default Hero;