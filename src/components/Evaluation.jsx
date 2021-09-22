import React from 'react';
import PropTypes from 'prop-types';

class Evaluation extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <fieldset value={ value }>
        <p>{localStorage.getItem('email')}</p>
        <p>
          Avaliação:
          {localStorage.getItem('avaliacao')}
        </p>
        <p>{localStorage.getItem('mensagem')}</p>
        <hr />
      </fieldset>
    );
  }
}

Evaluation.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
};

Evaluation.defaultProps = {
  value: [],
};

export default Evaluation;
