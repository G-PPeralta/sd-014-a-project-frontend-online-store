import React from 'react';
import PropTypes from 'prop-types';

class AvaliationForm extends React.Component {
  render() {
    const { handleClick, handleChange, email, comment, rating } = this.props;
    return (
      <form>
        <label htmlFor="email">
          E-mail
          <input
            name="email"
            type="text"
            value={ email }
            onChange={ handleChange }
          />
        </label>
        {/* <label>
          nota
          <input />
        </label> */}
        <label htmlFor="comment">
          comentario
          <textarea
            name="comment"
            value={ comment }
            onChange={ handleChange }
            data-testid="product-detail-evaluation"
          />
        </label>
        <input
          value="Avaliar"
          type="submit"
          onClick={ handleClick }
        />
      </form>
    );
  }
}

AvaliationForm.propTypes = {
  comment: PropTypes.string,
  rating: PropTypes.number,
  email: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

AvaliationForm.defaultProps = {
  comment: '',
  rating: 0,
  email: '',
};

export default AvaliationForm;
