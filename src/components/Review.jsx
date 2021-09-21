import React, { Component } from 'react';
import Rating from './Rating';
import '../styles/Review.css';

class Review extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      nota: 0,
      mensagem: '',
      reviews: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setlocalStorage = this.setLocalStorage.bind(this);
  }

  // componentDidMount() {
  //   this.readLocalStorage();
  // }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { email, nota, mensagem } = this.state;
    const review = {
      email,
      nota,
      mensagem,
    };

    this.setState(({ reviews }) => ({
      email: '',
      nota: 0,
      mensagem: '',
      reviews: [...reviews, review],
    }), () => {
      this.setLocalStorage();
    });
    console.log(review);
  }

  setLocalStorage() {
    const { reviews } = this.state;
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }

  readLocalStorage() {
    const reviews = JSON.parse(localStorage.getItem('reviews'));

    this.setState({
      reviews,
    });
    // salvar no state;
    // executar no component did mount
  }

  render() {
    const { email, nota, mensagem, reviews } = this.state;

    return (
      <>
        <h2>Avaliações</h2>
        <section className="form-container">
          <form>
            <input
              id="email"
              type="text"
              name="email"
              value={ email }
              placeholder="Email"
              onChange={ this.handleChange }
            />

            <Rating />

            <textarea
              id="comentario"
              name="mensagem"
              value={ mensagem }
              placeholder="Mensagem(opcional)"
              onChange={ this.handleChange }
              data-testid="product-detail-evaluation"
            />
            <button
              type="button"
              onClick={ this.handleClick }
            >
              Avaliar
            </button>

          </form>
        </section>
        <section>
          {reviews.map(({ email, nota, mensagem }) => (
            <div key="mensagem">
              <p>{email}</p>
              <p>{nota}</p>
              <p>{mensagem}</p>
            </div>
          ))}
        </section>
      </>
    );
  }
}

export default Review;
