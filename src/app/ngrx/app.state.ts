import {TodoState} from './todo/todo.state';
import {SettingsState} from './settings/settings.state';

export interface AppState {
  todos: TodoState;
  settings: SettingsState;

}
