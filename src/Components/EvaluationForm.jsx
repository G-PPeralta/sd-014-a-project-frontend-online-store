import React from 'react';
import PropTypes from 'prop-types';

export default class EvaluationForm extends React.Component {
  render() {
    const { handleInput, handleFavorites, textValue, emailValue } = this.props;
    return (
      <form>
        <textarea
          data-testid="product-detail-evaluation"
          name="text"
          id="evaluation"
          placeholder="Avaliação"
          value={ textValue }
          onChange={ handleInput }
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="eu@email.com"
          value={ emailValue }
          onChange={ handleInput }
        />
        <input
          type="radio"
          name="star"
          id="1"
          onChange={ handleFavorites }
        />
        <input
          type="radio"
          name="star"
          id="2"
          onChange={ handleFavorites }
        />
        <input
          type="radio"
          name="star"
          id="3"
          onChange={ handleFavorites }
        />
        <input
          type="radio"
          name="star"
          id="4"
          onChange={ handleFavorites }
        />
        <input
          type="radio"
          name="star"
          id="5"
          onChange={ handleFavorites }
        />
      </form>
    );
  }
}

EvaluationForm.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleFavorites: PropTypes.func.isRequired,
  textValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
};
