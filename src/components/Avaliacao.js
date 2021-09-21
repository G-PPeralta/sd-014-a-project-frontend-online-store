import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { id } = this.props;
    if (localStorage[`${id}`]) {
      const coments = JSON.parse(localStorage[`${id}`]);
      return coments.map(({ email, estrela, comentario }) => (
        <div key={ email }>
          <h4>{`E-mail: ${email}`}</h4>
          <p>{`Avaliação: ${estrela}`}</p>
          <p>{`Comentário: ${comentario}`}</p>
        </div>
      ));
    }
    return (
      <div>
        Não tem comentário!
      </div>

    );
  }
}

Avaliacao.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Avaliacao;
