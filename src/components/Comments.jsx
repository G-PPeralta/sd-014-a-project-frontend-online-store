import React from 'react';
import CreateComments from './CreateComments';

class Comments extends React.Component {
  constructor() {
    super();

    this.state = {
      inputEmail: '',
      inputText: '',
      comments: [],
      stars: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setItemsToState = this.setItemsToState.bind(this);
  }

  componentDidMount() {
    const parseComments = JSON.parse(localStorage.getItem('comments'));
    if (parseComments !== null) {
      return this.setItemsToState(parseComments);
    }
  }

  handleClick(e) {
    const { inputEmail, inputText, comments, stars } = this.state;
    this.setState(() => ({
      comments: [...comments, { inputEmail, inputText, stars }],
      inputEmail: '',
      inputText: '',
    }));
    localStorage.setItem('comments', JSON.stringify([...comments, {
      inputEmail,
      inputText,
      stars,
    }]));
    e.preventDefault();
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  setItemsToState(array) {
    this.setState({
      comments: array,
    });
  }

  render() {
    const { inputEmail, inputText, comments } = this.state;
    return (
      <div>
        <h3>Avaliações</h3>
        <form>
          <div>
            <input
              name="inputEmail"
              value={ inputEmail }
              type="email"
              placeholder="Email"
              onChange={ this.handleChange }
              required
            />
            <label htmlFor="stars" onChange={ this.handleChange }>
              <input type="radio" value={ 1 } id="one" name="stars" required />
              1
              <input type="radio" value={ 2 } id="two" name="stars" />
              2
              <input type="radio" value={ 3 } id="thre" name="stars" />
              3
              <input type="radio" value={ 4 } id="four" name="stars" />
              4
              <input type="radio" value={ 5 } id="five" name="stars" />
              5
            </label>
          </div>
          <div>
            <textarea
              name="inputText"
              value={ inputText }
              onChange={ this.handleChange }
              data-testid="product-detail-evaluation"
              id=""
              cols="45"
              rows="7"
              placeholder="Mensagem (opcional)"
            />
          </div>
          <button type="submit" onClick={ this.handleClick }>Enviar</button>
        </form>

        <section>
          { comments && comments.map((comment) => (
            <CreateComments
              key={ comment.inputEmail }
              comments={ comment }
              stars={ comment.stars }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Comments;
