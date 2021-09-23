import React, { Component } from 'react';

const girls = 'Anna Hamann && Andrea Herrera && ';
const boys = 'Pedro Buente && Thiago Almeida && Willian Amorim';

class Footer extends Component {
  render() {
    return (
      <footer className="shopping-footer">
        <p className="payments-footer">
          Formas de pagamento aceitas: cartões de crédito
          (Visa, MasterCard, Elo e American Express) e boleto.
          Também aceitamos abraços!
        </p>
        <p>
          FrontEnd Online Store designed by the amazing DEVs:
          <br />
          { girls + boys}
        </p>
      </footer>
    );
  }
}

export default Footer;
