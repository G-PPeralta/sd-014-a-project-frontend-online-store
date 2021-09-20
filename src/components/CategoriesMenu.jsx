import React from 'react';
import { getCategories } from '../services/api';

class CategoriesMenu extends React.Component {
  constructor() {
    super();
    this.state = { categoriesData: [] };
  }
  getCategoriesCall = async () => {
    const categories = await getCategories();
    this.setState({ categoriesData : categories })
    // this.state.categoriesData.map((category) => console.log(category.name))
  }

  componentDidMount() {
    this.getCategoriesCall();
  }

  render() {

    return(
      <div>
        {

        }        
      </div>
    );
  }
}

export default CategoriesMenu;
