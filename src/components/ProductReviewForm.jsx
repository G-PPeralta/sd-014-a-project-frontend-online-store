import React from 'react';

class ProductReviewForm extends React.Component {
  render() {
    return (
      <div>
        <textarea
          data-testid="product-detail-evaluation"
          defaultValue="Esta é uma avaliação sobre o produto realizada
          na tela de detalhe."
        />
      </div>
    );
  }
}

export default ProductReviewForm;
