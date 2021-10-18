import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class QueryResult extends Component {
  render() {
    const { queryResponse } = this.props;
    return (
      <div>
        { queryResponse.map((result) => (
          <Link
            to={ `/card/${result.id}/${result.category_id}` }
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

QueryResult.propTypes = {
  queryResponse: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default QueryResult;
