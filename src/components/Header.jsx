import React from 'react';
import CartButton from './CartButton';

class Header extends React.Component {
  render() {
    return (
      <header>
        <CartButton />
      </header>
    );
  }
}

export default Header;
