import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogTile extends Component{
    
    render(){
        const blog = this.props.blog;
        return(
            <Link to={`/blog/${blog.id}`} className='blog-tile'>
                <img src={blog.image} alt=""/>
                <h3>{blog.title}</h3>
                <h4>{blog.subTitle}</h4>
                <p>{blog.text.slice(0, 501)}{blog.text.length > 500?<span>...</span>: null}</p>
            </Link>
        )
    }
}

export default BlogTile;