import React from 'react';
import { BsSearch } from 'react-icons/bs';
import CartButton from '../components/CartButton';
import Categories from '../components/Categories';
import Message from '../components/Message';
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
      showMessage: true,
      offCart: true,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleClick = async () => {
    const { category, search } = this.state;
    const request = await getProductsFromCategoryAndQuery(category, search);
    this.setState({ products: request.results, showMessage: false });
  }

  handleSelect = async ({ target: { value: category } }) => {
    const { search } = this.state;
    const request = await getProductsFromCategoryAndQuery(category, search);
    this.setState({ products: request.results, showMessage: false });
  }

  render() {
    const { search, products, showMessage, offCart } = this.state;
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
              onClick={ this.handleClick }
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
            onClick={ (event) => {
              this.handleChange(event);
              this.handleSelect(event);
            } }
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
            {showMessage && <Message
              dataTestId="home-initial-message"
              message="Digite algum termo de pesquisa ou escolha uma categoria."
            />}
            {!showMessage && <ProductList products={ products } offCart={ offCart } />}
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
