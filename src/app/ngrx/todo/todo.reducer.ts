import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {Todo} from '../../models/todo';
import {TodoState} from './todo.state';
import {TodoActions, TodoActionTypes} from './todo.actions';


export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

const initialState: TodoState = todoAdapter.getInitialState({
  ids: ['1', '2', '3', '4'],
  entities: {
    1: {
      id: '1',
      title: 'Play the guitar',
      done: false
    },
    2: {
      id: '2',
      title: 'Do homework',
      done: false
    },
    3: {
      id: '3',
      title: 'Read a book',
      done: false
    },
    4: {
      id: '4',
      title: 'Have breakfast',
      done: true
    }
  }
});


export const todoReducer = (state: TodoState = initialState, action: TodoActions) => {
  switch (action.type) {
    case TodoActionTypes.DELETE:
      return todoAdapter.removeOne(action.id, state);
    case TodoActionTypes.ADD:
      return todoAdapter.addOne(action.todo, state);
    case TodoActionTypes.UPDATE:
      return todoAdapter.updateOne(action.todo, state);
  }
  return state;
};
