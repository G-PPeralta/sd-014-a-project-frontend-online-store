import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

export default class MenuCategory extends React.Component {
  render() {
    const { produtos } = this.props;
    return (
      <div>
        {produtos.map((produto) => (<MenuItem
          key={ produto.id }
          produto={ produto.name }
        />))}
      </div>
    );
  }
}

MenuCategory.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  })).isRequired,
};
