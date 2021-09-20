import React from "react";

class Product extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div>
          <h1>
            { product.title }
          </h1>
          <img src={product.thumbnail} alt="" />
          <p>
            { product.price }
          </p>
      </div>
    );
  }
}

export default Product;