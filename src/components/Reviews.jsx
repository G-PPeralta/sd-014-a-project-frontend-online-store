import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Reviews extends Component {
  render() {
    const { reviews } = this.props;
    return (
      <div>
        <h2>Avaliações</h2>
        {reviews.map(({ email, rating, review }) => (
          <div key={ email }>
            <p>{email}</p>
            <p>{rating}</p>
            <p>{review}</p>
          </div>
        ))}
      </div>
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
