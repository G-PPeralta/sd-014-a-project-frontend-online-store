import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Star extends Component {
  render() {
    const { onMouseEnter, onMouseLeave, handleClick } = this.props;
    return (
      <div
        onMouseEnter={ onMouseEnter }
        onMouseLeave={ onMouseLeave }
        onMouseClick={ handleClick }
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" /></svg>
      </div>
    );
  }
}

Star.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  // rating
};

export default Star;
