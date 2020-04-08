import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import Navbar from "./compnents/layout/Navbar";
import Home from "./compnents/pages/Home";

import Alert from "./compnents/layout/Alert";
import About from "./compnents/pages/About";
import User from "./compnents/users/User";
import NotFound from "./compnents/pages/NotFound";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
    return (
        <GithubState>
            <AlertState>
        <Router>
        <div className="App">
          <Navbar icon="fab fa-github-square" title="Github Finder"></Navbar>
            <div className="container">
                <Alert alert={alert}></Alert>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Home}
                    />
                    <Route exact path='/about' component={About}/>
                    <Route
                        exact
                        path='/user/:login'
                        component={User}
                    />
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </div>
        </Router>
            </AlertState>
        </GithubState>
    );




}

export default App;
