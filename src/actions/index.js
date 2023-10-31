import axios from "axios";

export function traerCategorias() {

  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/categoriaRestaurante/todos");
    return dispatch({
      type: "TRAER_CATEGORIAS",
      payload: json.data,
    });
  };
}

export function guardarCategoria(categoria) {
  return async function (dispatch) {
      return dispatch({
      type: "GUARDAR_CATEGORIAS",
      payload: categoria
    });
  };
}