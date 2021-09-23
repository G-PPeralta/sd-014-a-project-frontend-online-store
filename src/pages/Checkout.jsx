import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const numberFormat = (value) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(value);
class Checkout extends React.Component {
  render() {
    const states = [
      'Acre',
      'Alagoas',
      'Amapá',
      'Amazonas',
      'Bahia',
      'Ceará',
      'Distrito Federal',
      'Espírito Santo',
      'Goías',
      'Maranhão',
      'Mato Grosso',
      'Mato Grosso do Sul',
      'Minas Gerais',
      'Pará',
      'Paraíba',
      'Paraná',
      'Pernambuco',
      'Piauí',
      'Rio de Janeiro',
      'Rio Grande do Norte',
      'Rio Grande do Sul',
      'Rondônia',
      'Roraíma',
      'Santa Catarina',
      'São Paulo',
      'Sergipe',
      'Tocantins',
    ];

    const storage = JSON.parse(localStorage.getItem('cartList'));

    const valores = storage.map((product) => parseFloat(product.prodPrice));

    const valorUnico = valores.reduce((accum, curr) => accum + curr);

    return (
      <div className="main-cols">
        <Header />
        <div className="main-sec ma w60 mb5">
          <h2 className="revise-title mb-5">Revise seus produtos</h2>
          {storage.map((product) => (
            <div key="index">
              <p className="check-prod-name">{product.name}</p>
              <p className="check-prod-code">{product.prodId}</p>
              <p>{ numberFormat(product.prodPrice)}</p>
            </div>
          ))}
          <h5 className="checkout-total">
            { `Valor total: ${numberFormat(valorUnico)}` }
          </h5>
          <h4 className="mt-5 mb-3">Informações do comprador</h4>
          <form className="gocol ma w60">
            <label htmlFor="fullName">
              <input
                data-testid="checkout-fullname"
                type="text"
                placeholder="Nome completo"
                id="fullName"
                onChange={ this.handleChange }
                className="form-control mb-2"
              />
            </label>

            <label htmlFor="cpf">
              <input
                type="text"
                placeholder="CPF"
                id="cpf"
                data-testid="checkout-cpf"
                className="form-control mb-2"
              />
            </label>

            <label
              htmlFor="email"
            >
              <input
                data-testid="checkout-email"
                type="email"
                placeholder="Email"
                id="email"
                className="form-control mb-2"
              />
            </label>

            <label
              htmlFor="telefone-number"
            >
              <input
                data-testid="checkout-phone"
                type="text"
                placeholder="Telefone"
                id="telefone-number"
                className="form-control mb-2"
              />
            </label>

            <label
              htmlFor="cep-id"
            >
              <input
                data-testid="checkout-cep"
                type="text"
                placeholder="CEP"
                id="cep-id"
                className="form-control mb-2"
              />
            </label>

            <label
              htmlFor="endereco-id"
            >
              <input
                data-testid="checkout-address"
                type="text"
                placeholder="Endereço"
                id="endereco-id"
                className="form-control mb-2"
              />
            </label>

            <label
              htmlFor="text-complement"
            >
              <input
                type="text"
                placeholder="Complemento"
                id="text-complement"
                className="form-control mb-2"
              />
            </label>

            <label
              htmlFor="number-id"
            >
              <input
                type="text"
                placeholder="Número"
                id="number-id"
                className="form-control mb-2"
              />
            </label>

            <label
              htmlFor="state-id"
            >
              <select
                id="state-id"
                placeholder="Estado"
                className="form-select mb-2"
              >
                {states.map((state, index) => (
                  <option key={ index } value="">{ state }</option>
                ))}
              </select>
            </label>

            <label
              htmlFor="city-id"
            >
              <input
                type="text"
                placeholder="Cidade"
                id="city-id"
                className="form-control mb-2"
              />
            </label>
          </form>
          <h4 className="mt-5 mb-3">Método de pagamento</h4>

          <label htmlFor="pag-boleto" className="me-2">
            <input
              className="me-1"
              type="radio"
              id="pag-boleto"
              value="Boleto"
              name="forma-pagamento"
            />
            Boleto
          </label>

          <label htmlFor="pag-visa" className="me-2">
            <input
              className="me-1"
              type="radio"
              id="pag-visa"
              value="Visa"
              name="forma-pagamento"
            />
            Visa
          </label>

          <label htmlFor="pag-master" className="me-2">
            <input
              className="me-1"
              type="radio"
              id="pag-master"
              value="MasterCard"
              name="forma-pagamento"
            />
            MasterCard
          </label>

          <label htmlFor="pag-elo" className="me-2">
            <input
              className="me-1"
              type="radio"
              id="pag-elo"
              value="Elo"
              name="forma-pagamento"
            />
            Elo
          </label>
          <br />
          <button type="button" className="mt-3 btn btn-warning">Comprar</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Checkout;
