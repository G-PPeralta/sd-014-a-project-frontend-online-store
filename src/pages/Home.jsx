import React from 'react';
import CategoriesList from '../Components/CategoriesList';
import CartButton from '../Components/CartButton';
import Product from '../Components/Product';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { getQuantity } from '../services/cart';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
      category: '',
      products: [],
      quant: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  componentDidMount() {
    this.updateQuantity();
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

  updateQuantity = () => {
    this.setState({ quant: getQuantity() });
  }

  render() {
    const { query, products, quant } = this.state;

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

        <main>
          {
            products.length > 0 && products.map(
              (product) => (
                <Product
                  key={ product.id }
                  product={ product }
                  shipping={ product.shipping }
                  updateQuantity={ this.updateQuantity }
                />
              ),
            )
          }
        </main>

        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <CartButton quant={ quant } />
      </header>
    );
  }
}

export default Home;
