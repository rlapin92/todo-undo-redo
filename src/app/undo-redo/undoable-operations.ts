import {TodoActionTypes} from '../ngrx/todo/todo.actions';
import {SettingsActionTypes} from '../ngrx/settings/settings.actions';
import {UndoableOperation} from './undoable.operation';

export const UNDOABLE_OPERATIONS: UndoableOperation[] =
  [
    {hint: 'Update todo', type: TodoActionTypes.UPDATE},
    {hint: 'Add todo', type: TodoActionTypes.ADD},
    {hint: 'Remove todo', type: TodoActionTypes.DELETE},
    {hint: 'Decrease font size', type: SettingsActionTypes.DEC_FONT},
    {hint: 'Increase font size', type: SettingsActionTypes.INC_FONT},
  ];
