import React from 'react';
import ShoppingCartLink from '../components/ShoppingCartLink';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../components/Categories';
import Product from '../components/Product';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      search: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    getCategories().then((response) => {
      this.setState({ categories: response });
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick() {
    const { products, search } = this.state;
    getProductsFromCategoryAndQuery(search, search).then((response) => {
      this.setState({ 
        products: response.results,
        search: '' 
      })
      console.log(response.results)
    })
    
    
    return (
      <div>
        { products
          .map((product) => <Product key={ product.id } product={ product } />) }
      </div>
    )
  }

  render() {
    const { categories, search } = this.state;
    return (
      <div>
        <ShoppingCartLink />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input type="text" data-testid="query-input" name='search' value={ search } onChange={ this.handleChange }/>
        <button type="button" data-testid="query-button" onClick={ this.handleClick }>Pesquisar</button>
        <hr />
        <div>
          { categories
            .map((categorie) => <Categories key={ categorie.id } categorie={ categorie.name } />)}
        </div>
      </div>
    );
  }
}

export default Main;
