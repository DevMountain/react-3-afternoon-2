import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hero extends Component{
    
    render(){
        const blog = this.props.blog;
        return(
            <Link to={`/blog/${blog.id}`}>
                <div className='hero-container' style={{backgroundImage: 'url('+blog.image+')'}}>
                    <h1 className="hero-title">{blog.title}</h1>
                    <h3 className="hero-subtitle">{blog.subTitle}</h3>
                </div>
            </Link>
        )
    }
}

export default Hero;