import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="shopping-header">
        {/* // edit por Anna Hamann brincando com CSS */}
        <div className="content-header">
          <span className="trybezon-header">
            <img className="trybezon-header-logo" src="https://soldi.dev.br/trybezon/trybezon.png" alt="logo" />
          </span>
          <span className="text-header">
            This is the Amazing FrontEnd Online Store
          </span>
          <span>
            <img className="cart-header-logo" src="https://soldi.dev.br/trybezon/cart-w.png" alt="" />
            <span className="cart-name">
              Carrinho
            </span>
          </span>
        </div>
      </header>
    );
  }
}

export default Header;
