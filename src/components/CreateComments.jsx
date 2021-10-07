import React from 'react';
import propTypes from 'prop-types';

class CreateComments extends React.Component {
  constructor(props) {
    super(props);
    const { comments: { inputText, stars } } = this.props;

    this.state = {
      [`stars-${inputText}`]: stars,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { comments: { inputEmail, inputText, stars } } = this.props;
    const numberStars = Number(stars);
    const STAR_THREE = 3;
    const STAR_FOUR = 4;
    const STAR_FIVE = 5;
    return (
      <div>
        <h4>{inputEmail}</h4>
        <p>{inputText}</p>
        <label htmlFor={ `stars-${inputText}` } onChange={ this.handleChange }>
          <input
            type="radio"
            id="one"
            value={ 1 }
            name={ `stars-${inputText}` }
            checked={ numberStars === 1 }
          />
          1
          <input
            type="radio"
            id="two"
            value={ 2 }
            name={ `stars-${inputText}` }
            checked={ numberStars === 2 }
          />
          2
          <input
            type="radio"
            id="thre"
            value={ 3 }
            name={ `stars-${inputText}` }
            checked={ numberStars === STAR_THREE }
          />
          3
          <input
            type="radio"
            id="four"
            value={ 4 }
            name={ `stars-${inputText}` }
            checked={ numberStars === STAR_FOUR }
          />
          4
          <input
            type="radio"
            id="five"
            value={ 5 }
            name={ `stars-${inputText}` }
            checked={ numberStars === STAR_FIVE }
          />
          5
        </label>
      </div>
    );
  }
}

CreateComments.propTypes = {
  comments: propTypes.shape({
    inputText: propTypes.string.isRequired,
    inputEmail: propTypes.string.isRequired,
    stars: propTypes.string.isRequired,
  }).isRequired,
};

export default CreateComments;
