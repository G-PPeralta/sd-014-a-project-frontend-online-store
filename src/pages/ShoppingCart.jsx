import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartProduct from '../components/CartProduct';
import '../styles/ShoppingCart.css';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loading: false,
    };

    this.fillProductsTEMP = this.fillProductsTEMP.bind(this);
    this.showProducts = this.showProducts.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.changeProductQuantity = this.changeProductQuantity.bind(this);
  }

  componentDidMount() {
    this.fillProductsTEMP();
  }

  // Pegando um grupo de itens genéricos para testes, tem que mudar pra pegar do localStorage
  async fillProductsTEMP() {
    this.setState({
      loading: true,
    });
    const products = await getProductsFromCategoryAndQuery('MLB1000', 'Fone');
    this.setState({
      loading: false,
      products: products.results,
    });
    console.log(products.results);
  }

  removeProduct(id) {
    const { products } = this.state;
    // Filtrando o array, ficam todos menos o que tem o ID
    const filtered = products.filter((prod) => prod.id !== id);
    this.setState({
      products: filtered,
    });
  }

  changeProductQuantity(product, sign) {
    // sign === + ? +1 : -1 (tratar que n pode ser negativo)
    console.log(product, sign);
  }

  calculatePrice() {
    const { products } = this.state;
    let totalPrice = 0;
    products.forEach((p) => { totalPrice += p.price; });
    return totalPrice;
  }

  showProducts() {
    const { products } = this.state;
    return (
      <section>
        { products.map((product) => (
          <CartProduct
            key={ product.id }
            product={ product }
            removeProduct={ this.removeProduct }
            changeProductQuantity={ this.changeProductQuantity }
            quantity={ 1 }
          />
        ))}
        <h2>{ `Valor Total da Compra: R$ ${this.calculatePrice}` }</h2>
        <button type="button">Finalizar Compra</button>
      </section>
    );
  }

  showEmptyCart() {
    return (
      <section>
        <img
          alt="empty-box"
          src="https://img.icons8.com/ios/100/000000/empty-box.png"
        />
        <h2 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h2>
      </section>
    );
  }

  render() {
    const { loading, products } = this.state;
    if (loading) {
      return <h2>LOADING..</h2>;
    }
    return (
      <div>
        <Link className="return-button" to="/">
          <img
            alt="return-button"
            src="https://img.icons8.com/ios/50/000000/left2.png"
          />
        </Link>
        <div className="shopping-cart-field">
          <img
            alt="shopping-cart"
            src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
          />
          <h2>Carrinho de Compras</h2>
        </div>
        <main className="cart-product-list">
          { products.length > 0 ? this.showProducts() : this.showEmptyCart() }
        </main>
      </div>
    );
  }
}
