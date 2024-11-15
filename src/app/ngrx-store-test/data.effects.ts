import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { loadData, loadDataSuccess, loadDataFailure } from './data.actions';

@Injectable()
export class DataEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadData),
      mergeMap(() =>
        this.dataService.getData().pipe(
          map((data) => loadDataSuccess({ data })),
          catchError((error) => of(loadDataFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
