import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import {NgrxModule} from './ngrx/ngrx.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule, MatRippleModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { UpdateDialogComponent } from './components/update-dialog/update-dialog.component';
import { SettingsPaneComponent } from './components/settings-pane/settings-pane.component';
import {UndoRedoModule} from './undo-redo/undo-redo.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    AddTodoComponent,
    UpdateDialogComponent,
    SettingsPaneComponent
  ],
  imports: [
    BrowserModule,
    NgrxModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    MatRippleModule,
    UndoRedoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UpdateDialogComponent]
})
export class AppModule {
}
