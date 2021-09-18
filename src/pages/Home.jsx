import React from 'react';
import { BsSearch } from 'react-icons/bs';
import CartButton from '../components/CartButton';
import Categories from '../components/Categories';
import HomeMessage from '../components/HomeMessage';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    document.title = 'Home';
    this.state = {
      search: '',
      category: '',
      products: [],
      shouldShow: true,
    };
    this.getProducts = this.getProducts.bind(this);
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
    if (value.length > 0) this.setState({ shouldShow: false });
    else this.setState({ shouldShow: true });
  }

  handleSelect = (event) => {
    this.handleChange(event);
    this.getProducts();
  }

  getProducts() {
    const { search, category } = this.state;
    this.setState(async () => {
      const products = await getProductsFromCategoryAndQuery(category, search);
      this.setState({ products: products.results });
    });
  }

  render() {
    const { search, products, shouldShow } = this.state;
    return (
      <div
        style={ { backgroundColor: '#f9f9f9' } }
        className="d-flex flex-column w-100"
      >
        <Header
          className="d-flex
          w-100
          justify-content-around
          align-items-center
          shadow-sm
          "
          style={ { backgroundColor: '#326c53' } }
        >
          <div className="d-flex">
            <input
              data-testid="query-input"
              type="text"
              className="form-control"
              style={ { width: '800px' } }
              placeholder="Busca"
              name="search"
              value={ search }
              onChange={ this.handleChange }
            />
            <button
              type="button"
              className="btn btn-primary ms-2"
              onClick={ this.getProducts }
              data-testid="query-button"
            >
              <BsSearch />
            </button>
          </div>
          <CartButton />
        </Header>
        <main
          className="d-flex my-3 m-auto"
          style={ { width: '85%' } }
        >
          <Categories
            onChange={ this.handleSelect }
            className="d-flex
            flex-column
            border
            p-4
            m-2
            rounded
            h-75
            "
          />
          <section
            className="d-flex
          flex-column
          w-75
          align-items-center"
          >
            {shouldShow && <HomeMessage />}
            <ProductList products={ products } />
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
