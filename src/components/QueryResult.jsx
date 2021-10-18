import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QueryResult extends Component {
  render() {
    const { queryResponse } = this.props;
    console.log(queryResponse);
    return (
      <div>
        { queryResponse.map((result) => (
          <div
            key={ result.id }
            data-testid="product"
          >
            <img src={ result.thumbnail } alt={ result.title } />
            <h4>
              { result.title }
            </h4>
            <h5>
              { result.price }
            </h5>
          </div>
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
