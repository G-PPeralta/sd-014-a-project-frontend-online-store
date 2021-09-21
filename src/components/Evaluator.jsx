import React from 'react';

class Evaluator extends React.Component {
  render() {
    return (
      <section>
        <h1>Quantidade</h1>
        <button type="button">-</button>
        <p>1</p>
        <button type="button">+</button>
        <button type="submit">Adicionar ao Carrinho</button>
        <h1>Avaliações</h1>
        <fieldset>
          <input type="text" />
          <textarea />
          <button type="submit">Avaliar</button>
        </fieldset>
      </section>
    );
  }
}

export default Evaluator;
