import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="container py-3 mt-2">
        <h1 className="h2 pb-2">Grupo: </h1>
        <ul className="list-group">
          <li className="list-group-item">Julio Cesar Muchiutti | @juli0c3sar</li>
          <li
            className="list-group-item"
          >
            Paulo Eduardo de Sordi Gomes | @pauloeduardods
          </li>
          <li
            className="list-group-item"
          >
            Paulo Renan Nascimento de Almeida | @paulorenan
          </li>
          <li className="list-group-item">Rafael Frasson | @raffrasson</li>
          <li className="list-group-item">Thiago de Oliveira | @ThDevTrader</li>
        </ul>
      </div>
    );
  }
}

export default About;
