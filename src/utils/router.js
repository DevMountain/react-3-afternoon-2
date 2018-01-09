import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import Search from '../components/Search/Search';
import Blog from '../components/Blog/Blog';
import Add from '../components/Add/Add';
import Edit from '../components/Edit/Edit';
import User from '../components/User/User';
import NewUser from '../components/NewUser/NewUser';

export default (
  <Switch>
    <Route path='/user/:id/edit' component={ NewUser } />
    <Route path='/user/:id' component={ User } />
    <Route path='/user' component={ NewUser } />
    <Route path='/blog/:id' component={ Blog } />
    <Route path='/add' component={ Add } />
    <Route path='/edit/:id' component={ Edit } />
    <Route path='/search' component={ Search } />
    <Route exact path='/' component={ Home } />
  </Switch>
)