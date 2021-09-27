import React from 'react';
import InputsCheckout from '../components/InputsCheckout';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      cep: '',
      endereco: '',
      telefone: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  cartItem = () => {
    const storage = JSON.parse(localStorage.getItem('cartItem'));
    const produtos = storage.map((produto) => (
      <div key={ produto.id }>
        <p>{ produto.title}</p>
        <img src={ produto.thumbnail } alt={ produto.id } />
        <h4>{produto.title}</h4>
        <h5>{produto.price}</h5>
      </div>
    ));
    return produtos;
  }

  render() {
    const { nome, email, cpf, cep, endereco, telefone } = this.state;
    return (
      <div>
        {this.cartItem()}
        <InputsCheckout
          nome={ nome }
          email={ email }
          cpf={ cpf }
          cep={ cep }
          endereco={ endereco }
          telefone={ telefone }
          handleChange={ this.handleChange }
        />
      </div>
    );
  }
}

export default Checkout;
