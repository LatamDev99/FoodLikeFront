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

export function guardarRestaurante(restaurante) {
  return async function (dispatch) {
      return dispatch({
      type: "GUARDAR_RESTAURANTE",
      payload: restaurante
    });
  };
}



export function guardarNuevoUsuario(usuario){
  return async function (dispatch) {
    return await dispatch({
      type: "GUARDAR_NUEVO_USUARIO",
      payload: usuario
    });
  };
}

export function datosUsuario(usuario) {
  return async function (dispatch) {
    return await dispatch({
      type: "DATOS_USUARIO",
      payload: {
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        lada: usuario.lada,
        telefono: usuario.telefono,
        correo: usuario.correo,
        preferencias: usuario.preferencias
      }
    });
  };
}