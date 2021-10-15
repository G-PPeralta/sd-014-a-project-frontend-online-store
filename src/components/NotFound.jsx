import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h2>Ops..</h2>
        <p>Não encontramos sua busca. Volte para a Home:</p>
        <Link to="/">
          Home
        </Link>
      </div>
    );
  }
}

export default NotFound;
