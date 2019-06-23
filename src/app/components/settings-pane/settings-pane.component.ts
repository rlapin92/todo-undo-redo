import {Component, OnInit} from '@angular/core';
import {AppState} from '../../ngrx/app.state';
import {Store} from '@ngrx/store';
import {ChangeThemeAction, DecFontAction, IncFontAction} from '../../ngrx/settings/settings.actions';

@Component({
  selector: 'app-settings-pane',
  templateUrl: './settings-pane.component.html',
  styleUrls: ['./settings-pane.component.scss']
})
export class SettingsPaneComponent implements OnInit {

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {

  }

  switchTheme() {
    this.store.dispatch(new ChangeThemeAction());
  }

  incFont() {
    this.store.dispatch(new IncFontAction());
  }

  decFont() {
    this.store.dispatch(new DecFontAction());
  }
}
