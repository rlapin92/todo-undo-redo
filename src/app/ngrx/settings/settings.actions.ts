import {Action} from '@ngrx/store';


export enum SettingsActionTypes {
  CHANGE_THEME = '[Settings] Change theme',
  INC_FONT = '[Todo] Increase font size',
  DEC_FONT = '[Todo] Decrease font size '
}


export class ChangeThemeAction implements Action {
  readonly type = SettingsActionTypes.CHANGE_THEME;

}

export class IncFontAction implements Action {
  readonly type = SettingsActionTypes.INC_FONT;
}

export class DecFontAction implements Action {
  readonly type = SettingsActionTypes.DEC_FONT;
}


export type SettingsActions = ChangeThemeAction | IncFontAction | DecFontAction;
