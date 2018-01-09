import React, { Component } from 'react';
import Hero from './Hero/Hero';
import BlogThumb from '../BlogThumb/BlogThumb';

// import axios

class Home extends Component{
    constructor(){
        super();
        this.state = {
            featured: '',
            index: 0,
            posts: [{title: "Loading...",image: 'https://unsplash.it/900/400/?random'}]
        }
    }

    // insert componentWillMount:
    

    render(){
        // map over your recommended blogs here, replace null.
        const posts = null

        return(
            <div className="content" >
                <Hero blog={this.state.posts[this.state.index]} />
                <hr/>
                <div className="blog-grid">
                    {/* put your mapped blogs here */}
                    {posts}
                </div>
            </div>
        )
    }
}

export default Home;