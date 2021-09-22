import React from 'react';

class EvaluationStar extends React.Component {
  render() {
    return (
      <div>
        <input type="radio" value="1" name="star" />
        1
        <input type="radio" value="2" name="star" />
        2
        <input type="radio" value="3" name="star" />
        3
        <input type="radio" value="4" name="star" />
        4
        <input type="radio" value="5" name="star" />
        5
      </div>
    );
  }
}

export default EvaluationStar;
