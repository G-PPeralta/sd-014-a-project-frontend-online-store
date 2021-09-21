import React, { Component } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class GoToHomeButton extends Component {
  render() {
    return (
      <Link
        to="/"
        className="btn btn-primary h-auto py-2 px-3"
      >
        <FaHome className="fs-5" />
      </Link>
    );
  }
}

export default GoToHomeButton;
