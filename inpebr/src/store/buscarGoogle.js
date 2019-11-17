import { createStore } from "redux";

const BUSCAR_GOOGLE = "BUSCAR_GOOGLE";
const VER_DETALHE = "VER_DETALHE";

//actions
buscarGoogle = texto => {
  type: BUSCAR_GOOGLE, texto;
};

verDetalhe = indice => {
  type: VER_DETALHE, indice;
};

//reducers
const INITIAL_STATE = { texto: "", indice: null };

rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.Type) {
    case BUSCAR_GOOGLE:
      console.log("buscar");
      break;
    case VER_DETALHE:
      console.log("ver detalhe");
      break;
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
