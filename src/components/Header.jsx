import React from 'react';
import Context from '../Context';
import CartButton from './CartButton';

class Header extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {({ cartLength }) => (
          <header>
            <CartButton>{cartLength}</CartButton>
          </header>
        )}
      </Context.Consumer>
    );
  }
}

export default Header;
