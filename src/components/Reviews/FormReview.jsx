import React from 'react';

class FormReview extends React.Component {
  handleOnChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // Ver como funciona o LocalStorage
  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Avaliação</h2>
        <section>
          <form>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Digite seu email"
                onChange={ this.handleOnChange }
              />
            </div>
            <textarea
              name="review"
              placeholder="Faça seu comentário (opcional)"
              cols="50"
              rows="5"
              data-testid="product-detail-evaluation"
              onChange={ this.handleOnChange }
            />
            <label htmlFor="evaluation">
              Nota:
              <input
                type="number"
                name="evaluation"
                id="evaluation"
                min="0"
                max="5"
                onChange={ this.handleOnChange }
              />
            </label>
            <button
              onClick={ this.handleSubmit }
              type="submit"
            >
              Avaliar
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default FormReview;
