import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Todo} from '../../models/todo';
import {Update} from '@ngrx/entity';
import {MatDialog} from '@angular/material';
import {UpdateDialogComponent} from '../update-dialog/update-dialog.component';
import {filter, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit, OnDestroy {
  @Input() item: Todo;
  @Output() delete = new EventEmitter<string>();
  @Output() update = new EventEmitter<Update<Todo>>();
  private unsubscribe$ = new Subject();

  constructor(private matDialog: MatDialog) {
  }

  ngOnInit() {
    console.log('init');
  }

  showEditDialog() {
    this.matDialog.open(UpdateDialogComponent, {data: this.item.title})
      .afterClosed()
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(Boolean))
      .subscribe(res => {
        this.update.emit({id: this.item.id , changes: {title: res}});
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

  }
}
