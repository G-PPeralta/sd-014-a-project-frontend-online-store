import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categorie } = this.props;
    return (
      <div data-testid="category">
        <p>
          {categorie}
        </p>
      </div>
    );
  }
}

Categories.propTypes = {
  categorie: PropTypes.string.isRequired,
};

export default Categories;
