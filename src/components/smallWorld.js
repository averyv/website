import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

class SmallWorld extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: ['React Native', 'Firebase']
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
          <Link  to='/shrink'>
            <p>view next project</p>
            <FontAwesomeIcon icon={faChevronCircleRight} />  
          </Link>
        </div>
        <div className="work-page-content">
          <div className="work-page-content-header">
            <h1 className="project-title">
              Small World
            </h1>
            <div className="tag-container">
              {this.state.tags.map((tag)=> {
                  return <p>{tag}</p>
              })}
            </div>
            {/* <img alt="personal" src={require("../img/vibeDiner/vibeDinerHome.png")} /> */}
          </div>
          <div className='work-page-content-container'>
            <p className="project-description-1">
            "Connecting People, Connecting Places." 
            </p>
           
              <p className="project-description-2">
                Small World is a phone app that allows for students from different countries to connect and learn from each other.
                Its mission is to address the lack of ongoing cultural exchange between students. 
                It was started by two other Dartmouth College students, and received funding from the Magnuson Center through the Entrepreneurship Founder's Prize.
                I currently work ~3-5 hours a week as a Lead Software Engineer.  
              </p>
              
              <div className="link-container">
                <p>Resources:</p>
                <ul>
                  <li>
                    <p>LinkedIn: <a href="https://www.linkedin.com/company/try-small-world/">
                    https://www.linkedin.com/company/try-small-world/
                   </a></p> 
                   </li>
                </ul>
              </div>
            <div>
              {/* <Slider images={[
                {image: 'vibe-diner-home.png', title: 'social home page'},
                {image: 'vibe-diner-feed.png', title: 'suggest an activity to a friend '},
                {image: 'vibe-diner-profile.png', title: 'view a list of your friends '},
                {image: 'vibe-diner-messages.png', title: 'profile page for one of your friends '},
                ]}/> */}
              </div>
            </div>
        </div>
      </div>);
    }
}

export default SmallWorld;
