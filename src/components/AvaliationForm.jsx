import React from 'react';
import PropTypes from 'prop-types';

class AvaliationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: '0',
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { rating } = this.state;
    const { handleClick, handleChange, email, comment } = this.props;
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
        <label htmlFor="rating">
          Rating
          <select select={ rating } onChange={ handleChange } name="rating">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
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
  email: PropTypes.string,
  rating: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

AvaliationForm.defaultProps = {
  comment: '',
  rating: '',
  email: '',
};

export default AvaliationForm;
