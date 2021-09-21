import React, { Component } from 'react';
import { Star, StarFill } from 'react-bootstrap-icons';
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
    this.handleStars(parseInt(id, 10) + 1);
  }

  handleStars(rate) {
    const { stars } = this.state;
    const ind = parseInt(rate, 10);
    let newStars;

    if (!stars[ind]) {
      newStars = stars.map((_star, index) => (index + 1) <= ind);
    } else {
      newStars = stars.map((_star, index) => (index + 1) < ind);
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
