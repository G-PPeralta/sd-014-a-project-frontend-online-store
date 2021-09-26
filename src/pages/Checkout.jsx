import React from 'react';
// import CartItem from '../components/CartItem';
// import { getCartItens } from '../services/AddToCart';

class Checkout extends React.Component {
  render() {
    // const { itens } = this.props;
    return (
      <div>
        <form>
          Dados pessoais:
          <label htmlFor="name">
            Nome Completo:
            <input type="text" name="name" data-testid="checkout-fullname" />
          </label>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" data-testid="checkout-email" />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input type="text" name="cpf" data-testid="checkout-cpf" />
          </label>
          <label htmlFor="telefone">
            Telefone:
            <input type="text" name="telefone" data-testid="checkout-phone" />
          </label>
          <label htmlFor="address">
            Endereço:
            <input type="text" name="address" data-testid="checkout-address" />
          </label>
          <label htmlFor="cep">
            CEP:
            <input type="text" name="cep" data-testid="checkout-cep" />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}

export default Checkout;
