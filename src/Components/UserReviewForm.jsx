import React from 'react';

class UserReviewForm extends React.Component {
  render() {
    return (

      <div>
        <h2>Avaliação</h2>
        <form>
          <input
            type="text"
            name="email"
            id="email"
          />
          <textarea
            data-testid="product-detail-evaluation"
            name="comment"
            cols="30"
            rows="10"
            placeholder=" Digite sua review :"
          />
        </form>
      </div>

    );
  }
}

export default UserReviewForm;
