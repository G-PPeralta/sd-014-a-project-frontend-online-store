import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { category } = this.props;
    const { id, name } = category;
    return (
      <>
        <input
          data-test-id={ name }
          value={ id }
          type="radio"
          name="categoriaDeProduto"
          onChange={ this.handleChange }
        />
        <span data-testid="category">{ name }</span>
      </>
    );
  }
}

Categories.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Categories;
