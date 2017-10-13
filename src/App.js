import React, { Component } from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';

import Header from './components/subcomponents/Header'
import Footer from './components/subcomponents/Footer'
import Home from './components/Home'
import Search from './components/Search'
import Blog from './components/Blog'
import Add from './components/Add'
import Edit from './components/Edit'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/blog/:id' component={Blog} />
          <Route path='/add' component={Add} />
          <Route path='/edit/:id' component={Edit} />
          <Route path='/search' component={Search} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
