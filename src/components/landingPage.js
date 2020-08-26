import React from 'react';
import {Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: ['HTML', 'CSS']
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
          <Link  to='/small-world'>
            <p>view next project</p>
            <FontAwesomeIcon icon={faChevronCircleRight} />  
          </Link>
        </div>
        <div className="work-page-content">
          <div className="work-page-content-header">
            <h1 className="project-title">
             Landing Page
            </h1>
            <div className="tag-container">
              {this.state.tags.map((tag)=> {
                  return <p>{tag}</p>
              })}
            </div>
            <img alt="personal" src={require("../img/landingPageHome.png")} />
          </div>
          <div className='work-page-content-container'>
            <p className="project-description-1">
              A landing page for a pretend company, "StarBuch", which mimics different parts of the style and structure of the Starbucks and Blue Bottle Coffee landing pages.
              It is non-functional, but has a responsive navigation menu, expanding images, text input bars, and a footer with links that are responsive.
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
                    <p>URL to hosted page: <a href="https://dartmouth-cs52-19s.github.io/lab1-landingpage-averyv/">
                    https://dartmouth-cs52-19s.github.io/lab1-landingpage-averyv/
                   </a></p> 
                   </li>
                </ul>
              </div>
             
            
            </div>
        </div>
      </div>);
    }
}

export default LandingPage;