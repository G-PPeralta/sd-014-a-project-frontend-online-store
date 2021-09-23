import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStoraged,
  addLocalStoraged, readAssessmentsFiltred } from '../services/localStorage';
import Comment from './Comment';

export class FormAvaliate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      comment: '',
      rating: 5,
      id: props.id,
      assessments: [],
    };
  }

  componentDidMount() {
    createStoraged('assessments');
    this.updateAssessments('assessments');
  }

  updateAssessments = (key) => {
    const { id } = this.props;
    this.setState({
      assessments: readAssessmentsFiltred(key, id),
    });
  }

  handleGeneric = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { id } = this.state;
    const KEY_FOR_STORAGE = 'assessments';
    addLocalStoraged(KEY_FOR_STORAGE, this.state);
    this.setState({
      assessments: readAssessmentsFiltred(KEY_FOR_STORAGE, id),
    });
  }

  render() {
    const { email, comment, rating, assessments } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              required
              onChange={ this.handleGeneric }
              placeholder="digite seu email"
              type="email"
              name="email"
              id="email"
              value={ email }
            />
          </label>
          <label htmlFor="comment">
            Comentario:
            <textarea
              placeholder="Acrescente um comentario (opcional)"
              onChange={ this.handleGeneric }
              name="comment"
              id="comment"
              cols="30"
              rows="10"
              value={ comment }
              data-testid="product-detail-evaluation"
            />
          </label>
          <label htmlFor="rating">
            Nota:
            <input
              onChange={ this.handleGeneric }
              type="number"
              name="rating"
              id="rating"
              min="1"
              max="5"
              value={ rating }
            />
          </label>
          <button onClick={ this.handleClick } type="button">Avaliar</button>
        </form>
        { assessments.map((assessment) => (
          <Comment key={ assessment.id } assessment={ assessment } />)) }
      </div>
    );
  }
}

FormAvaliate.propTypes = {
  addAssessments: PropTypes.func,
  id: PropTypes.string,
}.isRequired;

export default FormAvaliate;
