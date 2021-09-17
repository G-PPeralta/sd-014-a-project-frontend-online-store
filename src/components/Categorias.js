import React from 'react';
import { getCategories } from '../services/api';

class Categorias extends React.Component {
  constructor() {
    super();

    this.getCategories = this.getCategories.bind(this);
  }
  async getCategories() {
    const getCategories = await getCategories()
    console.log(getCategories);
  };

  componentDidMount() {
    getCategories();
  }

  render() {
      return(
        <div>
          xxx
        </div>    
    );
  }
}

export default Categorias;
