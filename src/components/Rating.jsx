import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlankStar from './BlankStar';
import YellowStar from './YellowStar';

export default class Rating extends Component {
  constructor() {
    super();
    this.state = {
      stars: [false, false, false, false, false] };
    this.renderStars = this.renderStars.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { rate } = this.props;
    if (rate > 0) {
      this.handleStars(rate);
    }
  }

  handleClick({ target: { id } }) {
    this.handleStars(parseInt(id, 10));
  }

  handleStars(rate) {
    const { stars } = this.state;
    const { onClick } = this.props;

    const ind = parseInt(rate, 10);
    let newStars;

    if (!stars[ind - 1]) {
      newStars = stars.map((_star, index) => (index + 1) <= ind);
      onClick(ind);
    } else {
      newStars = stars.map((_star, index) => (index + 1) < ind);
      onClick(ind - 1);
    }
    this.setState({ stars: newStars });
  }

  doNothing = () => null;

  renderStars() {
    const { stars } = this.state;
    const { showOnly } = this.props;
    return stars.map((star, index) => (
      star ? (
        <YellowStar
          key={ index + 1 }
          id={ index + 1 }
          onClick={ showOnly ? this.doNothing : this.handleClick }
        />
      ) : (
        <BlankStar
          key={ index + 1 }
          id={ index + 1 }
          onClick={ showOnly ? this.doNothing : this.handleClick }
        />
      )
    ));
  }

  render() {
    return (
      <div>
        {this.renderStars()}
      </div>
    );
  }
}

Rating.propTypes = {
  rate: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  showOnly: PropTypes.bool,
};

Rating.defaultProps = { showOnly: false };
