import {ActionReducerMap} from '@ngrx/store';
import {AppState} from './app.state';
import {todoReducer} from './todo/todo.reducer';
import {settingsReducer} from './settings/settings.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  todos: todoReducer,
  settings: settingsReducer
};
