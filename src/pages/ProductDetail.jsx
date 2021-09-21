import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/ProductDetail.css';

const cartProducts = [];

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    // console.log(props.location.state);
    this.state = {
      product: props.location.state,
      productQty: 0,
    // https://cursos.alura.com.br/forum/topico-this-props-location-query-em-novas-versoes-48309
    };
  }

  componentDidMount() {
    const {
      product: { id },
    } = this.state;
    const storage = JSON.parse(localStorage.getItem('cart-products'));
    if (storage) {
      const product = storage.find((item) => item.id === id);
      if (product) {
        this.updateProductQty(product.productQty);
      }
    }
  }

  componentDidUpdate() {
    const { productQty } = this.state;
    this.savetoLocalStorage(productQty);
  }

  updateProductQty = (productQty) => this.setState({ productQty });
  // Can't use setState in componentDidMount

  savetoLocalStorage = (newQty) => {
    const storageKey = 'cart-products';

    const {
      product: { id, title, thumbnail, price },
    } = this.state;
    const { productQty } = this.state;

    const savedProduct = { id, title, thumbnail, price, productQty: newQty };

    const storage = JSON.parse(localStorage.getItem(storageKey));

    if (productQty === 1) {
      if (storage) {
        const newStorage = [...storage, savedProduct];
        localStorage.setItem(storageKey, JSON.stringify(newStorage));
      } else {
        cartProducts.push(savedProduct);
        localStorage.setItem(storageKey, JSON.stringify(cartProducts));
      }
    } else {
      storage.forEach((item) => {
        if (item.id === id) item.productQty = newQty;
      });
      localStorage.setItem(storageKey, JSON.stringify(storage));
    }
  };

  addToCartBtn = () => {
    const { productQty } = this.state;
    return (
      <div>
        <button
          className="add-cart-btn"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addToCartfunc }
          type="button"
        >
          Adicionar ao Carrinho
        </button>
        <p>{`Qtd: ${productQty}`}</p>
      </div>
    );
  };

   addToCartfunc = () => {
     this.setState((prev) => ({ productQty: prev.productQty + 1 }));
   };

   render() {
     const {
       product: { title, thumbnail, price },
     } = this.state;

     return (
       <>
         <Link data-testid="shopping-cart-button" to="/shopping-cart">
           <img
             alt="shopping-cart"
             src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
           />
         </Link>
         <div
           className="product-detail"
           data-testid="product-detail-name"
         >
           <h3>{title}</h3>
           <img alt={ title } className="product-thumbnail" src={ thumbnail } />
           <p>{`R$${price.toFixed(2)}`}</p>
           {this.addToCartBtn()}
         </div>
       </>
     );
   }
}

ProductDetail.propTypes = {
  location: PropTypes.object,
}.isRequired;
