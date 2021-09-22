import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class YellowStar extends Component {
  render() {
    const { id, onClick } = this.props;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16" id={ id } onClick={ onClick }>
        <path
          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173
        6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927
        0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83
        4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          id={ id }
          onClick={ onClick }
        />
      </svg>
    );
  }
}

YellowStar.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
