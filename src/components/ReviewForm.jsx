import React from 'react';
import Rater from 'react-rater';
import { Form, Button } from 'react-bootstrap';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1,
    };
  }

  handleRate = ({ rating }) => {
    this.setState({ rating });
  }

  render() {
    const { rating } = this.state;
    return (
      <section>
        <h1>Avaliação</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Rater
              total={ 5 }
              rating={ rating }
              onRate={ (event) => this.handleRate(event) }
            />
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              data-testid="product-detail-evaluation"
              as="textarea"
              rows={ 3 }
            />
          </Form.Group>
          <Button variant="primary" size="lg">
            Salvar
          </Button>
        </Form>
      </section>

    );
  }
}
export default ReviewForm;
