import React, { Component } from 'react';

const girls = 'Anna Hamann && Andrea Herrera && ';
const boys = 'Pedro Buente && Thiago Almeida && Willian Amorim';

class Footer extends Component {
  render() {
    return (
      <footer className="shopping-footer">
        <p>FrontEnd Online Store designed by the amazing DEVs:</p>
        <p>{ girls + boys}</p>
      </footer>
    );
  }
}

export default Footer;
