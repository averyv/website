import React from 'react';
import {Link } from "react-router-dom";
import Slider from './carousel/slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

class ValYou extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: ['React Native', 'Redux']
    }
  }

  goBack() {
    window.history.back();
  }

  goToNext() {
    
  }
  
  render() {
    return (
      <div className="work-page">
        <div className="work-page-header">
          <Link to='/#work'>
            <FontAwesomeIcon icon={faChevronCircleLeft} />
            <p>back to work</p>
          </Link>
          <Link  to='/vibe-diner'>
            <p>to vibe diner</p>
            <FontAwesomeIcon icon={faChevronCircleRight} />  
          </Link>
        </div>
        <div className="work-page-content">
          <div className="work-page-content-header">
            <h1 className="project-title">
              ValYou
            </h1>
            <div className="tag-container">
              {this.state.tags.map((tag)=> {
                  return <p>{tag}</p>
              })}
            </div>
            <img alt="personal" src={require("../img/valyouScreenshotWhite.png")} />
          </div>
          <div className='work-page-content-container'>
            <p className="project-description-1">
              ValYou is a mobile application that I built with a team of six for CS98: Senior Design and Implementation, my culminating Computer Science experience at Dartmouth College.  
              This was a two term course, during which we perform iterative requirements analysis, design, implementation, and testing. 
            </p>
            <div className="gif-container">
              <p className="project-description-2">
                Our app is built upon the realization that many people seem to lose sight of what matters most to them in the routine of our busy daily lives.  We recognized that there was a widespread desire amongst 
                people to change the way they were living their lives and we wanted to provide a solution.
                To do so, we adapted the Miller Value Card Sort psychology exercise to create an app that helps users identify their core values and start living a life that is more in line with what they value. 
                Our app allows users to feel more self-reflective and fulfilled through goal-setting and activity-logging.  We have developed individual usage and data visualization, and are currently working
                on transforming the app into a social platform, so users can share their progress with their loved ones and encourage each other to live a more value-driven life.
              </p>
              <div className="icon-container">
                <div> <a href="https://medium.com/@tanyaashah/valyou-6cc0ca16d3e5"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="medium" class="svg-inline--fa fa-medium fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"></path></svg></a></div>
                <div> <a href="https://www.figma.com/file/6HzjEej77yuROkJc0DvXFT/valYOU-designs?node-id=0%3A1"> <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="figma" class="svg-inline--fa fa-figma fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M277 170.7A85.35 85.35 0 0 0 277 0H106.3a85.3 85.3 0 0 0 0 170.6 85.35 85.35 0 0 0 0 170.7 85.35 85.35 0 1 0 85.3 85.4v-256zm0 0a85.3 85.3 0 1 0 85.3 85.3 85.31 85.31 0 0 0-85.3-85.3z"></path></svg></a></div>
              </div>
            </div>
            <div>
              <Slider images={[
                {image: 'valYouSocial1.PNG', title: 'social home page'},
                {image: 'valYouSocial4.PNG', title: 'suggest an activity to a friend '},
                {image: 'valYouSocial3.PNG', title: 'view a list of your friends '},
                {image: 'valYouSocial2.PNG', title: 'profile page for one of your friends '},
                {image: 'valYouSocial5.PNG', title: 'add friends '},
                ]}/>
              </div>
            </div>
        </div>
      </div>);
    }
}

export default ValYou;
