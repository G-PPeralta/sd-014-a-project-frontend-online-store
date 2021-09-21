import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((result) => {
      this.setState({
        categories: result,
      });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <div>
          <label htmlFor="searchProduct">
            <input
              type="text"
              id="searchProduct"
            />
          </label>
        </div>

        <div>
          <Link
            data-testid="shopping-cart-button"
            to="/shopping-cart"
          >
            Carrinho de Compras
          </Link>
        </div>

        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          {categories.map((category) => (
            <section key={ category.id }>
              <Link
                data-testid="category"
                to={ `/${category.id}` }
              >
                {category.name}
              </Link>
            </section>
          ))}
        </div>

      </div>

    );
  }
}

export default Search;
