import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class CategoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      responseState: [],
    };

    this.renderCategories = this.renderCategories.bind(this);
  }

  componentDidMount() {
    this.renderCategories();
  }

  async renderCategories() {
    const { match } = this.props;
    const { id } = match.params;
    const response = await getProductsFromCategoryAndQuery(id, null);
    this.setState({
      responseState: response.results,
    });
  }

  render() {
    const { match } = this.props;
    const { id } = match.params;
    const { responseState } = this.state;
    return (
      <div>
        { responseState.map((result) => (
          <Link
            to={ `/card/${result.id}/${id}` }
            key={ result.id }
            data-testid="product-detail-link"
          >
            <div data-testid="product">
              <img src={ result.thumbnail } alt={ result.title } />
              <h4>
                { result.title }
              </h4>
              <h4>
                { result.price }
              </h4>
            </div>
          </Link>
        )) }
      </div>
    );
  }
}

CategoryPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CategoryPage;
