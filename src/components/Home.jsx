import React from 'react';
import propTypes from 'prop-types';
import * as api from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  requestApi() {
    api.getCategories().then((categories) => { console.log(categories); });
    this.cartHistory = this.cartHistory.bind(this);
  }

  inputGenerator(type, name, value) {
    return (
      <input
        // data-testid={ data }
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

  render() {
    const { search } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          { this.requestApi() }
        </p>
        <label htmlFor="search">
          { this.inputGenerator('text', 'search', search) }
        </label>
        <button
          type="button"
          data-testid="shopping-cart-button"
          onClick={ this.cartHistory }
        >
          Ir para o carrinho.
        </button>
      </div>
    );
  }
}

Home.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default Home;
