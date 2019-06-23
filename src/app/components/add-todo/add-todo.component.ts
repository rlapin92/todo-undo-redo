import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  newTodoText = '';
  @Output() add = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  emitNewTodo() {
    this.add.emit(this.newTodoText);
    this.newTodoText = '';
  }
}
