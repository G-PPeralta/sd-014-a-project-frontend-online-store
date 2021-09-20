import React from 'react';
import GoToHomeButton from '../components/GoToHomeButton';
import Header from '../components/Header';
import PaymentProductsList from '../components/PaymentProductsList';
import { getProducts } from '../services/shopCartManag';
import PaymentForm from '../components/PaymentForm';

class Payment extends React.Component {
  constructor() {
    super();
    document.title = 'Pagamento';
    this.state = {
      products: [],

    };
  }

  componentDidMount() {
    this.handleProducts();
  }

  handleProducts = async () => {
    const products = await getProducts();
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <Header>
          <h1 className="text-white">Pagamento</h1>
          <GoToHomeButton />
        </Header>
        <main
          className="d-flex my-3 m-auto flex-column"
          style={ { width: '85%' } }
        >
          <PaymentProductsList products={ products } />
          <PaymentForm />
        </main>
      </div>
    );
  }
}

export default Payment;
