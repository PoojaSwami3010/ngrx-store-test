import { createReducer, on } from '@ngrx/store';
import { loadData, loadDataSuccess, loadDataFailure } from './data.actions';

export interface DataState {
  data: any[];
  loading: boolean;
  error: any;
}

export const initialState: DataState = {
  data: [],
  loading: false,
  error: null,
};

const _dataReducer = createReducer(
  initialState,
  on(loadData, (state) => ({ ...state, loading: true })),
  on(loadDataSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
    error: null,
  })),
  on(loadDataFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function dataReducer(state: any, action: any) {
  return _dataReducer(state, action);
}
