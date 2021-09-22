import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import OtherEvaluations from './OtherEvaluations';

class Evaluations extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      comment: '',
      rating: 0,
      ratings: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = () => {
    const { email, comment, rating, ratings } = this.state;
    const presentRating = {
      email,
      comment,
      rating,
    };
    ratings.push(presentRating);
    this.setState({ ratings });
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  emailAndRating = () => {
    const { email, rating } = this.state;
    return (
      <div className="email-and-rate">
        <input
          placeholder="Email:"
          name="email"
          value={ email }
          type="email"
          id="evaluation-email"
          onChange={ this.handleChange }
        />
        <StarRating rating={ rating } onClick={ this.handleChange } />
      </div>
    );
  }

  render() {
    const { ratings } = this.state;
    return (
      <div>
        <h1>Avaliações</h1>
        <section className="evaluation-session">
          <form>
            { this.emailAndRating() }
            <textarea
              onChange={ this.handleChange }
              name="comment"
              rows="5"
              cols="35"
              data-testid="product-detail-evaluation"
              placeholder="Deixe uma mensagem (opcional)"
            />
            <button type="button" onClick={ this.handleClick }>Avaliar</button>
          </form>
        </section>
        <OtherEvaluations ratings={ ratings } />
      </div>
    );
  }
}

Evaluations.propTypes = {
  categories: PropTypes.array,
}.isRequired;

export default Evaluations;
