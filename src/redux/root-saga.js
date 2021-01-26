import { all, call } from "redux-saga/effects";

import { classificadoSagas } from "./classificado/classificado.sagas";

export default function* rootSaga() {
  yield all([call(classificadoSagas)]);
}
