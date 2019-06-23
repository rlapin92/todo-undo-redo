import {SettingsState} from './settings.state';
import {SettingsActions, SettingsActionTypes} from './settings.actions';


const initialState: SettingsState = {
  currentTheme: 'purple-theme',
  fontSize: 1
};
export const settingsReducer = (state: SettingsState = initialState, action: SettingsActions) => {
  switch (action.type) {
    case SettingsActionTypes.CHANGE_THEME:
      return {...state, currentTheme: state.currentTheme === 'purple-theme' ? 'orange-theme' : 'purple-theme'};
    case SettingsActionTypes.INC_FONT:
      return {...state, fontSize: Math.min(state.fontSize + 0.1, 2)};
    case SettingsActionTypes.DEC_FONT:
      return {...state, fontSize: Math.max(state.fontSize - 0.1, 0.5)};
  }
  return state;
};
