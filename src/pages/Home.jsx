import React from 'react';
import { Link } from 'react-router-dom';
import Categorias from '../components/Categorias';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      responseApi: [],
      apiFetched: false,
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((r) => this.fetchApi(r));
  }

  fetchApi(response) {
    this.setState(
      { responseApi: response },
      () => {
        this.setState({ apiFetched: true });
      },
    );
  }

  render() {
    const { responseApi, apiFetched } = this.state;
    return (
      <section>
        <aside>
          { apiFetched && <Categorias responseApi={ responseApi } /> }
        </aside>
        <section>
          <input type="text" />
          <Link to="/carrinho" data-testid="shopping-cart-button">
            <button type="button">Carrinho</button>
          </Link>
        </section>
        <section>
          <h1
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
        </section>
      </section>
    );
  }
}

export default Home;
