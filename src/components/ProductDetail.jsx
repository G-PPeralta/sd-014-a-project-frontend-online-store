import React from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTitle: '',
      selectedThumbnail: '',
      selectedPrice: '',
    };
    this.teste = this.teste.bind(this);
  }

  componentDidMount() {
    this.teste();
  }

  teste() {
    const { location } = this.props;
    const { title, thumbnail, price } = location.state;
    this.setState({
      selectedTitle: title,
      selectedThumbnail: thumbnail,
      selectedPrice: price,
    });
  }

  render() {
    const { selectedTitle, selectedThumbnail, selectedPrice } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">{selectedTitle}</h1>
        <img src={ selectedThumbnail } alt="" />
        <h2>{selectedPrice}</h2>
        <ul />
      </div>
    );
  }
}
ProductDetail.propTypes = PropTypes.shape({
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}).isRequired;
export default ProductDetail;
