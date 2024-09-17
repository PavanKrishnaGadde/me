import React, { Component } from 'react';
import '../App.css';
import {Sidebar} from '../components/sidebar'
import {Introduction} from '../components/introduction'
import {About} from '../components/about'
import {Timeline} from '../components/timeline'
import {ContactMe} from '../components/contactme';
import { experienceData, educationData } from '../utils/constants';

class Main extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar />
          <div id="colorlib-main">
            <Introduction />
            <About />
            <Timeline start={3} sectionId="experience" mainHeading="Experience" subHeading="Here are the companies I have worked for" timelineData={experienceData} />
            <Timeline start={1} sectionId="education" mainHeading="Education" subHeading="Here are the institutes I have received education from" timelineData={educationData} />
            <ContactMe />
          </div>
      	</div>
      </div>
    );
  }
}

export default Main;
