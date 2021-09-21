import React, { Component } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Rating from './Rating';
import { readFeedbacks, addFeedback } from '../services/cartAPI';

export default class FeedbackForm extends Component {
  constructor() {
    super();
    this.state = {
      feedbacks: [],
      rate: 0,
      feedback: '',
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRate = this.handleRate.bind(this);
    this.fetchFeedbacks = this.fetchFeedbacks.bind(this);
    this.renderFeedbacks = this.renderFeedbacks.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    this.fetchFeedbacks();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleRate(rate) {
    this.setState({ rate });
  }

  handleButton() {
    const { feedback, rate, email } = this.state;
    console.log(feedback, rate, email);

    const { id } = this.props;
    addFeedback({ email, rate, feedback }, id);
  }

  fetchFeedbacks() {
    const { id } = this.props;
    const feedbacks = readFeedbacks();
    const feed = feedbacks[id] || [];
    this.setState({ feedbacks: feed });
  }

  renderFeedbacks() {
    const { feedbacks } = this.state;
    return feedbacks.map((({ email, rate, feedback }, index) => (
      <div key={ index }>
        <p>{ email }</p>
        <span>{rate}</span>
        <p>{feedback}</p>
      </div>
    )));
  }

  render() {
    const { email, feedback, rate, feedbacks } = this.state;
    return (
      <>
        <Form>
          <Form.Group>
            <h3>Avaliações</h3>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              required
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
            <Rating rate={ rate } onClick={ this.handleRate } />
          </Form.Group>

          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={ { height: '100px' } }
              data-testid="product-detail-evaluation"
              name="feedback"
              value={ feedback }
              onChange={ this.handleChange }
            />
          </FloatingLabel>
          <Button variant="primary" type="button" onClick={ this.handleButton }>
            Avaliar
          </Button>
        </Form>
        <div id="feedbacks">
          { feedbacks.length > 0 && this.renderFeedbacks()}
        </div>
      </>
    );
  }
}

FeedbackForm.propTypes = { id: PropTypes.string.isRequired };
