import SnackbarActionTypes from "./snackbar.types";

const INITIAL_STATE = {
  open: false,
};

const SnackbarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SnackbarActionTypes.TOGGLE_SNACKBAR:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

export default SnackbarReducer;
