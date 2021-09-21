import React from 'react';

class FinishBuy extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      itens: [],
      totalPrice: 0.00,
    };
  }

  componentDidMount() {
    this.pegarCarrinho();
  }

  pegarCarrinho = async () => {
    const itens = await JSON.parse(localStorage.getItem('cartItems'));
    let totalPrice = 0.00;
    itens.forEach((item) => {
      const bar = totalPrice;
      totalPrice = bar + item.price;
      return totalPrice;
    });
    console.log(totalPrice);
    this.setState({ itens, isLoading: false, totalPrice });
  }

  renderItens() {
    const { itens, totalPrice } = this.state;
    return (
      <div>
        <p>Revise seus produtos</p>
        {itens.map((item) => (
          <div key={ item.id }>
            <img src={ item.thumbnail } alt={ item.title } />
            <p>{ item.title }</p>
            <p>{ item.price }</p>
            <p>{`Quantidade: ${item.quantity}`}</p>
          </div>
        ))}
        <p>{`Total: R$ ${totalPrice.toFixed(2)}`}</p>
      </div>
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        { isLoading ? null : this.renderItens() }
      </div>
    );
  }
}

export default FinishBuy;
