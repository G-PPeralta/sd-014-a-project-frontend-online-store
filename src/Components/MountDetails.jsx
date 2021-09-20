import React from 'react';
import PropTypes from 'prop-types';

class MountDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };
  }

  render() {
    const { product } = this.props;
    this.setState({ product });
    console.log(this.state.product);
    return (
      <div>
        Grupo 13
      </div>
    );
  }
}

MountDetails.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default MountDetails;
