import React from 'react';
import PropTypes from 'prop-types';

export default class EvaluationForm extends React.Component {
  render() {
    const { handleInput, handleFavorites, textValue, emailValue } = this.props;
    return (
      <form className="d-flex flex-column align-items-center">
        <label htmlFor="evaluation">
          <textarea
            data-testid="product-detail-evaluation"
            name="text"
            id="evaluation"
            placeholder="Escreva aqui sua avaliação!"
            value={ textValue }
            onChange={ handleInput }
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="superduper@email.com"
            value={ emailValue }
            onChange={ handleInput }
          />
        </label>
        <div className="estrelas d-flex flex-row flex-wrap">
          <p>Sua nota para o produto</p>
          <label htmlFor="1">
            <input
              type="radio"
              name="star"
              id="1"
              onChange={ handleFavorites }
            />
          </label>
          <label htmlFor="2">
            <input
              type="radio"
              name="star"
              id="2"
              onChange={ handleFavorites }
            />
          </label>
          <label htmlFor="2">
            <input
              type="radio"
              name="star"
              id="3"
              onChange={ handleFavorites }
            />
          </label>
          <label htmlFor="4">
            <input
              type="radio"
              name="star"
              id="4"
              onChange={ handleFavorites }
            />
          </label>
          <label htmlFor="5">
            <input
              type="radio"
              name="star"
              id="5"
              onChange={ handleFavorites }
            />
          </label>
        </div>
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
