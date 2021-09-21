import React, { Component } from 'react';
import Avaliacao from './Avaliacao';

class FormAvaliacao extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props;

    this.state = {
      id,
      email: '',
      estrela: '',
      comentario: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.saveEvaluation = this.saveEvaluation.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  saveEvaluation() {
    const { id, email, estrela, comentario } = this.state;
    if (localStorage[`${id}`]) {
      const coments = localStorage[`${id}`];
      const comentsJSON = JSON.parse(coments);
      const comentsUpDate = comentsJSON.concat({ email, estrela, comentario });
      localStorage.setItem(id, JSON.stringify(comentsUpDate));
    } else {
      localStorage.setItem(id, JSON.stringify([{ email, estrela, comentario }]));
    }
    this.setState({
      id,
      email: '',
      estrela: '',
      comentario: '',
    });
  }

  render() {
    const { id, email, comentario, estrela } = this.state;
    return (
      <div>
        <form>
          <fieldset>
            <legend>Avaliação e Comentário</legend>
            <label htmlFor="email">
              E-mail:
              <input
                type="email"
                id="email"
                name="email"
                value={ email }
                required
                placeholder="seu-email@email.com"
                onChange={ this.handleChange }
              />
            </label>

            <input
              type="range"
              max="5"
              min="1"
              name="estrela"
              value={ estrela }
              onChange={ this.handleChange }
            />
            <p>Avaliação aqui</p>

            <label htmlFor="comentario">
              <textarea
                type="textarea"
                id="comentario"
                name="comentario"
                value={ comentario }
                placeholder="Comentário Opcional"
                onChange={ this.handleChange }
                data-testid="product-detail-evaluation"
              />
            </label>
            <button type="button" onClick={ this.saveEvaluation }>
              Avaliar
            </button>
          </fieldset>
        </form>
        <Avaliacao id={ id } />
      </div>
    );
  }
}

export default FormAvaliacao;
