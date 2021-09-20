// criado pela Andrea, e depois revisado com a Anna e Willian
import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rate = ({ count, rating, color, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index) => {
    if (hoverRating >= index) return color.filled;
    if (!hoverRating && rating >= index) return color.filled;
    return color.filled;
  };

  const starRating = useMemo(() => Array(count)
    .fill(0)
    .map((_, i) => i + 1)
    .map((index) => (
      <FontAwesomeIcon
        key={ index }
        className="cursor-pointer"
        icon="star"
        onClick={ () => onRating(index) }
        style={ { color: getColor(index) } }
        onMouseEnter={ () => setHoverRating(index) }
        onMouseLeave={ () => setHoverRating(0) }
      />
    )), [count, rating, onRating]);

  return (
    <div>{ starRating }</div>
  );
};

Rate.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  color: {
    filled: PropTypes.string,
    unfilled: PropTypes.string,
  },
  onRating: PropTypes.func.isRequired,
};

Rate.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: '#f5eb3b',
    unfilled: '#DCDCDC',
  },
};

export default Rate;