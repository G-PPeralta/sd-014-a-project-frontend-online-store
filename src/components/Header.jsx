import React from 'react';
import Context from '../Context';
import CartButton from './CartButton';

// function Header() {
//   const { cartLength } = useContext(Context);
//   return (
//     <header>
//       <CartButton />
//       <span>{cartLength}</span>
//     </header>
//   );
// }

class Header extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {({ cartLength }) => (
          <header>
            <CartButton />
            <span data-testid="shopping-cart-size">{cartLength}</span>
          </header>
        )}
      </Context.Consumer>
    );
  }
}

export default Header;
