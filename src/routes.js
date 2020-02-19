
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './App';
import Signin from './components/Signin/Signin';
import Feed from './components/Feed/Feed';

export default (
    <Switch>
        <Route path="/" exact component={Signin}></Route>
        <Route path="/Feed" component={Feed}></Route>
    </Switch>
)