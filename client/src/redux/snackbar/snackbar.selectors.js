import { createSelector } from "reselect";

const selectSnackbar = (state) => state.snackbar;

export const selectSnackbarOpen = createSelector(
  [selectSnackbar],
  (snackbar) => snackbar.open
);
