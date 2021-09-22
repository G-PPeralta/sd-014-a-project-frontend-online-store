import React, { Component } from 'react';
import { readProducts } from '../services/localStorage';
import CheckProducts from '../components/CheckProducts';
import BuyerInfos from '../components/BuyerInfos';

class FinalizePurchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: readProducts(),
      buyer: {
        fullName: '',
        cpf: '',
        email: '',
        phone: '',
        cep: '',
        adress: '',
      },
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState((prevState) => ({
      buyer: { ...prevState.buyer, [name]: value },
    }));
  }

  render() {
    const { state: { products, buyer } } = this;
    return (
      <>
        <CheckProducts products={ products } />
        <p>Informações do Comprador</p>
        <BuyerInfos buyer={ buyer } onHandleChange={ this.handleChange } />
      </>
    );
  }
}

export default FinalizePurchase;
