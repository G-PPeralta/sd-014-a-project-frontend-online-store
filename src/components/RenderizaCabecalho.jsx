import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RenderizaCabecalho extends Component {
  render() {
    const { pesquisa, handleClick, handleChange } = this.props;
    return (
      <div className="cabecalho">
        <div className="linha-cabecalho">
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <div className="linha-cabecalho">
          <label htmlFor="searchProduct">
            <input
              onChange={ handleChange }
              // source: https://stackoverflow.com/questions/31272207/to-call-onchange-event-after-pressing-enter-key
              onKeyPress={
                ((event) => {
                  if (event.key === 'Enter') {
                    handleClick();
                  }
                })
              }
              value={ pesquisa }
              data-testid="query-input"
              type="text"
              id="searchProduct"
            />
          </label>
        </div>
      </div>
    );
  }
}

RenderizaCabecalho.propTypes = {
  pesquisa: PropTypes.string,
}.isRequired;

export default RenderizaCabecalho;
