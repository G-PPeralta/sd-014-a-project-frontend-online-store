import React from 'react';
import EvaluationStar from './EvaluationStar';

class Evaluator extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
    };
  }

  render() {
    const { quantity } = this.state;
    return (
      <section>
        <h1>Quantidade</h1>
        <button type="button">-</button>
        <p>{quantity}</p>
        <button type="button" onClick={ this.handleClickSum }>+</button>
        <button type="submit">Adicionar ao Carrinho</button>
        <h1>Avaliações</h1>
        <fieldset>
          <input type="text" placeholder="Email" />
          <EvaluationStar />
          <textarea placeholder="Mensagem(opcional)" />
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
