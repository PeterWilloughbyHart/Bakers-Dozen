
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './App';
import Signin from './components/Signin/Signin';
import Feed from './components/Feed/Feed';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Contact from './components/Contact/Contact';

export default (
    <Switch>
        <Route path="/" exact component={Signin}></Route>
        <Route path="/Feed" component={Feed}></Route>
        <Route path="/Profile" component={Profile}></Route>
        <Route path="/Settings" component={Settings}></Route>
        <Route path="/Contact" component={Contact}></Route>
    </Switch>
)