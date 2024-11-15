import { Component, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectData,
  selectError,
  selectLoading,
} from './ngrx-store-test/data.selectors';
import { loadData } from './ngrx-store-test/data.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  version = VERSION.full;

  data$: any;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  test: any = [];

  constructor(private store: Store) {
    this.data$ = this.store.select(selectData);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);

    this.data$.subscribe((item: any) => {
      console.log('item', item);
      this.test.push(...item);
    });
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.test = [];
    this.store.dispatch(loadData());
  }
}
