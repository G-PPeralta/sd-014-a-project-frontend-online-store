import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import '../styles/Home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ categories });
      console.log(categories);
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="home-page">
        <section className="category-list">
          <h4>Categorias:</h4>
          {categories.map(({ id, name }) => (
            <label data-testid="category" htmlFor={ id } key={ id }>
              <input
                className="category-item-radio"
                id={ id }
                name="category"
                type="radio"
                value={ id }
              />
              {name}
            </label>
          ))}
        </section>
        <section className="search-section">
          <div>
            <input className="search-input" name="search-input" type="text" />
            <Link data-testid="shopping-cart-button" to="/shopping-cart">
              <img
                alt="shopping-cart"
                src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
              />
            </Link>
          </div>
          <p
            className="home-initial-message"
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </section>
      </div>
    );
  }
}
