import React from 'react';
import Rater from 'react-rater';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { addMessage } from '../services/shopCartManag';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: {
        email: '',
        rating: 1,
        message: '',
      },
    };
  }

  handleRate = ({ rating }) => {
    const { rate } = this.state;
    this.setState({ rate: { ...rate, rating } });
  }

  handleChange = ({ target: { value, name } }) => {
    const { rate } = this.state;
    this.setState({ rate: { ...rate, [name]: value } });
  }

  handleClick = (event) => {
    event.preventDefault();
    const { product } = this.props;
    const { rate } = this.state;
    addMessage(product, rate);
  };

  render() {
    const { rate: { rating, message, email } } = this.state;
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
            <Form.Control
              required
              type="email"
              placeholder="name@example.com"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              data-testid="product-detail-evaluation"
              as="textarea"
              rows={ 3 }
              value={ message }
              name="message"
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Button type="submit" variant="primary" size="lg" onClick={ this.handleClick }>
            Salvar
          </Button>
        </Form>
      </section>

    );
  }
}

ReviewForm.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ReviewForm;
