import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { dataReducer } from './ngrx-store-test/data.reducer';
import { DataEffects } from './ngrx-store-test/data.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ dataFeature: dataReducer }),
    EffectsModule.forRoot([DataEffects]),
  ],
})
export class AppModule {}
