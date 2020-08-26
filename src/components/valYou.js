import React from 'react';
import {Link } from "react-router-dom";
import Slider from './carousel/slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

class ValYou extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: ['React Native', 'Redux', 'Heroku','Express', 'Mongoose']
    }
  }
  
  render() {
    return (
      <div className="work-page">
        <div className="work-page-header">
          <Link to='/#work'>
            <FontAwesomeIcon icon={faChevronCircleLeft} />
            <p>view all work</p>
          </Link>
          <Link  to='/vibe-diner'>
            <p>view next project</p>
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
            {/* <img alt="personal" src={require("../img/valyouScreenshotWhite.png")} /> */}
            <Slider images={[
                {image: 'valyouScreenshotWhite.png', title: 'social home page'},
                {image: 'valyouCarousel1.png', title: 'social home page'},
                {image: 'valyouCarousel4.png', title: 'suggest an activity to a friend '},
                {image: 'valyouCarousel3.png', title: 'view a list of your friends '},
                {image: 'valyouCarousel2.png', title: 'profile page for one of your friends '},
                {image: 'valyouCarousel5.png', title: 'add friends '},
              ]}/>
          </div>
          <div className='work-page-content-container'>
            <p className="project-description-1">
              ValYou is a mobile application that I built with a team of six for CS98: Senior Design and Implementation, my culminating Computer Science experience at Dartmouth College.  
              This was a two term course, during which we performed iterative requirements analysis, design, implementation, and testing. 
              I individually built the front-end and back-end of the social features of the app, some of which are shown above (e.g., the ability to add friends, block users, view the values you have in common with other users, 
             suggest an activity to a friend, and view a friend's values and activities).
            </p>
            
              <p className="project-description-2">
                Our app is built upon the realization that many people seem to lose sight of what matters most to them in the routine of our busy daily lives.  We recognized that there was a widespread desire amongst 
                people to change the way they were living their lives and we wanted to provide a solution.
                To do so, we adapted the Miller Value Card Sort psychology exercise to create an app that helps users identify their core values and start living a life that is more in line with what they value. 
                Our app allows users to feel more self-reflective and fulfilled through goal-setting and activity-logging.  We have developed individual usage and data visualization, and are currently working
                on transforming the app into a social platform, so users can share their progress with their loved ones and encourage each other to live a more value-driven life.
              </p>
              <div className="link-container">
                <p>Resources:</p>
                <ul>
                  <li>
                    <p>Medium article: <a href="https://medium.com/@tanyaashah/valyou-6cc0ca16d3e5">
                    https://medium.com/@tanyaashah/valyou-6cc0ca16d3e5
                   </a></p> 
                   </li>
                   <li>
                    <p>Figma: <a href="https://www.figma.com/file/6HzjEej77yuROkJc0DvXFT/valYOU-designs?node-id=0%3A1">
                    https://www.figma.com/file/6HzjEej77yuROkJc0DvXFT/valYOU-designs?node-id=0%3A1
                   </a></p> 
                   </li>
                </ul>
              </div>
           
            
            </div>
        </div>
  
      </div>);
    }
}

export default ValYou;
