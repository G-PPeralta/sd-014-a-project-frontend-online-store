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
        <fieldset>
          <input
            name="email"
            type="text"
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
          />
          <button type="submit">Avaliar</button>
        </fieldset>
        <fieldset>
          <p>email</p>
          <EvaluationStar />
          <hr />
          <p>email</p>
          <EvaluationStar />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam commodi quas enim, temporibus aliquid nulla eveniet animi modi incidunt ea fuga ut sequi corrupti soluta nobis hic explicabo eius accusantium.
          </p>
          <hr />
          <p>email</p>
          <EvaluationStar />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias ducimus, est accusamus eum atque commodi nulla voluptatibus voluptatum, enim laboriosam. Tenetur corrupti vero, magnam aperiam unde ab atque autem.
          </p>
        </fieldset>
      </section>
    );
  }
}

export default Evaluator;
