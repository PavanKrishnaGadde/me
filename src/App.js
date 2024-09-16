import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import {Blog} from './pages/Blog';
import {Photography} from './pages/Photography';
import {PhotoDetails} from './pages/PhotoDetails';

export const App = () => (
  <Router basename="/">
    <div>
      <Routes>
        <Route element={<PhotoDetails />}  path="/photo/:name" />
        <Route element={<Photography />} path="/photography" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<Main />} path="/" />
      </Routes>
    </div>
  </Router>
);

export default App;
