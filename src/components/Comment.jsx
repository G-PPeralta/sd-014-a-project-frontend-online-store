import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
  render() {
    const { assessment } = this.props;
    return (
      <section>
        <h2>
          email:
          { assessment.email }
        </h2>
        <p>
          nota:
          { assessment.rating }
        </p>
        <p>
          Comentario:
          { assessment.comment }
        </p>
      </section>
    );
  }
}

Comment.propTypes = {
  assessment: PropTypes.shape({
    email: PropTypes.string,
    rating: PropTypes.string,
    comment: PropTypes.string,
  }).isRequired,
};

export default Comment;
