import React from "react";
import BuscarGoogleBooks from "./components/BuscarGoogleBooks";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="alert alert-dark">
        <h2>Buscar livros no Google</h2>
      </div>
      <div className="container">
        <BuscarGoogleBooks />
      </div>
    </div>
  );
}

export default App;
