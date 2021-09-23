import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      rating: 0,
      review: '',
    };
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  handleSubmit = (event) => {
    event.preventDefault();
    const { addReview } = this.props;
    const { email, rating, review } = this.state;
    addReview({ email, rating, review });
    this.setState({ email: '', rating: 0, review: '' });
  };

  renderRatings = () => (
    <>
      <input
        name="rating"
        onChange={ this.handleChange }
        value="1"
        type="radio"
      />
      <input
        name="rating"
        onChange={ this.handleChange }
        value="2"
        type="radio"
      />
      <input
        name="rating"
        onChange={ this.handleChange }
        value="3"
        type="radio"
      />
      <input
        name="rating"
        onChange={ this.handleChange }
        value="4"
        type="radio"
      />
      <input
        name="rating"
        onChange={ this.handleChange }
        value="5"
        type="radio"
      />
    </>
  );

  render() {
    const { email, review } = this.state;
    return (
      <>
        <h3>Avaliar produto</h3>
        <form>
          <div>
            <input
              name="email"
              onChange={ this.handleChange }
              placeholder="Email"
              type="email"
              value={ email }
            />
            {this.renderRatings()}
          </div>
          <textarea
            cols="40"
            data-testid="product-detail-evaluation"
            name="review"
            onChange={ this.handleChange }
            placeholder="Mensagem (opcional)"
            rows="4"
            value={ review }
          />
          <button onClick={ this.handleSubmit } type="submit">
            Enviar
          </button>
        </form>
      </>
    );
  }
}

AddReview.propTypes = {
  addReview: PropTypes.func.isRequired,
};
