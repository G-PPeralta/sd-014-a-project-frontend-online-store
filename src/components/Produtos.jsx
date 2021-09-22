import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//

class Produtos extends React.Component {
  render() {
    const { responseAPI } = this.props;
    return (
      <aside>
        { responseAPI.map((item) => (
          <Link
            to={ `/product/${item.id}` }
            data-testid="product-detail-link"
            key={ item.id }
          >
            <section data-testid="product">
              <h3>{ item.title }</h3>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>{ `R$ ${item.price}` }</p>
            </section>
          </Link>
        ))}
      </aside>
    );
  }
}

Produtos.propTypes = {
  responseAPI: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Produtos;
