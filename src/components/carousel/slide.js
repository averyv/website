import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
// import landingData from '../Landing';
// import Library from '../../library/Library';
// import './main.css';

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <section id="slider">
      {
        this.props.images.map((s, index) =>
        <div className={
            index === this.props.activeIndex ? 'active' : 'slide'}
            key={index}>
                <img
                className={index === 0 ? 'mainSlide image' : 'slider-item image'}
                src={require(`../../img/${s.image}`)}
                alt="First slide"
                />
              <p className={index === 0 ? 'mainSlide carousel-heading' : 'slider-item carousel-heading'}>{s.title}</p>
              {/* <p>{s.description}</p>
              <Link to='../../library/Library'><button className='button'>{s.buttons}</button></Link> */}
              
          </div>
     
        ) }
        <div className="slider-button-section">
        {Array.from(Array(this.props.images.length)).map((x,index) => <FontAwesomeIcon id={index === this.props.activeIndex ? 'activeButton' : 'slideButton'} icon={faCircle} />)}
        </div>
        </section>
    )
  }
}

export default Slide;