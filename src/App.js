import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import {Blog} from './pages/Blog';
import {Photography} from './pages/Photography';
import {PhotoDetails} from './pages/PhotoDetails';

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div>
          <Switch>
          <Route path="/photo/:name">
              <PhotoDetails />
            </Route>
            <Route path="/photography">
              <Photography />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
