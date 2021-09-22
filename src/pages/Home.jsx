import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      inputValue: '',
      selectedProducts: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.setCartItems = this.setCartItems.bind(this);
  }

  componentDidMount() {
    this.callApi();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick(category) { // chamada de api do requisito 5
    const { inputValue } = this.state;
    getProductsFromCategoryAndQuery(category, inputValue)
      .then((json) => this.setState({ products: json.results }));
  }

  setCartItems() {
    const { selectedProducts } = this.state;
    localStorage.setItem('products', JSON.stringify(selectedProducts));
  }

  callApi = async () => {
    const categoriesList = await getCategories();
    this.setState({
      categories: categoriesList,
    });
  };

  addToCart(product) {
    const { selectedProducts } = this.state;
    const cartList = [];
    if (cartList.includes((product))) {
      const item = cartList.indexOf(product);
      cartList[item].quantity += 1;
    } else {
      product.quantity = 1;
      cartList.push(product);
    }
    this.setState({
      selectedProducts: [...selectedProducts, ...cartList],
    });
  }

  render() {
    const { categories, products } = this.state;
    return (
      <main>
        <label htmlFor="query-input">
          <input
            data-testid="query-input"
            type="search"
            name="inputValue"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Buscar
        </button>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>

        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
          onClick={ () => this.setCartItems() }
        >
          Ir carrinho de compras
        </Link>

        <section>
          {categories.map((category) => ( // função do requisito 4
            <button
              type="button"
              key={ category.id }
              data-testid="category"
              onClick={ () => this.handleClick(category.id) }
            >
              { category.name }
            </button>
          ))}

        </section>
        <div>
          {products && products.map((product) => ( // função do requisito 5
            <div key={ product.id } data-testid="product">
              <img src={ product.thumbnail } alt="foto-produto" />
              <h2>{product.title}</h2>
              <p>{product.price}</p>
              <Link
                to={ { pathname: `/product/${product.id}`, state: { product } } }
                data-testid="product-detail-link"
              >
                Link
              </Link>
              <button
                data-testid="product-add-to-cart"
                type="button"
                onClick={ () => this.addToCart(product) }
              >
                Adicionar ao carrinho
              </button>
            </div>))}
        </div>
      </main>
    );
  }
}

export default Home;
