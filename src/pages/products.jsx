import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProdutosPage from '../components/produtosPage';
import { saver } from '../services/StorageServices';

class Products extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { CategoriaId } } } = this.props;
    this.state = {
      produtos: [],
      CategoriaId,
    };
  }

  componentDidMount() {
    this.getProdutos();
  }

  addCartHandle = (produto) => {
    saver(produto);
  }

    getProdutos = async () => {
      const { CategoriaId } = this.state;
      const getProducts = await getProductsFromCategoryAndQuery(CategoriaId, '');
      this.setState({ produtos: getProducts.results });
    }

    render() {
      const { match: { params: { productId } } } = this.props;
      const { produtos } = this.state;
      return (
        <>
          { produtos.map((produto) => produto.id === productId
            && <ProdutosPage
              key={ produto.id }
              produto={ produto }
              addCartHandle={ this.addCartHandle }
              saveAddCart={ this.saveAddCart }
              data-testid="shopping-cart-product-name"
            />)}
        </>
      );
    }
}

Products.propTypes = {
  CategoriaId: PropTypes.string,
  productId: PropTypes.string,
}.isRequired;

export default Products;
