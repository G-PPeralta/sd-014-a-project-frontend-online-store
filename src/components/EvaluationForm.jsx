import React, { Component } from 'react';
import Rate from './Rate';

class EvaluationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      comment: '',
      rating: 0,
      hover: null,
    };
  }

  handleRating = (value) => {
    this.setState({ rating: value });
  };

  handleHover = (value) => {
    this.setState({ hover: value });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick = (list) => {
    const { email, rating, comment } = this.state;
    const actualState = `${email}:${rating}${comment},`;
    // const actualState2 = {
    //   email,
    //   rating,
    //   comment,
    // };
    const evaluationList = list.concat(actualState);
    localStorage.setItem('evaluationList', evaluationList);
    this.createArray(list);
  }

  createArray = (string) => {
    const array = string.split(',');
    console.log(array);
  }

  render() {
    const { email, comment, rating, hover } = this.state;
    const savedEvaluations = '';
    // if (localStorage.evaluationList) {
    //   savedEvaluations = JSON.parse(localStorage.getItem('evaluationList'));
    // }
    return (
      <section>
        <form className="form-eval">
          <p>Avaliações</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
          />
          <Rate
            onRating={ this.handleRating }
            onHover={ this.handleHover }
            rating={ rating }
            hover={ hover }
          />
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Mensagem (opcional)"
            value={ comment }
            onChange={ this.handleChange }
            name="comment"
            rows="6"
          />
          <br />
          <button
            type="button"
            onClick={ () => this.handleClick(savedEvaluations) }
          >
            Avaliar
          </button>
        </form>
        <section>
          { this.createArray}
          {/* {savedEvaluations.map((evaluation) => {
            const { user, comments } = evaluation;
            return (
              <div key={ user }>
                <p>{user}</p>
                <p>{comments}</p>
              </div>
            );
          })} */}
        </section>
      </section>
    );
  }
}

export default EvaluationForm;
