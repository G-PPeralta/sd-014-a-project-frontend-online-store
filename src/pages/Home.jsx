import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.callApi();
  }

  handleClick() { // chamada de api do requisito 5
    const { value } = document.querySelector('input');
    const id = getCategories()
      .then((json) => json.id);
    getProductsFromCategoryAndQuery(id, value)
      .then((json) => this.setState({ products: json.results }));
  }

 callApi = async () => {
   const categoriesList = await getCategories();
   this.setState({
     categories: categoriesList,
   });
 };

 render() {
   const { categories, products } = this.state;
   return (
     <main>
       <label htmlFor="query-input">
         <input
           data-testid="query-input"
           type="search"
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
       >
         Ir carrinho de compras
       </Link>

       <section>
         {categories.map((category) => ( // função do requisito 4
           <li data-testid="category" key={ category.id }>
             {category.name}
           </li>))}
       </section>
       <div>
         {products && products.map((product) => ( // função do requisito 5
           <div key={ product.id } data-testid="product">
             <img src={ product.thumbnail } alt="foto-produto" />
             <h2>{product.title}</h2>
             <p>{product.price}</p>
           </div>))}
       </div>
     </main>
   );
 }
}

export default Home;
