import React from 'react';
import {Link } from "react-router-dom";
import Slider from './carousel/slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: ['React', 'Redux', 'Express', 'CSS']
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
          <Link  to='/landing-page'>
            <p>view next project</p>
            <FontAwesomeIcon icon={faChevronCircleRight} />  
          </Link>
        </div>
        <div className="work-page-content">
          <div className="work-page-content-header">
            <h1 className="project-title">
              Blog
            </h1>
            <div className="tag-container">
              {this.state.tags.map((tag)=> {
                  return <p>{tag}</p>
              })}
            </div>
            <Slider images={[
                {image: 'blogHome.png', title: 'social home page'},
                {image: 'blogCarousel1.png', title: 'suggest an activity to a friend '},
                ]}/>
            {/* <img alt="personal" src={require("../img/blogHome.png")} /> */}
          </div>
          <div className='work-page-content-container'>
            <p className="project-description-1">
              A React+Redux blog platform built for CS52: Full-Stack Web Development, which makes CRUD api calls to an express and mongoDB server.  
                Users can view thumbnails for all the blog posts and click on each post to see a more detailed view of the post appears that shows the content.
                Users can create accounts with a username, email, and password; only authorized users can edit and delete posts.
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
                    <p>URL to hosted page: <a href="http://averyv-cs52-lab4.surge.sh/">
                    http://averyv-cs52-lab4.surge.sh/
                   </a></p> 
                   </li>
                </ul>
              </div>
              
          
            </div>
        </div>
      </div>);
    }
}

export default Blog;
