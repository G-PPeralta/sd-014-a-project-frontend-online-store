import React from 'react';
import PropTypes from 'prop-types';

class EvaluationStar extends React.Component {
  render() {
    const { onChangeValue, avaliacao } = this.props;
    return (
      <div value={ avaliacao } onChange={ onChangeValue }>
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

EvaluationStar.propTypes = {
  onChangeValue: PropTypes.func,
  avaliacao: PropTypes.string,
};

EvaluationStar.defaultProps = {
  onChangeValue: undefined,
  avaliacao: '0',
};

export default EvaluationStar;
