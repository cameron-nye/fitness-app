import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
import Services from './components/Services/Services'
import Profile from './components/Profile/Profile'

export default (
  <Switch>
    <Route path='/' component={Home} exact />
    <Route path='/blog' component={Blog} />
    <Route path='/services' component={Services} />
    <Route path='/profile' component={Profile} />
  </Switch>
)