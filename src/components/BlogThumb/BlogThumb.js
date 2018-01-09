import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './BlogThumb.css';

class BlogThumb extends Component{
  render() {
    const { blog } = this.props;

    return (
      <Link to={ `/blog/${blog.id}` } className='BlogThumb__container' style={ { backgroundImage: `url(${ blog.image })` } }>
        <h4>{ blog.title }</h4>
        <h5> {blog.subTitle }</h5>
      </Link>
    )
  }
}

export default BlogThumb;