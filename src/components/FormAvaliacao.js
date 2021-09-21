import React, { Component } from 'react';

class FormAvaliacao extends Component {
  constructor() {
    super();
    this.avaliar = this.avaliar.bind(this);
  }

  avaliar(event) {
    event.preventDefault();
    return console.log('avaliar');
  }

  render() {
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
                placeholder="seu-email@email.com"
              />
            </label>
            <p>Avaliação aqui</p>
            <label htmlFor="comentario">
              <textarea
                type="textarea"
                id="comentario"
                placeholder="Mensagem Opcional"
              />
            </label>
            <button type="submit" onClick={ this.avaliar }>
              Avaliar
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormAvaliacao;
