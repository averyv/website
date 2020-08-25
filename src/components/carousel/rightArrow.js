import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

class RightArrow extends Component {
  render() {
    return(
      <div className='backArrow' onClick={this.props.goToNextSlide}>
        <FontAwesomeIcon icon={faChevronCircleRight} />
      </div>
    )
  }
}

export default RightArrow;