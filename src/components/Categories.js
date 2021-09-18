import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { category, handleCategory } = this.props;
    const { id, name } = category;
    return (
      <>
        <input
          data-test-id={ name }
          value={ id }
          type="radio"
          name="categoriaDeProduto"
          onChange={ handleCategory }
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
  handleCategory: PropTypes.func.isRequired,
};

export default Categories;
