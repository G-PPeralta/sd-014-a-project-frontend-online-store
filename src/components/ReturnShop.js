import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReturnShop extends Component {
  render() {
    const { props: { history } } = this.props;
    return (
      <div>
        <button
          type="button"
          className="btn btn-hiden"
          onClick={ () => history.goBack() }
        >
          <i className="fas fa-arrow-circle-left" />
        </button>
      </div>
    );
  }
}

ReturnShop.propTypes = {
  props: PropTypes.objectOf(PropTypes.any).isRequired,
};
