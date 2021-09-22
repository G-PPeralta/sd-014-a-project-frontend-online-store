import React from 'react';
import EvaluationStar from './EvaluationStar';

class Evaluator extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      avaliacao: '0',
      mensagem: '',
    };
  }

  onChangeValue = (event) => {
    const { value } = event.target;
    this.setState({
      avaliacao: value,
    });
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = () => {
    const { email, avaliacao, mensagem } = this.state;
    localStorage.setItem('email', email);
    localStorage.setItem('avaliacao', avaliacao);
    localStorage.setItem('mensagem', mensagem);
  }

  render() {
    const { email, avaliacao, mensagem } = this.state;
    return (
      <section>
        <h1>Quantidade</h1>
        <button type="button">-</button>
        <p>0</p>
        <button type="button">+</button>
        <button type="submit">Adicionar ao Carrinho</button>
        <h1>Avaliações</h1>
        <form onSubmit={ this.handleSubmit }>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
            required
          />
          <EvaluationStar onChangeValue={ this.onChangeValue } avaliacao={ avaliacao } />
          <textarea
            name="mensagem"
            placeholder="Mensagem(opcional)"
            value={ mensagem }
            onChange={ this.handleChange }
            data-testid="product-detail-evaluation"
          />
          <button type="submit">Avaliar</button>
        </form>
        <fieldset>
          <p>{localStorage.getItem('email')}</p>
          <p>
            Avaliação:
            {localStorage.getItem('avaliacao')}
          </p>
          <p>{localStorage.getItem('mensagem')}</p>
          <hr />
        </fieldset>
      </section>
    );
  }
}

export default Evaluator;
