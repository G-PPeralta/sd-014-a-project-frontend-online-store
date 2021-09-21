import React, { Component } from 'react';
import Star from './Star';
import '../styles/Review.css';

class Rating extends Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
      hoverState: 0,
    };

    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouseLeave() {
    this.setState({
      hoverState: 0,
    });
    console.log('leave');
  }

  handleMouseEnter(e) {
    this.setState({
      hoverState: e,
    });
    console.log(e);
  }

  handleClick(event) {
    console.log(event);
  }

  render() {
    const stars = [1, 2, 3, 4, 5];

    return (
      <div className="rating-container">
        {
          stars.map((e) => (
            <Star
              key={ e }
              onMouseEnter={ () => this.handleMouseEnter(e) }
              onMouseLeave={ this.handleMouseLeave }
              onClick={ this.handleClick }
            />))
        }
      </div>
    );
  }
}

export default Rating;
