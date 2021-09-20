import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.callApi();
  }

 callApi = async () => {
   const categoriesList = await getCategories();
   this.setState({
     categories: categoriesList,
   });
 };

 render() {
   const { categories } = this.state;
   return (
     <main>
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
         {categories.map((category) => (
           <li data-testid="category" key={ category.id }>
             {category.name}
           </li>))}
       </section>
     </main>
   );
 }
}

export default Home;
