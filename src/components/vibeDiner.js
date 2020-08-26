import React from 'react';
import {Link } from "react-router-dom";
import Slider from './carousel/slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

class VibeDiner extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: ['React', 'CSS', 'Redux']
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
          <Link  to='/blog'>
            <p>view next project</p>
            <FontAwesomeIcon icon={faChevronCircleRight} />  
          </Link>
        </div>
        <div className="work-page-content">
          <div className="work-page-content-header">
            <h1 className="project-title">
              Vibe Diner
            </h1>
            <div className="tag-container">
              {this.state.tags.map((tag)=> {
                  return <p>{tag}</p>
              })}
            </div>
            <Slider images={[
                {image: 'vibeDinerHome.png', title: 'social home page'},
                {image: 'vibeDinerCarousel1.png', title: 'suggest an activity to a friend '},
                {image: 'vibeDinerCarousel2.png', title: 'view a list of your friends '},
                {image: 'vibeDinerCarousel3.png', title: 'profile page for one of your friends '},
                ]}/>
            {/* <img alt="personal" src={require("../img/vibeDinerHome.png")} /> */}
          </div>
          <div className='work-page-content-container'>
            <p className="project-description-1">
              VibeDiner was created as a team based final project for CS52: Full-Stack Web Development at Dartmouth College.  
              In three weeks, my four teammates and I built the front-end UI (using Ant Design) and server-side API for this site, then presented the final product to professors, teaching assistants, and other interested students at the termly Technigala.
            </p>
          
              <p className="project-description-2">
                The app is a platform that facilitates musical collaboration.  We recognized that many individuals have specific musical talents,
                but not many have every skill needed to produce a song.  On VibeDiner, users can build profiles and post their current projects to attract other artists who
                have the skills that the original poster is lacking. 
                Users can scroll through these projects and filter them by relevant tags and, if interested, they can chat with each other about the project.
                I individually built the messaging component of the site using a websocket based server for realtime updates, and also contributed to many other features.
              </p>

              <div className="link-container">
                <p>Resources:</p>
                <ul>
                  <li>
                    <p>URL to hosted page: <a href="http://vibediner.surge.sh/">
                  http://vibediner.surge.sh/
                   </a></p> 
                   </li>
                </ul>
              </div>
       
            
            </div>
        </div>
      </div>);
    }
}

export default VibeDiner;
