import DialogActionTypes from "./dialog.types";

const INITIAL_STATE = {
  open: false,
};

const DialogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DialogActionTypes.TOGGLE_DIALOG:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

export default DialogReducer;
