import {Action} from '@ngrx/store';
import {Todo} from '../../models/todo';
import {Update} from '@ngrx/entity';


export enum TodoActionTypes {
  UPDATE = '[Todo] Update todo item',
  DELETE = '[Todo] Delete todo item',
  ADD = '[Todo] Add todo item'
}


export class DeleteAction implements Action {
  readonly type = TodoActionTypes.DELETE;

  constructor(public id: string) {

  }
}

export class AddAction implements Action {
  readonly type = TodoActionTypes.ADD;

  constructor(public todo: Todo) {

  }
}

export class UpdateAction implements Action {
  readonly type = TodoActionTypes.UPDATE;

  constructor(public todo: Update<Todo>) {

  }
}



export type TodoActions = DeleteAction | AddAction | UpdateAction;
