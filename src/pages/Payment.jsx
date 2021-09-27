import React, { Component } from 'react';
import InputGen from '../components/InputGen';
import ProductCartCard from '../components/ProductCartCard';
import { getCartProductsAndQuantity, productsSave } from '../services/local';

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      cartItens: [],
      itensQuantity: {},
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRmv = this.handleRmv.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getItens = this.getItens.bind(this);
    this.productCard = this.productCard.bind(this);
  }

  componentDidMount() {
    this.getItens();
  }

  handleAdd({ target }) {
    const { cartItens, itensQuantity } = this.state;
    const { name } = target;
    const quantity = itensQuantity;
    if (itensQuantity[name] > 1) {
      quantity[name] += 1;
      this.setState({ itensQuantity: quantity });
      productsSave(cartItens, quantity);
    }
  }

  handleRmv({ target }) {
    const { cartItens, itensQuantity } = this.state;
    const { name } = target;
    const quantity = itensQuantity;
    if (itensQuantity[name] > 1) {
      quantity[name] -= 1;
      this.setState({ itensQuantity: quantity });
      productsSave(cartItens, quantity);
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    return window.customAlert('Você efetuou a compra!!');
  }

  getItens() {
    const cartInformation = getCartProductsAndQuantity();
    this.setState({ cartItens: cartInformation[0], itensQuantity: cartInformation[1] });
  }

  productCard() {
    const { cartItens, itensQuantity } = this.state;
    return (
      <div>
        {cartItens.map((product) => (<ProductCartCard
          key={ product.id }
          product={ product }
          quantity={ itensQuantity[product.id] }
          handleAdd={ this.handleAdd }
          handleRmv={ this.handleRmv }
        />))}
      </div>
    );
  }

  renderPrice() {
    const { itensQuantity, cartItens } = this.state;
    const novoObjt = cartItens.reduce((acc, item) => {
      acc += item.price * itensQuantity[item.id];
      return acc;
    }, 0);
    const result = Math.round(novoObjt * 100) / 100;
    return result;
  }

  render() {
    const { address, email, fullname, cep, cpf, phone, cartItens } = this.state;
    return (
      <>
        <div>
          {cartItens && this.productCard()}
        </div>
        <div>
          {this.renderPrice()}
        </div>
        <form action="">
          <InputGen
            config={ ['text', 'fullname', 'checkout-fullname', fullname, false,
              this.handleChange, 'Nome completo', 'className', 'Jhon Doe'] }
          />
          <InputGen
            config={ ['text', 'email', 'checkout-email', email, false,
              this.handleChange, 'Email', 'className', 'exemplo@exemplo.com'] }
          />
          <InputGen
            config={ ['text', 'cpf', 'checkout-cpf', cpf, false,
              this.handleChange, 'CPF', 'className', '000.000.000-33'] }
          />
          <InputGen
            config={ ['text', 'phone', 'checkout-phone', phone, false,
              this.handleChange, 'Telefone', 'className', '(99) 99999-9999'] }
          />
          <InputGen
            config={ ['text', 'cep', 'checkout-cep', cep, false,
              this.handleChange, 'CEP', 'className', '12345-123'] }
          />
          <InputGen
            config={ ['text', 'address', 'checkout-address', address, false,
              this.handleChange, 'Endereço', 'className', 'Av. Exemplo n°123'] }
          />
          <button type="button" name="button" onClick={ this.handleClick }>
            Comprar
          </button>
        </form>
      </>
    );
  }
}

export default Payment;
