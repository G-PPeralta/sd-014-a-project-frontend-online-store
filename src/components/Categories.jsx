import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { handleCategorie, categorie } = this.props;
    return (
      <div>
        <button onClick={ handleCategorie } type="button">
          <li data-testid="category">{categorie}</li>
        </button>
      </div>
    );
  }
}

Categories.propTypes = {
  categorie: PropTypes.string.isRequired,
  handleCategorie: PropTypes.func.isRequired,
};

export default Categories;
