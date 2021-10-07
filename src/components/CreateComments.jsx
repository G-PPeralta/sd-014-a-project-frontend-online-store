import React from 'react';
import propTypes from 'prop-types';

class CreateComments extends React.Component {
  constructor(props) {
    super(props);
    const { comments: { inputText, stars } } = this.props;

    this.state = {
      [`stars-${inputText}`]: stars
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
    return (
      <div>
        <h4>{inputEmail}</h4>
        <p>{inputText}</p>
        <label htmlFor={`stars-${inputText}`} onChange={ this.handleChange }>
          <input type="radio" id="one" value={1} name={`stars-${inputText}`}
          checked={ numberStars === 1 ? true : false }/>
          1
          <input type="radio" id="two" value={2} name={`stars-${inputText}`}
          checked={ numberStars === 2 ? true : false }/>
          2
          <input type="radio" id="thre" value={3} name={`stars-${inputText}`}
          checked={ numberStars === 3 ? true : false }/>
          3
          <input type="radio" id="four" value={4} name={`stars-${inputText}`}
          checked={ numberStars === 4 ? true : false }/>
          4
          <input type="radio" id="five" value={5} name={`stars-${inputText}`}
          checked={ numberStars === 5 ? true : false }/>
          5
        </label>
      </div>
    );
  }
}

CreateComments.propTypes = {
  email: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default CreateComments;
