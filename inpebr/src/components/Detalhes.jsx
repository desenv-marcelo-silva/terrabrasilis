import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Detalhes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      livro: {}
    };
  }

  componentDidMount() {
    fetch(this.props.link)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          livro: data.volumeInfo
        });
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  render() {
    if (this.state.livro.length === 0) return null;

    return (
      <div className="row">
        <div class="col-md-3 col-md-offset-9">
          <h1>Detalhes do livro</h1>
          <div className="card">
            <img
              src={this.state.livro.imageLinks.smallThumbnail}
              alt={this.state.livro.title}
              className="card-img-top"
              width="150px"
              height="200px"
            />
            <div className="card-body">
              <p>
                {this.state.livro.title}
              </p>
              <p>
                {this.state.livro.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
