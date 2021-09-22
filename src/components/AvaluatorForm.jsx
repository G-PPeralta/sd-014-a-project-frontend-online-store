import React from 'react';

class AvaluatorForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      avaliacao: 0,
      mensagem: '',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  changeValue = (event) => {
    const { value } = event.target;
    this.setState({ avaliacao: value });
  }

  handleSubmit = () => {

  }

  render() {
    const { email, avaliacao, mensagem } = this.state;
    return (
      <section>
        <h1>Quantidade</h1>
        <button type="button">+</button>
        <button type="button">-</button>
        <button type="submit">Adicionar ao Carrinho</button>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Emaill"
            value={ email }
            onChange={ this.handleChange }
          />
          <div value={ avaliacao } onChange={ this.changeValue }>
            <input type="radio" value="1" name="star" />
            1
            <input type="radio" value="2" name="star" />
            2
            <input type="radio" value="3" name="star" />
            3
            <input type="radio" value="4" name="star" />
            4
            <input type="radio" value="5" name="star" />
            5
          </div>
          <textarea
            name="mensagem"
            placeholder="Mensagem (Opcional)"
            value={ mensagem }
            onChange={ this.handleChange }
            data-testid="product-detail-evaluation"
          />
          <button type="submit" onClick={ this.handleSubmit }>Avaliar</button>
        </form>
      </section>
    );
  }
}
export default AvaluatorForm;
