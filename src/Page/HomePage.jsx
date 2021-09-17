import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import MenuCategory from '../components/MenuCategory';
import { getCategories } from '../services/api';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [],
    };
  }

  componentDidMount() {
    this.AtualizaState();
  }

  AtualizaState = async () => {
    const produtos = await getCategories();
    this.setState({ produtos });
  }

  render() {
    const { produtos } = this.state;

    return (
      <div data-testid="home-initial-message">
        <input type="text" />
        <h3>Digite algum termo de pesquisa ou escolha uma categoria.</h3>
        <div>
          <CartButton />
        </div>
        {produtos && <MenuCategory produtos={ produtos } />}
      </div>
    );
  }
}
