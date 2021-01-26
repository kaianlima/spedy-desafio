import ClassificadoActionTypes from "./classificado.types";

export const fetchClassificadosStart = () => ({
  type: ClassificadoActionTypes.FETCH_CLASSIFICADOS_START,
});

export const fetchClassificadosSuccess = (classificados) => ({
  type: ClassificadoActionTypes.FETCH_CLASSIFICADOS_SUCCESS,
  payload: classificados,
});

export const fetchClassificadosFailure = (errorMessage) => ({
  type: ClassificadoActionTypes.FETCH_CLASSIFICADOS_FAILURE,
  payload: errorMessage,
});

export const addClassificadoStart = (classificado) => ({
  type: ClassificadoActionTypes.ADD_CLASSIFICADO_START,
  payload: classificado,
});

export const addClassificadoSuccess = () => ({
  type: ClassificadoActionTypes.ADD_CLASSIFICADO_SUCCESS,
});

export const addClassificadoFailure = (errorMessage) => ({
  type: ClassificadoActionTypes.ADD_CLASSIFICADO_FAILURE,
  payload: errorMessage,
});
