import React from 'react';
import { Link } from 'react-router-dom';

// https://react-icons.github.io/react-icons
// Instalar => npm install react-icons --save
import { FaCartArrowDown } from 'react-icons/fa';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <FaCartArrowDown id="icon" />
        </Link>
      </div>
    );
  }
}

export default Home;
