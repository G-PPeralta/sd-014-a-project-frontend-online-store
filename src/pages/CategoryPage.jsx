import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class CategoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      responseState: [],
    };

    this.renderCategories = this.renderCategories.bind(this);
    this.cartHistory = this.cartHistory.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    this.renderCategories();
  }

  cartHistory() {
    const { history } = this.props;
    history.push('/shopCart');
  }

  addItem(parmCategory) {
    const storageValue = JSON.parse(localStorage.getItem('cartList'));
    const find = storageValue.find((product) => product.id === parmCategory.id);
    if (find === undefined) {
      const saveList = [...storageValue, { ...parmCategory, quantity: 1 }];
      localStorage.setItem('cartList', JSON.stringify(saveList));
    } else {
      const map = storageValue.map((exam) => {
        if (exam.id === parmCategory.id) {
          const newProduct = { ...find, quantity: find.quantity + 1 };
          return newProduct;
        }
        return exam;
      });
      localStorage.setItem('cartList', JSON.stringify([...map]));
    }
  }

  async renderCategories() {
    const { match } = this.props;
    const { id } = match.params;
    const response = await getProductsFromCategoryAndQuery(id, null);
    this.setState({
      responseState: response.results,
    });
  }

  render() {
    const { match } = this.props;
    const { id } = match.params;
    const { responseState } = this.state;
    return (
      <div>
        <button
          type="button"
          data-testid="shopping-cart-button"
          onClick={ this.cartHistory }
        >
          Ir para o carrinho.
        </button>
        { responseState.map((result) => (
          <div key={ result.id }>
            <Link
              to={ `/card/${result.id}/${id}` }
              data-testid="product-detail-link"
            >
              <div data-testid="product">
                <img src={ result.thumbnail } alt={ result.title } />
                <h4>
                  { result.title }
                </h4>
                <h4>
                  { result.price }
                </h4>
                {
                  result.shipping.free_shipping
                    ? <h5 data-testid="free-shipping">Frete Grátis</h5>
                    : false
                }
              </div>
            </Link>
            <button
              data-testid="product-add-to-cart"
              type="button"
              onClick={ () => this.addItem(result) }
            >
              Adicionar
            </button>
          </div>
        )) }
      </div>
    );
  }
}

CategoryPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default CategoryPage;
