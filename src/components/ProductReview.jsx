import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ProductReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: '',
      reviewRadio: 1,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick = (event) => {
    // Referência: https://felixgerschau.com/react-localstorage/
    event.preventDefault();
    localStorage.setItem('review', JSON.stringify(this.state));
    this.setState({
      review: '',
      reviewRadio: 1,
    });
  }

  loadReview = () => {
    const review = JSON.parse(localStorage.getItem('review'));
    this.setState(review);
  }

  render() {
    const { review } = this.state;
    return (
      <form>
        <label htmlFor="review-radio">
          {/* <input
              type="number"
              id="review-radio"
              min="1"
              max="5"
              value={ reviewRadio }
              onChange={ this.handleChange }
            /> */}
        </label>
        <textarea
          data-testid="product-detail-evaluation"
          name="review"
          id=""
          cols="30"
          rows="10"
          value={ review }
          onChange={ this.handleChange }
        />
        <button type="submit" onClick={ this.handleClick }>Enviar</button>
      </form>
    );
  }
}

export default ProductReview;
