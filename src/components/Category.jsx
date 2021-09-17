import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  render() {
    const { title, id } = this.props;
    const { onChange } = this.props;
    return (
      <label
        data-testid="category"
        htmlFor={ id }
        className="d-flex
        justify-content-between
        align-items-center
        border-bottom
        rounded
        p-2
        form-check-label
        mb-2
        "
      >
        <span>{ title }</span>
        <input
          type="radio"
          className="form-check-input"
          name="category"
          id={ id }
          onChange={ onChange }
          value={ id }
        />
      </label>
    );
  }
}

Category.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Category;
