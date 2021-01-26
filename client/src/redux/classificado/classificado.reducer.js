import ClassificadoActionTypes from "./classificado.types";

const INITIAL_STATE = {
  classificados: [],
  isFetching: false,
  errorMessage: undefined,
};

const classificadoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClassificadoActionTypes.FETCH_CLASSIFICADOS_START:
    case ClassificadoActionTypes.ADD_CLASSIFICADO_START:
      return {
        ...state,
        isFetching: true,
      };
    case ClassificadoActionTypes.FETCH_CLASSIFICADOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        classificados: action.payload,
      };
    case ClassificadoActionTypes.FETCH_CLASSIFICADOS_FAILURE:
    case ClassificadoActionTypes.ADD_CLASSIFICADO_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case ClassificadoActionTypes.ADD_CLASSIFICADO_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default classificadoReducer;
