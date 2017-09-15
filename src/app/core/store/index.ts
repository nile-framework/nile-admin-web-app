import { Observable } from 'rxjs/Observable';
import { NgModule } from '@angular/core';
import { StoreModule, combineReducers } from '@ngrx/store';
// import { compose } from '@ngrx/core/compose';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { localStorageSync } from 'ngrx-store-localstorage';
import 'rxjs/add/operator/let';

import { environment } from '../../../environments/environment';
import { getSidebarExpanded } from './app-layout';
import { EchoesState, EchoesReducers, EchoesActions } from './reducers';


export { EchoesState } from './reducers';
const actions = EchoesActions;
const reducers = EchoesReducers;
