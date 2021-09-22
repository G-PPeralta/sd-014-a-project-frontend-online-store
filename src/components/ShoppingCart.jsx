import React from 'react';


class ShoppingCart extends React.Component {
  render() {
    const { cartProduct } = this.props;
    if(cartProduct.length === 0){
      return(
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    )}
    return (
      <div>
        {cartProduct.map((product) => {
        return(
          <div key={product.id}>
            <p data-testid="shopping-cart-product-name">{product.title}</p>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{product.price}</p>
            <p data-testid="shopping-cart-product-quantity">1</p> 
          </div>
        )})}
      </div>
    );
  }
}

export default ShoppingCart;
