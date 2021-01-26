import { combineReducers } from "redux";

import ClassificadoReducer from "./classificado/classificado.reducer";
import SnackbarReducer from "./snackbar/snackbar.reducer";
import DialogReducer from "./dialog/dialog.reducer";

const rootReducer = combineReducers({
  classificado: ClassificadoReducer,
  snackbar: SnackbarReducer,
  dialog: DialogReducer,
});

export default rootReducer;
