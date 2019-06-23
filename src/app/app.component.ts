import {Component, HostBinding, HostListener, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectAll} from './ngrx/todo/todo.selectors';
import {Observable, Subject} from 'rxjs';
import {Todo} from './models/todo';
import {takeUntil, tap} from 'rxjs/operators';
import {AppState} from './ngrx/app.state';
import {getCurrentTheme, getFontSize} from './ngrx/settings/settings.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'todo-undo-redo';
  private unsubscribe$ = new Subject();


  constructor(private store: Store<AppState>, private renderer: Renderer2) {

  }

  @HostListener('window:keydown', ['$event']) keyDown(e: KeyboardEvent) {
    if (e.ctrlKey && e.code === 'KeyZ') {
      alert(1);
    }
  }

  theme;
  @HostBinding('style.fontSize.em') fontSize = 1;


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.store.pipe(select(getCurrentTheme), takeUntil(this.unsubscribe$)).subscribe(theme => {
      this.renderer.removeClass(document.body, this.theme);
      this.theme = theme;
      this.renderer.addClass(document.body, this.theme);
    });
    this.store.pipe(select(getFontSize), takeUntil(this.unsubscribe$)).subscribe(fontSize => {
      this.fontSize = fontSize;
    });
  }
}
