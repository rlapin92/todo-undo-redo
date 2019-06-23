import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SettingsState} from './settings.state';


const getSettingsState = createFeatureSelector('settings');

export const getCurrentTheme = createSelector(getSettingsState,
  (state: SettingsState) => state.currentTheme);

export const getFontSize = createSelector(getSettingsState,
  (state: SettingsState) => state.fontSize);
