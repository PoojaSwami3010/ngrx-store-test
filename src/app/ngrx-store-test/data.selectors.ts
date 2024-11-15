import { createSelector, createFeatureSelector } from '@ngrx/store';
import { DataState } from './data.reducer';

export const selectDataFeature =
  createFeatureSelector<DataState>('dataFeature');

export const selectData = createSelector(
  selectDataFeature,
  (state: DataState) => state.data
);

export const selectLoading = createSelector(
  selectDataFeature,
  (state: DataState) => state.loading
);

export const selectError = createSelector(
  selectDataFeature,
  (state: DataState) => state.error
);
