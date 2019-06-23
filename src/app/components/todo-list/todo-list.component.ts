import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Todo} from '../../models/todo';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {selectAll} from '../../ngrx/todo/todo.selectors';
import {AddAction, DeleteAction, UpdateAction} from '../../ngrx/todo/todo.actions';
import {generateId} from '../../utils/utils';
import {Update} from '@ngrx/entity';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  private todos$: Observable<Todo[]>;
  trackByFn = (todo) => todo.id;


  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.todos$ = this.store.pipe(select(selectAll));
  }

  onDelete(id: string) {
    this.store.dispatch(new DeleteAction(id));
  }

  onAdd(title: string) {
    this.store.dispatch(new AddAction({done: false, title, id: generateId()}));
  }

  onUpdate(update: Update<Todo>) {
    this.store.dispatch(new UpdateAction(update));
  }
}
