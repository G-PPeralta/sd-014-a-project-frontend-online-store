import React from 'react';
import propTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import List from '../components/List';
import QueryResult from '../components/QueryResult';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      queryResponse: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.queryApi = this.queryApi.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  inputGenerator(data, type, name, value) {
    return (
      <input
        data-testid={ data }
        type={ type }
        name={ name }
        value={ value }
        onChange={ this.handleChange }
      />
    );
  }

  cartHistory() {
    const { history } = this.props;
    history.push('/shopCart');
  }

  async queryApi() {
    const { search } = this.state;
    const categoryRequest = await getProductsFromCategoryAndQuery(null, search);
    this.setState({
      queryResponse: categoryRequest.results,
    });
  }

  render() {
    const { search, queryResponse } = this.state;
    return (
      <main>
        <section className="main">
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
            {/* { this.requestApi() } */}
          </p>
          <label htmlFor="search">
            { this.inputGenerator('query-input', 'text', 'search', search) }
          </label>
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.queryApi }
          >
            Buscar
          </button>
          <button
            type="button"
            data-testid="shopping-cart-button"
            onClick={ this.cartHistory }
          >
            Ir para o carrinho.
          </button>
        </section>
        <aside className="hello">
          <ul>
            <List />
          </ul>
        </aside>
        <section>
          <QueryResult
            queryResponse={ queryResponse }
          />
        </section>
      </main>
    );
  }
}

Home.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default Home;
