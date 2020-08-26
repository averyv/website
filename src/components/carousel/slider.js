import React, { Component } from 'react';
import Slide from './slide';
import LeftArrow from './leftArrow';
import RightArrow from './rightArrow';

/*
This Carousel is inspired by a Medium article written by Cait Payne at https://medium.com/@caittpayne/create-a-carousel-in-react-js-fc5d75e3b46b
The corresponding code is posted at https://github.com/caittpayne/LYD-Music-App
*/

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      
      length: 0
    };
  }

  componentDidMount() {
      console.log(this.props.images);
    this.setState({length: this.props.images.length});
  }

  goToPrevSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;

    if(index < 1) {
      index = length - 1;
    }
    else {
      index--;
    }

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide() {
      let index = this.state.activeIndex;
      let length = this.state.length;

      if(index === length - 1) {
        index = 0
      }
      else {
        index++;
      }

      this.setState({
        activeIndex: index
      });
  }

  render() {
    return (
      <div className='slider'>
        <div className='slider-items'>
          <LeftArrow
            goToPrevSlide={() => this.goToPrevSlide()}
          />
        <div className='slider-text'>
          <Slide
            activeIndex={this.state.activeIndex}
            images={this.props.images}
            goToNextSlide={() => this.goToNextSlide()}
          />
        </div>
          <RightArrow
            goToNextSlide={() => this.goToNextSlide()}
          />
        </div>
      </div>
    );
  }
}