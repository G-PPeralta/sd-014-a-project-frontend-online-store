import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Home extends Component {
  render() {
    return (
      <main className="shopping-main">
        <Header />
        <section className="main-sec">
          <p className="initial-message" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <ProductList />
        </section>
        <Footer />
      </main>
    );
  }
}
