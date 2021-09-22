import React from 'react';
import PropTypes from 'prop-types';

class RenderAvaliation extends React.Component {
  render() {
    const { storedEmail, storedComment, rating } = this.props;
    return (
      <div>
        <h3>
          { storedEmail }
        </h3>
        <h4>
          {rating}
        </h4>
        <p>
          { storedComment }
        </p>
      </div>
    );
  }
}

RenderAvaliation.propTypes = {
  storedComment: PropTypes.string.isRequired,
  storedEmail: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default RenderAvaliation;
