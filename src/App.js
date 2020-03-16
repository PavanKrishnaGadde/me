import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Photography from './components/photography'
import Blog from './components/blog'
import ContactMe from './components/contactme';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Timeline></Timeline>
          <Photography></Photography>
          <Blog></Blog>
          <ContactMe></ContactMe>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
