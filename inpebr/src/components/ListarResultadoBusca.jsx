import React, { Component } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import Detalhes from "./Detalhes";

class ListarResultadoBusca extends Component {
  constructor(props) {
    super(props);
  }

  verDetalhes = link => {
    ReactDOM.render(
      <Detalhes link={link} />,
      document.getElementsByClassName("container")[0]
    );
  };

  render() {
    if (this.props.livros.length === 0) return null;

    return (
      <div className="row mt-2">
        <div className="col-md-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>capa</th>
                <th>Título</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {this.props.livros.map(livro =>
                <tr key={livro.id}>
                  <td>
                    <img
                      src={livro.imagem}
                      alt={livro.titulo}
                      className="img-thumbnail rounded"
                      width="50px"
                      height="50px"
                    />
                  </td>
                  <td>
                    <span>
                      {`${livro.titulo} ${livro.imprenta}`}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => this.verDetalhes(livro.link)}
                    >
                      Ver detalhes
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListarResultadoBusca;
