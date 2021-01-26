import { all, takeLatest, call, put } from "redux-saga/effects";

import {
  fetchClassificadosSuccess,
  fetchClassificadosFailure,
  addClassificadoSuccess,
  addClassificadoFailure,
} from "./classificado.actions";

import ClassificadoActionTypes from "./classificado.types";

import api from "../../services/api";

export function* fetchClassificadosAsync() {
  try {
    const classificados = yield api.get(
      "classificados/search/findAllByOrderByDataCadastroAsc"
    );
    yield put(fetchClassificadosSuccess(classificados));
  } catch (error) {
    yield put(fetchClassificadosFailure(error.message));
  }
}

export function* addClassificadoAsync({ payload }) {
  try {
    yield console.log(payload);
    yield api.post("classificados", payload);
    yield put(addClassificadoSuccess());
  } catch (error) {
    yield put(addClassificadoFailure(error.message));
  }
}

export function* fetchClassificadosStart() {
  yield takeLatest(
    ClassificadoActionTypes.FETCH_CLASSIFICADOS_START,
    fetchClassificadosAsync
  );
}

export function* addClassificadoStart() {
  yield console.log("in Saga Start");
  yield takeLatest(
    ClassificadoActionTypes.ADD_CLASSIFICADO_START,
    addClassificadoAsync
  );
}

export function* onAddClassificadoSuccess() {
  yield takeLatest(
    ClassificadoActionTypes.ADD_CLASSIFICADO_SUCCESS,
    fetchClassificadosAsync
  );
}

export function* classificadoSagas() {
  yield all([
    call(fetchClassificadosStart),
    call(addClassificadoStart),
    call(onAddClassificadoSuccess),
  ]);
}
