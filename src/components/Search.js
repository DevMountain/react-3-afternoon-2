import React, { Component } from 'react';
import BlogTile from './subcomponents/BlogTile';



class Search extends Component{
    constructor(){
        super();
        this.state = {
            searchTerm: '',
            searchResults: [],
            searchType: 'blogs',
        }
    }

    // Insert a componentDidMount method?
    
    // Insert a search method to make an axios request to setState -> display.
    
    
    
    render(){
        // map over the searchResults here
        const results = this.state.searchResults.map((c,i)=> <BlogTile key={i} blog={c}/> )
        return(
            <div className='content' >
                <form className='search-group' onSubmit={_=>this.search()} >
                    <label htmlFor="">Search Blog Posts </label>
                    <input autoFocus onChange={e=>this.changeSearch(e.target.value)} value={this.state.searchTerm} type="text"/>
                    <button type="submit">Search</button>
                    <input type='radio' name='searchType' value='blogs' onChange={e=>this.changeSearchType(e.target.value)}/> Blogs
                    <input type='radio' name='searchType' value='users' onChange={e=>this.changeSearchType(e.target.value)}/> Users
                </form>
                <div className="blog-list">
                    {/* insert your mapped data from searchResults here */}
                    {results}
                </div>
                
            </div>
        )
    }
    changeSearch(val){
        this.setState({
            searchTerm: val
        })
    }
    changeSearchType(val){
        val
        this.setState({
            searchType: val
        })
    }
}

export default Search;