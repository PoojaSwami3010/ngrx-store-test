import { createAction, props } from '@ngrx/store';

// Action to load data
export const loadData = createAction('[Data] Load Data');

// Action to store the loaded data in the store
export const loadDataSuccess = createAction(
  '[Data] Load Data Success',
  props<{ data: any[] }>()
);

export const loadDataFailure = createAction(
  '[Data] Load Data Failure',
  props<{ error: any }>()
);
