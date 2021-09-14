import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Main from './pages/Main';
import Blog from './components/blog';
import Photography from './pages/Photography';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <ul className="row">
            <li className="col-sm-4">
              <Link to="/me">Home</Link>
            </li>
            <li className="col-sm-4">
              <Link to="/blog">blog</Link>
            </li>
            <li className="col-sm-4">
              <Link to="/photography">Photography</Link>
            </li>
          </ul> */}

          <Switch>
            <Route path="/photography">
              <Photography />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/me">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
