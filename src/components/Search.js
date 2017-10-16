import React, { Component } from 'react';

import BlogTile from './subcomponents/BlogTile';
import UserTile from './subcomponents/UserTile';

// import axios

class Search extends Component{
    constructor(){
        super();
        this.state = {
            searchTerm: '',
            blogResults: [],
            userResults: [],
            searchType: 'blogs',
        }
    }
    
    
    // insert search method
    
    
    render(){
        // map over the blogResults and userResults here, replace the empty arrays.
        const blogResults = []
        const userResults = []

        return(
            <div className='content search-view' >
                <form className='search-group' onSubmit={e=>this.search(e)} >
                    <label htmlFor="">Search Blog</label>
                    <input autoFocus onChange={e=>this.changeSearch(e.target.value)} value={this.state.searchTerm} type="text"/>
                    <div className='search-type'>
                        <span><input defaultChecked={this.state.searchType==='blogs'}
                            type='radio' name='searchType' value='blogs' onChange={e=>this.changeSearchType(e.target.value)}/> Blogs</span>
                        <span><input defaultChecked={this.state.searchType==='users'} type='radio' name='searchType' value='users' onChange={e=>this.changeSearchType(e.target.value)}/> Users</span>
                    </div>
                    <button type="submit">Search</button>
                </form>
                <div className="blog-list">
                    {blogResults}
                    {userResults}

                    
                    {
                        blogResults.length || userResults.length
                        ?
                        null
                        :
                        <p style={{alignSelf: 'top', justifySelf: 'center'}}>No results fit your search.</p>
                    }
                </div>
                
            </div>
        )
    }
   changeSearch(val){
       console.log(val)
        this.setState({
            searchTerm: val
        })
    }
    changeSearchType(val){
        this.setState({
            searchType: val
        })
    }
    componentWillReceiveProps(){
        this.urlSearch()
    }
    componentDidMount(){
        this.urlSearch()        
    }
    urlSearch(){
        let search = this.props.history.location.search;
        if(search){
            let searchType = getQuery(search, 'type');
            let searchTerm = getQuery(search, 'q');
            axios.get(`/api/${searchType}?q=${searchTerm}`).then(response=>{
                if(searchType==='blogs'){
                    this.setState({
                        blogResults: response.data,
                        userResults: [],
                        searchTerm: searchTerm,
                        searchType: searchType
                    })
                }else{
                    console.log(searchType);
                    this.setState({
                        blogResults: [],
                        userResults: response.data,
                        searchTerm: searchTerm,
                        searchType: searchType
                    })
                }
            })
        } else {
            this.setState({
                blogResults: [],
                userResults: []
            })
        }
    }
}

function getQuery(str, key){
    let search = new URLSearchParams(str.split('?').pop());
    return search.get(key);
}

function makeQuery(base, obj){
    let newSearch = new URLSearchParams()
    for (let prop in obj){
      newSearch.append(prop, obj[prop])
    }
    return base+newSearch.toString()
  }

export default Search;