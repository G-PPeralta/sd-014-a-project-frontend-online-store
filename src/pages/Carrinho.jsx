import React from 'react';

class Carrinho extends React.Component {
  render() {
    return (
      <section>
        <input type="text" />
        <section>
          <h1
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </h1>
        </section>
      </section>
    );
  }
}

export default Carrinho;
