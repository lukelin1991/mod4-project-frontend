import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Sign from './Sign'
import Shop from './Shop'

import Navbar from './components/Navbar'


ReactDOM.render(
    <Router>
    <Navbar/>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Sign}/>
    <Route path="/shops" component={Shop}/>

  </Router>,

 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

