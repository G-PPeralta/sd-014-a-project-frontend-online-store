import React from 'react';

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
      <div>
        <div>
          <p>Revise seus produtos</p>
          {storage.map((product) => (
            <div key="index">
              <h3>{product.name}</h3>
              <p>{product.prodId}</p>
              <p>{product.prodPrice}</p>
            </div>
          ))}
          <h3>
            Valor total: R$
            {valorUnico}
          </h3>
        </div>
        <form>
          <p>Informações do comprador</p>

          <label htmlFor="fullName">
            <input
              data-testid="checkout-fullname"
              type="text"
              placeholder="Nome completo"
              id="fullName"
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="cpf">
            <input
              type="text"
              placeholder="CPF"
              id="cpf"
              data-testid="checkout-cpf"
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
            />
          </label>

          <label
            htmlFor="text-complement"
          >
            <input
              type="text"
              placeholder="Complemento"
              id="text-complement"
            />
          </label>

          <label
            htmlFor="number-id"
          >
            <input
              type="text"
              placeholder="Número"
              id="number-id"
            />
          </label>

          <label
            htmlFor="city-id"
          >
            <input
              type="text"
              placeholder="Cidade"
              id="city-id"
            />
          </label>

          <label
            htmlFor="state-id"
          >
            <select
              id="state-id"
              placeholder="Estado"
            >
              {states.map((state, index) => (
                <option key={ index } value="">{ state }</option>
              ))}
            </select>
          </label>

        </form>
        <div>
          <p>Método de pagamento</p>

          <label htmlFor="pag-boleto">
            <input
              type="radio"
              id="pag-boleto"
              value="Boleto"
              name="forma-pagamento"
            />
            Boleto
          </label>

          <label htmlFor="pag-visa">
            <input
              type="radio"
              id="pag-visa"
              value="Visa"
              name="forma-pagamento"
            />
            Visa
          </label>

          <label htmlFor="pag-master">
            <input
              type="radio"
              id="pag-master"
              value="MasterCard"
              name="forma-pagamento"
            />
            MasterCard
          </label>

          <label htmlFor="pag-elo">
            <input
              type="radio"
              id="pag-elo"
              value="Elo"
              name="forma-pagamento"
            />
            Elo
          </label>
        </div>
        <button type="button">Comprar</button>
      </div>
    );
  }
}

export default Checkout;
