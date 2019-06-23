import {todoAdapter} from './todo.reducer';
import {createFeatureSelector} from '@ngrx/store';
import {TodoState} from './todo.state';


const getTodoState = createFeatureSelector<TodoState>('todos');

export const {selectAll} = todoAdapter.getSelectors(getTodoState);
