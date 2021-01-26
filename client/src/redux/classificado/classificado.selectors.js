import { createSelector } from "reselect";

const selectClassificado = (state) => state.classificado;

export const selectClassificados = createSelector(
  [selectClassificado],
  (classificado) => classificado.classificados.classificados
);

export const selectClassificadosForPreview = createSelector(
  [selectClassificados],
  (classificados) => (classificados ? classificados : [])
);

export const selectIsClassificadosFetching = createSelector(
  [selectClassificado],
  (classificados) => classificados.isFetching
);

export const selectIsClassificadosLoaded = createSelector(
  [selectClassificado],
  (classificados) => !!classificados.classificados
);
