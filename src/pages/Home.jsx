import React from 'react';
import CategoriesList from '../Components/CategoriesList';
import CartButton from '../Components/CartButton';
import Product from '../Components/Product';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
      category: '',
      products: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async handleClick() {
    const { query, category } = this.state;
    const request = await getProductsFromCategoryAndQuery(category, query);
    this.setState({ products: request.results });
  }

  handleChangeCategory(event) {
    this.setState(
      { category: event.target.id },
      async () => {
        const { category, query } = this.state;
        const request = await getProductsFromCategoryAndQuery(category, query);
        this.setState({ products: request.results });
      },
    );
  }

  render() {
    const { query, products } = this.state;

    return (
      <header data-testid="home-initial-message">
        <CategoriesList onClick={ this.handleChangeCategory } />

        <form>

          <input
            data-testid="query-input"
            type="text"
            name="query"
            value={ query }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Buscar
          </button>
        </form>

        {
          products.length > 0 && products.map(
            (product) => (
              <Product
                key={ product.id }
                product={ product }
                shipping={ product.shipping }
              />
            ),
          )
        }

        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <CartButton />
      </header>
    );
  }
}

export default Home;
