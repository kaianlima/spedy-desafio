import { createSelector } from "reselect";

const selectDialog = (state) => state.dialog;

export const selectDialogOpen = createSelector(
  [selectDialog],
  (dialog) => dialog.open
);
