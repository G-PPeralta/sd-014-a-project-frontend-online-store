import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FormAvaliate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      comment: '',
      rating: 5,
    };
  }

  handleGeneric = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { addAssessments } = this.props;
    addAssessments(this.state);
  }

  render() {
    const { email, comment, rating } = this.state;
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            required
            onChange={ this.handleGeneric }
            placeholder="digite seu email"
            type="email"
            name="email"
            id="email"
            value={ email }
          />
        </label>
        <label htmlFor="comment">
          Comentario:
          <textarea
            placeholder="Acrescente um comentario (opcional)"
            onChange={ this.handleGeneric }
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            value={ comment }
            data-testid="product-detail-evaluation"
          />
        </label>
        <label htmlFor="rating">
          Nota:
          <input
            onChange={ this.handleGeneric }
            type="number"
            name="rating"
            id="rating"
            min="1"
            max="5"
            value={ rating }
          />
        </label>
        <button onClick={ this.handleClick } type="button">Avaliar</button>
      </form>
    );
  }
}

FormAvaliate.propTypes = {
  addAssessments: PropTypes.func.isRequired,
};

export default FormAvaliate;
