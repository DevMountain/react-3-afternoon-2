import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Formatted from './Formatted/Formatted';

// import axios

class Blog extends Component{
  constructor(){
    super();

    this.state = {
      blog: {}
    };
  }

  // insert componentDidMount method

  render() {
    const { blog } = this.state;

    return (
      <div className='parent' style={ { padding: '0' } }>
        <div className="Blog__img" style={ { backgroundImage: `url(${blog.image})` } }>
          <h1>{ blog.title }</h1>
        </div>

        <div className="Blog__container">
          <h2>{blog.subTitle}</h2>

          <br/>

          {
            blog.name
            ?
              <h3>{blog.name}</h3>
            :
              null
          }

          <hr/><br/>
          
          {
            <Formatted text={ blog.text } />
          }
        </div>

        <Link to={ `/edit/${blog.id}` }>
          <button>Edit</button>
        </Link>
        
        <br/>
      </div>
    )
  }
}

export default Blog;