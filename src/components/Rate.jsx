// Baseado no tutorial: https://www.youtube.com/watch?v=eDw46GYAIDQ
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

class Rate extends Component {
  render() {
    const stars = 5;
    const { rating, hover, onRating, onHover } = this.props;
    return (
      <div>
        {[...Array(stars)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label key={ index }>
              <input
                type="radio"
                id="rate"
                className="star-rate"
                value={ rating }
                onClick={ () => onRating(ratingValue) }
              />
              <FaStar
                size={ 100 }
                id="rate"
                className="star"
                color={ ratingValue <= (hover || rating) ? '#ffc107' : 'e4e5e9' }
                onMouseEnter={ () => onRating(ratingValue) }
                onMouseLeave={ () => onHover(null) }
              />
            </label>
          );
        })}
      </div>
    );
  }
}

Rate.propTypes = {
  onRating: PropTypes.func,
  onHover: PropTypes.func,
}.isRequired;

export default Rate;
