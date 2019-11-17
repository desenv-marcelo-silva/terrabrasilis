import React, { Component } from "react";
import ListarResultadoBusca from "./ListarResultadoBusca";

import "bootstrap/dist/css/bootstrap.css";

class BuscarGoogleBooks extends Component {
  constructor(props) {
    super(props);
    this.state = { termo: "", livros: [] };
  }

  handleChange = event => {
    this.setState({ termo: event.target.value });
  };

  obterLinkImagem = volumeInfo => {
    return volumeInfo.hasOwnProperty("imageLinks")
      ? volumeInfo.imageLinks.smallThumbnail
      : "";
  };

  obterImprenta = item => {
    let imprenta = item.volumeInfo.hasOwnProperty("authors")
      ? item.volumeInfo.authors[0]
      : "";

    if (item.volumeInfo.hasOwnProperty("publishedDate")) {
      imprenta += imprenta.length > 0 ? ", " : "";
      imprenta += item.volumeInfo.publishedDate.slice(0, 4);
    }

    return `(${imprenta})`;
  };

  handleClick = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.termo}`)
      .then(resp => resp.json())
      .then(data => {
        const livros = [];
        //console.log(data);
        data.items.map(item => {
          livros.push({
            id: item.id,
            link: item.selfLink,
            titulo: item.volumeInfo.title,
            imagem: this.obterLinkImagem(item.volumeInfo),
            imprenta: this.obterImprenta(item)
          });
        });
        this.setState({ livros });
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  render() {
    return (
      <div style={{ marginTop: "10%" }}>
        <div className="row">
          <div className="col-md-12 text-left">
            <label
              style={{
                fontSize: "25px",
                marginRight: "1%",
                fontWeight: "bold"
              }}
            >
              Digite o nome do livro
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-11">
            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="Termo a ser buscado"
              onChange={this.handleChange}
              value={this.state.texto}
            />
          </div>
          <div className="col-md-1">
            <button
              className="btn btn-primary btn-sm"
              onClick={this.handleClick}
            >
              Buscar
            </button>
          </div>
        </div>
        <ListarResultadoBusca livros={this.state.livros} />
      </div>
    );
  }
}

export default BuscarGoogleBooks;
