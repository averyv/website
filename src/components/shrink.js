import React from 'react';
import {Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

class Shrink extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: ['Webflow', 'HTML', 'MongoDB Atlas', 'Mongoose','EJS','Express']
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
          <Link  to='/valyou'>
            <p>view next project</p>
            <FontAwesomeIcon icon={faChevronCircleRight} />  
          </Link>
        </div>
        <div className="work-page-content">
          <div className="work-page-content-header">
            <h1 className="project-title">
              Shrink
            </h1>
            <div className="tag-container">
              {this.state.tags.map((tag)=> {
                  return <p>{tag}</p>
              })}
            </div>
            {/* <img alt="personal" src={require("../img/vibeDinerHome.png")} /> */}
          </div>
          <div className='work-page-content-container'>
            <p className="project-description-1">
              Shrink (still working on name) is a web platform that allows people to search for the ideal therapist or mental health professionals.
              It targets individuals in areas that face high levels of stigma surrounding mental health.
              We already have multiple therapists in our database and are very close to having a clean initial product.
            </p>
            
              <p className="project-description-2">
                I currently work as Software Engineer on a team of three.
              </p>
              
           
            <div>
              </div>
            </div>
        </div>
      </div>);
    }
}

export default Shrink;
