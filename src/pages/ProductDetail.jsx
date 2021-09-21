import React, { Component } from 'react';
import AddReview from '../components/AddReview';
import Reviews from '../components/Reviews';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    const reviews = localStorage.getItem('reviews');
    if (reviews) this.updateReviews(JSON.parse(reviews));
    // Load reviews from localStorage
  }

  updateReviews = (reviews) => this.setState({ reviews });
  // Can't use setState in componentDidMount

  addReview = (review) => {
    const { reviews } = this.state;
    const updatedReviews = [...reviews, review];
    this.setState({
      reviews: updatedReviews,
    });
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    // Save to localStorage
  };

  render() {
    const { reviews } = this.state;
    return (
      <>
        <AddReview addReview={ this.addReview } />
        {reviews.length > 0 && <Reviews reviews={ reviews } />}
      </>
    );
  }
}
