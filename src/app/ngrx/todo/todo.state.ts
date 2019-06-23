import {EntityState} from '@ngrx/entity';
import {Todo} from '../../models/todo';

export interface TodoState extends EntityState<Todo> {
  // additional entity state properties
}
